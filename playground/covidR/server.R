library(shiny)
library(ggplot2)
library(data.table)
library(scales)
library(personograph)

# read data

load("data/heatmap_ests_age_sex.RData")
load("data/heatmap_ests_age.RData")


shinyServer(function(input, output) {
  
  
  dat1 <- reactive({
    
    # since data is sex stratified scale up N's using men and women UK population counts
    
    km1[which(gender=="Women"),n_p:=n/sum(km1$n[which(km1$gender=="Women")])]
    km1[which(gender=="Men"),n_p:=n/sum(km1$n[which(km1$gender=="Men")])]
    
    km1[which(gender=="Women"),n_pop:=n_p*33650000] 
    km1[which(gender=="Men"),n_pop:=n_p*32790000] 
    
    km1[,n_pop_deaths:=n_pop*(est/100)]
    
    km1[,n_covid_deaths:=((1-input$covid_p)*n_pop_deaths)+(input$covid_p*input$covid_rr*n_pop_deaths)]
    
    km1[,n_covid_xs:=n_covid_deaths-n_pop_deaths]
    
    km1[,n_covid_xs_p:=n_covid_xs/n_pop]
    
    km1[,km_text:=paste0(round(est,2),"\nN=",n)]
    
    km1[,xs_text:= paste0(round(n_covid_xs,0),"\n(",round(100*n_covid_xs_p,1),")")]
    
    km1$n_rf <- factor(km1$n_rf,levels=c("3+","2","1","0")) # reverse ordering of n_rf in plots
    
    km1
    
  })
  
  
  dat1_text <- reactive({
    
    total_xs_text <- dat1()[,lapply(.SD, sum),by=c("gender"), .SDcols=c("n_pop","n_pop_deaths","n_covid_deaths","n_covid_xs")]
    
    total_xs_text[,text1:=paste0("Total excess deaths ~ ",format(round(n_covid_xs,0),big.mark=","))]
    
    total_xs_text
    
  })
  
  
  
  dat2 <- reactive({
    
    km2[,n_p:=n/3862012]
    km2[,n_pop:=n_p*66440000] 
    

    km2[,n_pop_deaths:=n_pop*(est)]
    
    km2[,n_covid_deaths:=((1-input$covid_p)*n_pop_deaths)+(input$covid_p*input$covid_rr*n_pop_deaths)]
    
    km2[,n_covid_xs:=n_covid_deaths-n_pop_deaths]
    
    km2[,n_covid_xs_p:=n_covid_xs/n_pop]
    
    km2[,km_text:=paste0(round(est,2),"\nN=",n)]
    
    km2[,xs_text:= paste0(round(n_covid_xs,0),"\n(",round(100*n_covid_xs_p,1),")")]
    
    km2$n_rf <- factor(km2$n_rf,levels=c("3+","2","1","0")) # reverse ordering of n_rf in plots
    
    km2
    
  })
  
  
  dat2_text <- reactive({
    
    total_xs_text2 <- dat2()[,lapply(.SD, sum), .SDcols=c("n_pop","n_pop_deaths","n_covid_deaths","n_covid_xs")]
    
    total_xs_text2[,text1:=paste0("Total excess deaths ~ ",format(round(n_covid_xs,0),big.mark=","))]
    
    total_xs_text2
    
  })
  
  
  # KM estimated plot
  
  
  output$plot1 <- renderPlot({
    if(input$sex_strat=="Yes"){
      
      ggplot(dat1(),aes(x=age_cat, y=n_rf, fill=est))+
        geom_tile()+
        facet_grid(~gender)+
        theme_minimal()+
        xlab("Age group (years)")+
        ylab("Number of underlying conditions")+
        theme(legend.position = "bottom",
              axis.title=element_text(size=14),
              axis.text=element_text(size=12),
              strip.text.x = element_text(size = 14))+
        scale_fill_gradient(name="1 year all-cause mortality risk %",
                            limits=c(0,30), 
                            breaks=c(0,5,10,15,20,25,30),
                            low ="#FFFF40FF",
                            high="#FF0000FF")+
        guides(fill=guide_colorbar(title.position="top", title.hjust=0.5, barwidth=10))+
        geom_text(aes(label=km_text),size=4)}
    
    else if(input$sex_strat=="No"){
      
      ggplot(dat2(),aes(x=age_cat, y=n_rf, fill=est*100))+
        geom_tile()+
        theme_minimal()+
        xlab("Age group (years)")+
        ylab("Number of underlying conditions")+
        theme(legend.position = "bottom",
              axis.title=element_text(size=14),
              axis.text=element_text(size=12))+
        scale_fill_gradient(name="1 year all-cause mortality risk %",
                            limits=c(0,30), 
                            breaks=c(0,5,10,15,20,25,30),
                            low ="#FFFF40FF",
                            high="#FF0000FF")+
        guides(fill=guide_colorbar(title.position="top", title.hjust=0.5, barwidth=10))+
        geom_text(aes(label=km_text),size=4)
      
    }
    
    
  })
  
  
  
  # excess deaths per cell
  
  output$plot2 <- renderPlot({
    if(input$sex_strat=="Yes"){
      
    ggplot(dat1(),aes(x=age_cat, y=n_rf, fill=n_covid_xs))+
      geom_tile()+
      facet_grid(~gender)+
      theme_minimal()+
      xlab("Age group (years)")+
      ylab("Number of underlying conditions")+
      theme(legend.position = "bottom",
            axis.title=element_text(size=14),
            axis.text=element_text(size=12),
            strip.text.x = element_text(size = 14))+
      scale_fill_gradientn(name="Absolute excess UK deaths",
                           limits=c(0,250000), 
                           breaks=c(0,1000,5000,10000,50000,100000,250000),
                           colors =c("greenyellow",rev(heat.colors(20)[1:19])),
                           values=rescale(c(0,1,100,5000,10000,50000,100000,250000),from=c(0,250000)),
                           guide="legend")+
      guides(fill=guide_legend(title.position="top", title.hjust=0.5, keywidth=2,label.position="bottom", nrow=1))+
      geom_text(aes(label=xs_text),size=4)
    }
    
   else if(input$sex_strat=="No"){
      
      ggplot(dat2(),aes(x=age_cat, y=n_rf, fill=n_covid_xs))+
        geom_tile()+
        theme_minimal()+
        xlab("Age group (years)")+
        ylab("Number of underlying conditions")+
        theme(legend.position = "bottom",
              axis.title=element_text(size=14),
              axis.text=element_text(size=12))+
        scale_fill_gradientn(name="Absolute excess UK deaths",
                             limits=c(0,250000), 
                             breaks=c(0,1000,5000,10000,50000,100000,250000),
                             colors =c("greenyellow",rev(heat.colors(20)[1:19])),
                             values=rescale(c(0,1,100,5000,10000,50000,100000,250000),from=c(0,250000)),
                             guide="legend")+
        guides(fill=guide_legend(title.position="top", title.hjust=0.5, keywidth=2,label.position="bottom", nrow=1))+
        geom_text(aes(label=xs_text),size=4)
    }
    
  })
  
  # overall excess deaths
  
  output$plot3 <- renderPlot({
    if(input$sex_strat=="Yes"){
      
    ggplot(dat1(),aes(x=age_cat, y=n_rf, fill=n_covid_xs))+
      geom_tile()+
      facet_grid(~gender)+
      theme_minimal()+
      xlab("Age group (years)")+
      ylab("Number of underlying conditions")+
      theme(legend.position = "bottom",
            axis.title=element_text(size=14),
            axis.text=element_text(size=12),
            strip.text.x = element_text(size = 14))+
      scale_fill_gradientn(name="Absolute excess UK deaths",
                           limits=c(0,250000), 
                           breaks=c(0,1000,5000,10000,50000,100000,250000),
                           colors =c("greenyellow",rev(heat.colors(20)[1:19])),
                           values=rescale(c(0,1,100,5000,10000,50000,100000,250000),from=c(0,250000)),
                           guide="legend")+
      guides(fill=guide_legend(title.position="top", title.hjust=0.5, keywidth=2,label.position="bottom", nrow=1))+
      geom_text(inherit.aes=F, data=dat1_text(),aes(label=text1),size=8,x=1,y=2.3,hjust=0,vjust=0)
    }
    
    else if(input$sex_strat=="No"){
      
      ggplot(dat2(),aes(x=age_cat, y=n_rf, fill=n_covid_xs))+
        geom_tile()+
        theme_minimal()+
        xlab("Age group (years)")+
        ylab("Number of underlying conditions")+
        theme(legend.position = "bottom",
              axis.title=element_text(size=14),
              axis.text=element_text(size=12))+
        scale_fill_gradientn(name="Absolute excess UK deaths",
                             limits=c(0,250000), 
                             breaks=c(0,1000,5000,10000,50000,100000,250000),
                             colors =c("greenyellow",rev(heat.colors(20)[1:19])),
                             values=rescale(c(0,1,100,5000,10000,50000,100000,250000),from=c(0,250000)),
                             guide="legend")+
        guides(fill=guide_legend(title.position="top", title.hjust=0.5, keywidth=2,label.position="bottom", nrow=1))+
        geom_text(inherit.aes=F, data=dat2_text(),aes(label=text1),size=8,x=1,y=2.3,hjust=0,vjust=0)
    }
      
    
  })
  
  
  output$text1 <- renderText({
    
    if(input$sex_strat=="Yes"){
      "Observed 1 year mortality (%) by age, sex and number of underlying conditions, estimated using NHS health records in 3.8 million adults in England"

    }
     else if (input$sex_strat=="No"){
      "Observed 1 year mortality (%) by age and number of underlying conditions, estimated using NHS health records in 3.8 million adults in England"
    }
  })
  
  output$text2 <- renderText({
    

    if(input$sex_strat=="Yes"){
      "Excess deaths in the UK due to COVID-19, stratified by age, sex and number of underlying conditions"
      
    }
    else if (input$sex_strat=="No"){
      "Excess deaths in the UK due to COVID-19, stratified by age and number of underlying conditions"
    }
  })
  
  output$text3 <- renderText({
    
    
    if(input$sex_strat=="Yes"){
      "Total excess deaths in the UK due to COVID-19, stratified by sex"
      
    }
    else if (input$sex_strat=="No"){
      "Total excess deaths in the UK due to COVID-19"
    }
  })
  
})




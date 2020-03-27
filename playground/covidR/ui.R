
library(shiny)



shinyUI(
  fluidPage(
    
    titlePanel(h1(strong("Title goes here", style= "color:#1d70ad"))),
    
    sidebarLayout(
      sidebarPanel(
        
        h5("In tabs 2 and 3:"), 
        h5("Estimate the number of excess deaths in the UK (pop: 66.4 million) under different scenarios of Corona virus prevalence and additional mortality risk"),
        br(),
        radioButtons("sex_strat","Sex stratification?",choices=c("Yes","No"),selected="Yes",inline=T),
        br(),
        
        sliderInput("covid_p", "Prevalence of Corona virus infection",
                    min=0.00001,max=0.8, value=0.00001),
        
        sliderInput("covid_rr", "Additional mortality risk with Corona virus",
                    min=1.05,max=3,step=0.05, value=1.05)
        
        
      ),
      
      mainPanel(
        br(),
        
        tabsetPanel(
          
          tabPanel("Observed 1 year death risk",
                   br(),
                   textOutput("text1"),
                   br(),
                   plotOutput("plot1")),
          tabPanel("Excess Corona virus deaths (stratified)",
                   
                   br(),                   
                   textOutput("text2"),
                   
                   br(),
                   plotOutput("plot2")),
          tabPanel("Excess Corona virus deaths (Total)",
                   br(),
                   textOutput("text3"),
                   
                   
                   br(),
                   plotOutput("plot3"))
          
          
        )
      )
    )
  )
)





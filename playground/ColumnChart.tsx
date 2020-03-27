import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import colors from '../src/style/colors';

interface Props {
  id: string;
}

export default function ColumnChart({ id }: Props) {
  const [data, setData] = useState([]);
  const age = 12;
  useEffect(() => {
    const data = d3.range(30).map((n, i) => {
      const num = n < 15 ? n : 30 - n;
      const cappedNum = num > 13 ? 13 : num;
      const bottomCappedNum = cappedNum < 4 ? 0 : cappedNum;

      const color = i === age ? colors.orange : colors.paleGrey;

      return {
        id: `condition-${i}`,
        num: bottomCappedNum * 10,
        fillColor: color,
      };
    });
    setData(data);
  }, []);

  useEffect(() => {
    const bottomOfGraph = 250;
    const xOffset = 150;
    const stringArr = data.map(d => d.id);

    const y_scale = d3
      .scaleLinear()
      .domain([0, bottomOfGraph])
      .rangeRound([0, 300]);

    const x_scale = d3
      .scaleBand()
      .domain(stringArr)
      .range([550, -50])
      .paddingInner(0.5);

    const svg = d3.select('svg');
    const x_axis = d3
      .axisBottom(x_scale)
      .tickSize(0)
      .tickValues([]);

    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${xOffset}, ${bottomOfGraph})`)
      .call(x_axis);
    const axisThickness = 5;
    d3.select('.axis path')
      .attr('stroke-width', axisThickness)
      .attr('stroke', colors.brown);
    const rects = svg
      .selectAll(`rect`)
      .data(data)
      .enter()
      .append('rect')
      .attr('width', x_scale.bandwidth())
      .attr('height', 0)
      .attr('fill', d => d.fillColor)
      .attr('x', (d, i) => {
        return x_scale(d.id) + xOffset;
      })
      .attr('y', d => bottomOfGraph);

    rects
      .transition()
      .duration(500)
      .attr('height', d => y_scale(d.num))
      .attr('y', d => bottomOfGraph - y_scale(d.num) - axisThickness / 2);

    const tooltipPadding = 10;
    rects
      .on('mouseover', function(d) {
        d3.select(this).attr('fill', 'grey');
        tooltipGroup.style('visibility', 'visible');
        tooltipCountryText.text(d.fillColor);
      })
      .on('mousemove', d => {
        tooltipGroup.attr(
          'transform',
          `translate(${d3.event.offsetX + tooltipPadding},${d3.event.offsetY})`
        );
        tooltipCountryText.text(d.fillColor);
      })
      .on('mouseout', function(d) {
        d3.select(this).attr('fill', () => d.fillColor);
        tooltipGroup.style('visibility', 'hidden');
      });

    const tooltipGroup = svg
      .append('g')
      .attr('class', 'tooltip')
      .style('visibility', 'hidden');
    const tooltipRect = tooltipGroup
      .append('rect')
      .attr('width', 200)
      .attr('height', 60)
      .attr('fill', 'white')
      .attr('stroke', colors.orange);
    const tooltipCountryText = tooltipGroup
      .append('text')
      .attr('class', 'tooltip')
      .style('font-family', 'Lexend')
      .style('fill', colors.brown)
      .style('z-index', '100')
      .style('font-size', '10px')
      .attr('dx', '5')
      .attr('dy', '13');
  }, [data]);

  return null;
}

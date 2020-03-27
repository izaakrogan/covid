import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import colors from '../style/colors';

interface Props {
  deathRate: number;
  position: number;
  id: string;
  x: number;
  y?: number;
}

export default function ForceDirected({
  deathRate,
  position,
  id,
  x,
  y,
}: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    return () => d3.selectAll(`.circle-${position}`).remove();
  }, [position]);

  useEffect(() => {
    const data = d3.range(100).map((n, i) => {
      let fillColor = colors.paleGrey;
      if (n >= Math.ceil(deathRate)) fillColor = 'none';
      if (n < Math.floor(deathRate)) fillColor = colors.darkGrey;

      return { id: i, fillColor, position };
    });
    setData(data);
  }, [deathRate, position]);

  useEffect(() => {
    const radius = 6;

    const collision = d3.forceCollide(radius * 2).strength(0.8);
    interface dataWithCoordinates {
      x: number;
      y: number;
    }

    d3.forceSimulation(data)
      .force('collision', collision)
      .force('center', d3.forceCenter(x, y))
      .on('tick', () => {
        // call the tick function running the simulation
        d3.selectAll(`.circle-${position}`)
          .attr('cy', (d: dataWithCoordinates) => d.y)
          .attr('cx', (d: dataWithCoordinates) => d.x);
      });

    const svg = d3.select(`#${id}`);

    const circles = svg.selectAll(`.circle-${position}`).data(data);
    circles
      .enter()
      .append('circle')
      .attr('r', radius)
      .attr('class', `circle-${position}`)
      .attr('stroke', colors.orange)
      .attr('stroke-width', 2)
      .attr('opacity', 1)
      .attr('fill', d => d.fillColor);

    circles.attr('fill', d => d.fillColor);
  }, [data, deathRate, id, position, x, y]);

  return null;
}

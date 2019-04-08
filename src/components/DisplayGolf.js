import React, { Component } from 'react';
import * as timeline from "../data/timeline.json";
import Car from './Car';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

export default class DisplayGolf extends Component {
  render() {
    return (
      <div>
        <h1>History of the Volkswagen Golf</h1>
        <Timeline lineColor={'#ddd'}>
        {backwards.map((car) =>
              <TimelineItem
              key="001"
              dateText={car.year}
              style={{ color: '#153551' }}
              dateInnerStyle={{ background:car.bgcolor }}
            >
                <Car car_info={car}/>
            </TimelineItem>
            )}
        </Timeline>
      </div>
    )
  }
}
const cars = timeline.timeline;
const backwards = [...cars].reverse()

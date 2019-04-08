import React, { Component } from 'react'

export default class Car extends Component {
  render() {
      const car = this.props.car_info;
    return (
      <div>
            <h2>{car.name}</h2>
            <h3>{car.headline}</h3>
            <p>{car.weight} lbs | {car.HP} hp | {car.wheelbase} inch wheelbase</p>
            <ul>

            {car.facts.map((fact)=>
                <li>{fact}</li>
                )}
            </ul>
            {/* <img src={car.img} alt='' width="75%" height="50%" /> */}
      </div>
    )
  }
}

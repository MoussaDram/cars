import React, { Component } from 'react';
import Car from './Cars';

class MyCars extends Component {

  state = {
    voitures: [
      { name: 'Ford', color: 'gray', year:'2018' },
      { name: 'Audi', color: 'white', year: '2016' },
      { name: 'BMW', color: 'black', year: '2020' },
    ],
    titre: 'Mon catalogue des voitures'
  }

  addYears = () => {
    const updatedState = this.state.voitures.map((param) =>{
      return param.year -= 10;
    })
    this.setState({
      updatedState
    })
  }
  render() {
    const year = new Date().getFullYear();
    return (
      <div>
        <h1>{this.state.titre}</h1>
        <button onClick={this.addYears}>+10 ans</button>

        {this.state.voitures.map((voiture, index )=>{
          return(
            <div key={index}>
              <Car name={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'}/>
            </div>)

        })}
      </div>
    )
  }
}

export default MyCars;

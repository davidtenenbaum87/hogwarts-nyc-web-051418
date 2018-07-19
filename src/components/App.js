import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hog from './Hog'
import hogs from '../porkers_data';
import FilterHogs from './FilterHogs'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredHogs: hogs
    };
  }


  loadHogs = () => {
     return this.state.filteredHogs.map(hog => (
      <Hog
      name={hog.name}
      specialty={hog.specialty}
      greased={hog.greased}
      weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      medal={hog['highest medal achieved']}
      />
    ))

  }

  filterHogs = (event, hogState) => {
    event.preventDefault()

    let updatedHogs = hogs.slice()
    //{nameChecked: false, weightChecked: true, greasedUp: false}
    if(hogState.nameChecked) {
      updatedHogs.sort((hog1, hog2) => {
        return hog1.name.localeCompare(hog2.name)
      })
    }

    let weightKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    //sort by weight
    if(hogState.weightChecked) {
      updatedHogs.sort((hog1, hog2) => {
        return hog2[weightKey] - hog1[weightKey]
      })
    }

    //filter by greased
    if(hogState.greasedUp) {
      updatedHogs = updatedHogs.filter(hog => (
          hog.greased
        )
      )
    }


    this.setState({
      filteredHogs: updatedHogs
    })
  }



  render() {
    return (
      <div className="App">
          < Nav />
          < FilterHogs onSubmit={this.filterHogs}/>
          { this.loadHogs() }
      </div>
    )
  }
}

export default App;

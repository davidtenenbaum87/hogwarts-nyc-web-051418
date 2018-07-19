import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hog from './Hog'
import hogs from '../porkers_data';


class App extends Component {


  loadHogs = () => {
     return hogs.map(hog => (
      <Hog
      name={hog.name}
      specialty={hog.specialty}
      greased={hog.greased}
      weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      medal={hog['highest medal achieved']}
      />
    ))

  }

  render() {
    return (
      <div className="App">
          < Nav />
          { this.loadHogs() }
      </div>
    )
  }
}

export default App;

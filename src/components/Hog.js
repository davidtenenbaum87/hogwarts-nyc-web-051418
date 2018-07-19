import React, { Component } from 'react';

class Hog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      specialty: props.specialty,
      greased: props.greased,
      weight: props.weight,
      medal: props.medal,
    }
  }

  hogImgName = () => {
    console.log(this.state.name.toLowerCase().split(' ').join('_'))
    return this.state.name.toLowerCase().split(' ').join('_')
  }


  render() {
    return (
      <div className='pigTile'>
        <img src={"./hog-imgs/" + this.hogImgName() + ".jpg"}/>
        <p>{this.state.name}</p>
        <p>{this.state.specialty}</p>
        <p>{this.state.greased}</p>
        <p>{this.state.weight}</p>
        <p>{this.state.medal}</p>
      </div>
    )
  }
}

export default Hog;

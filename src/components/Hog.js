import React, { Component } from 'react';

class Hog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  hogImgName = () => {
    return this.props.name.toLowerCase().split(' ').join('_')
  }

  onClick = (event) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }


  displayDetails = () => {
    if(this.state.clicked) {
      return(
      <div>
        <p>{this.props.specialty}</p>
        <p>{this.props.greased}</p>
        <p>{this.props.weight}</p>
        <p>{this.props.medal}</p>
      </div>
      )
    }
  }


  render() {
    return (
      <div className='pigTile' onClick={this.onClick}>
        <img src={"./hog-imgs/" + this.hogImgName() + ".jpg"}/>
        <p>{this.props.name}</p>
        {this.displayDetails()}
      </div>
    )
  }
}

export default Hog;

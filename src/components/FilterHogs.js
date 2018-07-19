import React, { Component } from 'react'

class FilterHogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameChecked: false,
      weightChecked: false,
      greasedUp: false,
    };
  }


  nameChecked = (event) => {
    this.setState({
      nameChecked: !this.state.nameChecked
    })
  }

  weightChecked = (event) => {
    this.setState({
      weightChecked: !this.state.weightChecked
    })
  }

  greasedUp = (event) => {
    this.setState({
      greasedUp: !this.state.greasedUp
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.props.onSubmit(event, this.state)}>
          <h1> Sort Hogs By </h1>
          Name: <input type="checkbox" id="name" onClick={this.nameChecked}/>
          Weight: <input type="checkbox" id="weight" onClick={this.weightChecked}/>
          Greased? <input type="checkbox" id="greased" onClick={this.greasedUp}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default FilterHogs

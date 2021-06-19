import React, { PureComponent } from 'react'

class ClassCounter extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
       count: 7
    }
  }

  setCount(number) {
    this.setState({
      count: number
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setCount(this.state.count + 1)}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter;

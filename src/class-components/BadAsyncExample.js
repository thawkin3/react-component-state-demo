import React from 'react';

// BAD: Don't forget that setState is asynchronous

export class BadAsyncExample extends React.Component {
  state = {
    name: 'John'
  }

  setNameToMatt = () => {
    this.setState({ name: 'Matt' })
    alert(`The name is now... ${this.state.name}!`)
  }

  render() {
    return (
      <>
        <h3><span className="bad">BAD</span>:  Don't forget that setState is asynchronous</h3>
        <div>
          My name is {this.state.name}.
        </div>
        <button onClick={this.setNameToMatt}>Change name to "Matt"</button>
      </>
    )
  }
}

import React from 'react';

// GOOD: Use the callback method to run code after setState is finished

export class GoodAsyncExample extends React.Component {
  state = {
    name: 'John'
  }

  setNameToMatt = () => {
    this.setState(
      { name: 'Matt' },
      () => alert(`The name is now... ${this.state.name}!`)
    )
  }

  render() {
    return (
      <>
        <h3><span className="good">GOOD</span>:  Don't forget that setState is asynchronous</h3>
        <div>
          My name is {this.state.name}.
        </div>
        <button onClick={this.setNameToMatt}>Change name to "Matt"</button>
      </>
    )
  }
}

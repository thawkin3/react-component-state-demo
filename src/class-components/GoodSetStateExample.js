import React from 'react';

// Good: Use the `setState` method

export class GoodSetStateExample extends React.Component {
  state = {
    colors: ['red', 'blue', 'green']
  }

  addYellow = () => this.setState(prevState => ({ colors: [...prevState.colors, 'yellow'] }))

  render() {
    return (
      <>
        <h3><span className="good">GOOD</span>: Use the `setState` method</h3>
        <div>
          My favorite colors are:
          <ul>
            {this.state.colors.map((color, index) => <li key={`${color}-${index}`}>{color}</li>)}
          </ul>
        </div>
        <button onClick={this.addYellow}>Add "yellow" to list</button>
      </>
    )
  }
}

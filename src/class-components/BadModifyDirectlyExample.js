import React from 'react';

// BAD: Don't modify state directly (push)

export class BadModifyDirectlyExample extends React.Component {
  state = {
    colors: ['red', 'blue', 'green']
  }

  addYellow = () => this.state.colors.push('yellow')

  render() {
    return (
      <>
        <h3><span className="bad">BAD</span>: Don't modify state directly (push)</h3>
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

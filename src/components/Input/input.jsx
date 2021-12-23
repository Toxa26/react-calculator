import { Component } from 'react';

class Input extends Component {
  render() {
    const { result } = this.props;

    return (
      <div className="input">{result}</div>
    );
  }
}

export default Input;

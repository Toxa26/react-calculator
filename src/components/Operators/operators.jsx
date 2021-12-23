import { Component } from 'react';

class Operators extends Component {
  render() {
    const { handleClick } = this.props;

    return (
      <div className="operators">
        <div onClick={handleClick}>+</div>
        <div onClick={handleClick}>-</div>
        <div onClick={handleClick}>*</div>
        <div onClick={handleClick}>/</div>
      </div>
    );
  }
}

export default Operators;

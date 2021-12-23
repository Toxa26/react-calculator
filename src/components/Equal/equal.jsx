import { Component } from 'react';

class Equal extends Component {
  render() {
    const { calculate } = this.props;

    return (
      <div className="equal" onClick={calculate}>=</div>
    );
  }
}

export default Equal;

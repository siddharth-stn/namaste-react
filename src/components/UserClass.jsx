import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
  }
  render() {
    return (
      <div className="user-card">
        <button onClick={this.handleClick}>Counter: {this.state.count}</button>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;

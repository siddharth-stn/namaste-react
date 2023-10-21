import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    // super(props);
    super();
    console.log(props);
    console.log(this.props);
  }
  render() {
    // const { name } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;

import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };

    this.fetchData = async () => {
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const jsonData = await data.json();
      this.setState({
        userData: jsonData,
      });
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.state.userData.avatar_url} alt="avatar" />
        <h2>Name: {this.state.userData.name}</h2>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h2>{loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;

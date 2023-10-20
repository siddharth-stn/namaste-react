import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>I am an about Page</h1>
      <User name={"Akshay Saini (function)"} />
      <UserClass name={"Akshay Saini (class)"} location={"Dehradun (class)"} />
    </div>
  );
};

export default About;

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count1: 0,
      count2: 0,
      userInfo: {
        name: "dummy",
        location: "abc street"
      }
    };

    // console.log(this.props.name+"Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name+"Child componentDidMount");
    // API Calls
    const data = await fetch("https://api.github.com/users/sankalptrimade")
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json
    })
  }

  render() {
    // console.log(this.props.name+"Child Render");

    // const { name, location } = this.props;
    const { name, location } = this.state.userInfo
    // const { count1, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count1: {count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h1>Count2: {count2}</h1> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sankalptrimade0014</h4>
      </div>
    );
  }
}

export default UserClass;

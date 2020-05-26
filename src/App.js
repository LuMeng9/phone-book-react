import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  state = {
    information: [
      {
        id: 0,
        name: "Jhon",
        phone: "122 - 1223 - 32233"
      },
      {
        id: 1,
        name: "Anna",
        phone: "122 - 1111 - 22222"
      }
    ]
  };

  handleCreate = data => {
    // console.log(data);
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={this.state.information} />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;

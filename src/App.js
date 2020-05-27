import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 2;
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

  handleRemove = id => {
    const { information } = this.state;
    console.log("App info: " + information + " 32");
    this.setState({
      information: information.filter(it => it.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(it =>
        id === it.id ? { ...it, ...data } : it
      )
    });
  };

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          data={information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;

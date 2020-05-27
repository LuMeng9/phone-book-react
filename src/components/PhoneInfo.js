import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: "your name",
      phone: "000-0000-0000"
    },
    onRemove: () => console.warn("Ooops")
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    console.log("PhoneInfo this.props: " + this.props + " 14");
    console.log("PhoneInfo info: " + info + " 15");
    console.log("PhoneInfo onRemove: " + onRemove + " 16");
    onRemove(info.id);
  };

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    const { name, phone } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>Delete</button>
      </div>
    );
  }
}

export default PhoneInfo;

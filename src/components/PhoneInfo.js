import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      id: 0,
      name: "your name",
      phone: "000-0000-0000"
    }
  };

  state = {
    editing: false,
    name: "",
    phone: ""
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;

    if (!prevState.editing && this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    if (prevState.editing && !this.state.editing) {
      onUpdate(info.id, { name: this.state.name, phone: this.state.phone });
    }
  }

  render() {
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };
    // Edit Mode
    const { editing } = this.state;
    if (editing) {
      return (
        <div style={style}>
          <div>
            <input
              value={this.state.name}
              name="name"
              placeholder="your name..."
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              value={this.state.phone}
              name="phone"
              placeholder="your phone number..."
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>Apply</button>
          <button onClick={this.handleRemove}>Delete</button>
        </div>
      );
    }

    // Normal Mode
    const { name, phone } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>{name}</b>
        </div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>Delete</button>
        <button onClick={this.handleToggleEdit}>Update</button>
      </div>
    );
  }
}

export default PhoneInfo;

import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  };

  render() {
    const { data } = this.props;
    const list = data.map(iterate => (
      <PhoneInfo key={iterate.id} info={iterate} />
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;

import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined")
  };

  render() {
    const { data, onRemove } = this.props;
    console.log("PhoneInfoList data 12");
    console.log("PhoneInfoList onRemove 13");
    const list = data.map(iterate => (
      <PhoneInfo key={iterate.id} info={iterate} onRemove={onRemove} />
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;

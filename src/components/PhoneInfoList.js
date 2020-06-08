import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined")
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }

  render() {
    console.log("PhoneInfoList rendering 12");
    const { data, onRemove, onUpdate } = this.props;
    const list = data.map(iterate => (
      <PhoneInfo
        key={iterate.id}
        info={iterate}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;

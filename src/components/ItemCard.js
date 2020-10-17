import React, { Component } from "react";
import { addItem, removeItem } from "../actions";
import Checkbox from "./Checkbox";

export default class ItemCard extends Component {
  handleFavClick = () => {
    const { item } = this.props;

    this.props.dispatch(addItem(item));
  };

  render() {
    const { item, isSelected } = this.props;
    return (
      <div className="item-card">
        <div className="heading">
          <h2>Portugal</h2>
          <div className="items">
            <Checkbox label={"abcd"} />
            <Checkbox label={"efgh"} />
          </div>
        </div>
      </div>
    );
  }
}

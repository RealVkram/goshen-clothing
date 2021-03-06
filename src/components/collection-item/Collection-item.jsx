import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, imageUrl, name, price }) => (
  <div className="collection-item">
    <div
      className="image grow"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{`N${price}`}</span>
    </div>
  </div>
);

export default CollectionItem;

import React from "react";
import Button from "../components/Button";

export default () => (
  <div>
    <style jsx>{`
      div {
        background-color: gray;
        padding: 4px;
        width: 245px;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
    <Button primary>OK</Button>
    <Button>Cancel</Button>
    <Button disabled>Apply</Button>
  </div>
);

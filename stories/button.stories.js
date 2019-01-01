import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import Button from "../components/Button";

storiesOf("button", module).add("default", () => (
  <Button>Hi, I'm a button!</Button>
));

storiesOf("button", module).add("modal example", () => (
  <Fragment>
    <Button primary>OK</Button>
    <Button>Cancel</Button>
    <Button disabled>Apply</Button>
  </Fragment>
));

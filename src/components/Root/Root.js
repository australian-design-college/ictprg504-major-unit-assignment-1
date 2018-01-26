import React, { Component } from "react";
import { Window, TitleBar, Text } from "react-desktop/macOs";

import s from "./Root.scss";

export default class Root extends Component {
  render() {
    return (
      <div className={s.window}>
        <Window chrome height="400px" padding="10px" width="500px">
          <TitleBar controls title="My Custom Window" />
          <Text>Hello World</Text>
        </Window>
      </div>
    );
  }
}

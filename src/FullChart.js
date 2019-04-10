import React, { Component } from "react";
import Scatter from "./Scatter";
import { Button } from "reactstrap";

class FullChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Button color="primary">This is a button</Button>
        <Scatter
          sector={[0, 360]}
          background={"full-radar-no-color"}
          bgposition={[0.5, 1.016, 1.05]}
        />
      </React.Fragment>
    );
  }
}

export default FullChart;

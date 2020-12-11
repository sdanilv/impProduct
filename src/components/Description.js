import React from "react";
import classes from "./Description.module.css";
import { Collapse } from "antd";
const { Panel } = Collapse;
const Description = ({value}) => (
  <div className={classes.collapse}>
    <Collapse accordion>
      <Panel header="Описание" key="1">
          <p>
              {value}
          </p>
      </Panel>
  </Collapse>
  </div>
);

export default Description;

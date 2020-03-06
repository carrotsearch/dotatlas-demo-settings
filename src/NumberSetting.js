import React, { useState } from 'react';
import "./NumberSetting.css";

import { Slider, NumericInput, FormGroup, ControlGroup } from "@blueprintjs/core";

export const NumberSetting = ({ initialValue = 0, onChange }) => {
  const [ inputValue, setInputValue ] = useState(initialValue);

  const valueChanged = v => {
    const fixed = Math.floor(v * 100) / 100;
    setInputValue(fixed);
    onChange(fixed);
  };

  return (
      <FormGroup label="Elevation power" className="NumberSetting">
        <ControlGroup fill={true}>
          <div className="SliderContainer">
            <Slider min={0} max={1}
                    onChange={valueChanged}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                    stepSize={0.01}
                    labelStepSize={0.1}
                    labelPrecision={1}
            />
          </div>
          <div className="InputContainer">
            <NumericInput
                min={0}
                max={1}
                minorStepSize={0.01}
                stepSize={0.1}
                fill={true}
                value={inputValue}
                onValueChange={valueChanged}
            />
          </div>
        </ControlGroup>
      </FormGroup>
  );
};
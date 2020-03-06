import React, { useState } from 'react';

import { Slider, NumericInput } from "@blueprintjs/core";

export const NumberSetting = ({ initialValue = 0, onChange }) => {
  const [ inputValue, setInputValue ] = useState(initialValue);

  const valueChanged = v => {
    setInputValue(v);
    onChange(v);
  };

  return (
      <div>
        <Slider
            min={0}
            max={1}
            onChange={valueChanged}
            value={typeof inputValue === 'number' ? inputValue : 0}
            stepSize={0.01}
            labelStepSize={0.1}
        />
        <NumericInput
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            minorStepSize={0.01}
            stepSize={0.1}
            value={inputValue}
            onValueChange={valueChanged}
        />
      </div>
  );
};
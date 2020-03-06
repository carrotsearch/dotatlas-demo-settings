import React, { useState } from 'react';

import { Col, InputNumber, Row, Slider } from 'antd';

export const NumberSetting = ({ initialValue = 0, onChange }) => {
  const [ inputValue, setInputValue ] = useState(initialValue);

  const valueChanged = v => {
    setInputValue(v);
    onChange(v);
  };

  return (
      <Row>
        <Col span={12}>
          <Slider
              tooltipVisible={false}
              min={0}
              max={1}
              onChange={valueChanged}
              value={typeof inputValue === 'number' ? inputValue : 0}
              step={0.01}
          />
        </Col>
        <Col span={4}>
          <InputNumber
              min={0}
              max={1}
              style={{ marginLeft: 16 }}
              step={0.01}
              value={inputValue}
              onChange={valueChanged}
          />
        </Col>
      </Row>
  );
};
import React, { useEffect, useState } from 'react';
import './App.css';
import { DotAtlas } from "./DotAtlas";
import { Layout } from 'antd';
import { NumberSetting } from "./NumberSetting";

const { Content, Sider } = Layout;

function App() {
  const [ dotAtlasOptions, setDotAtlasOptions ] = useState({});
  const [ elevationPow, setElevationPow ] = useState(0.5);
  useEffect(() => {
    fetch("./data/ohsumed-vaccination.json")
        .then(result => result.json())
        .then(result => setDotAtlasOptions({ "lingo4g:result": result }))
  }, []);

  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Content style={{ position: "relative" }}>
          <DotAtlas options={dotAtlasOptions} elevationPow={elevationPow} />
        </Content>
        <Sider collapsible collapsed={false} onCollapse={() => {}} theme="light" width="20em" reverseArrow={true}
        style={{padding: "1em"}}>
          <div className="logo"/>
          <NumberSetting onChange={v => setElevationPow(v)} initialValue={elevationPow} />
        </Sider>
      </Layout>
  );
}

export default App;

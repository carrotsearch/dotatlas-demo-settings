import React, { useEffect, useState } from 'react';
import './App.css';
import { DotAtlas } from "./DotAtlas";
import { NumberSetting } from "./NumberSetting";


function App() {
  const [ dotAtlasOptions, setDotAtlasOptions ] = useState({});
  const [ elevationPow, setElevationPow ] = useState(0.5);
  useEffect(() => {
    fetch("./data/ohsumed-vaccination.json")
        .then(result => result.json())
        .then(result => setDotAtlasOptions({ "lingo4g:result": result }))
  }, []);

  return (
      <div style={{minHeight: "100vh"}}>
        <DotAtlas options={dotAtlasOptions} elevationPow={elevationPow} />
        <NumberSetting onChange={v => setElevationPow(v)} initialValue={elevationPow} />
      </div>
  );
}

export default App;

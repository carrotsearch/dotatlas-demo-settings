import React, { useEffect, useRef } from 'react';

import { DotAtlas as DotAtlasImpl } from "@carrotsearch/dotatlas";
import { ThemeSwitch } from "@carrotsearch/dotatlas/theme";

export const DotAtlas = () => {
  const element = useRef(null);
  const dotatlas = useRef(null);
  useEffect(() => {
    const points = [
      { x:  0,    y: 0,  label: "Central peak" },
      { x: -1,    y: 0,  label: "West peak" },
      { x:  1,    y: 0,  label: "East peak" },
      { x:  0,    y: -1, label: "North peak" },
      { x:  0,    y: 1,  label: "South peak" },
      { x:  0.12, y: 0 },
      { x:  0.06, y: 0.1 },
      { x: -0.5,  y: -0.5 },
      { x: -0.55, y: -0.525 },
      { x: -0.5,  y: 0.5 },
      { x:  0.5,  y: -0.5 },
      { x:  0.5,  y: 0.5 }
    ];

    const red = [200, 0, 0, 255];
    points.forEach(function (p, index) {
      p.elevation = index === 0 ? 1 : 0.35;
      p.markerSize = 1;
      p.markerColor = red;
    });

    const elevations = {
      points: points.filter(p => p.elevation !== undefined),
      type: "elevation"
    };
    const markers = {
      points: points.filter(p => p.markerSize !== undefined),
      type: "marker",
      markerSizeMultiplier: 10
    };
    const labels  = {
      points: points.filter(p => p.label !== undefined),
      type: "label"
    };

    dotatlas.current = DotAtlasImpl.with(ThemeSwitch).embed({
      element: element.current,
      layers: [
        // Currently, there is only one elevation and label layer allowed
        elevations,
        markers,
        labels
      ],
      pixelRatio: 2,
      theme: "dark"
    });
    requestAnimationFrame(() => {
      dotatlas.current.resize();
    });
  }, []);

  return <div ref={element} style={{width: "800px", height: "600px"}} />;
};
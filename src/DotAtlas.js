import React, { useEffect, useRef } from 'react';

import { DotAtlas as DotAtlasImpl } from "@carrotsearch/dotatlas";
import { Theme } from "@carrotsearch/dotatlas/theme";
import { Lingo4GDocumentMap } from "@carrotsearch/dotatlas/lingo4g";

export const DotAtlas = ({ options, elevationPow }) => {
  const element = useRef(null);
  const dotatlas = useRef(null);

  useEffect(() => {
    if (dotatlas.current) {
      dotatlas.current.set(options);
    }
  }, [ options ]);

  useEffect(() => {
    if (dotatlas.current) {
      const elevations = dotatlas.current.get("lingo4g:layer:elevations");
      if (elevations) {
        elevations.set("elevationPow", elevationPow);
        dotatlas.current.redraw();
      }
    }
  }, [ elevationPow ]);

  useEffect(() => {
    dotatlas.current = DotAtlasImpl.with(Theme, Lingo4GDocumentMap).embed({
      element: element.current,
      pixelRatio: window.devicePixelRatio || 1
    });
    requestAnimationFrame(() => {
      dotatlas.current.resize();
    });
  }, []);

  return <div ref={element}
              style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}/>;
};
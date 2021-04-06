import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {
  let [viewport, setViewport] = useState({
    latitude: 23.810331,
    longitude: 90.412521,
    zoom: 10,
    width: "100% !important",
    height: 600,
    position: "absolute",
  });
  return (
    <>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/arifulislam2545/ckmhovztu0hq417s61wbt2v03"
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYXJpZnVsaXNsYW0yNTQ1IiwiYSI6ImNrbjIxOXk0bjBzNGkydmxyaXFiejA0bGcifQ.ICM2prgkGNKsB_Kc6_bXdg"
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
    </>
  );
};

export default Map;

import React from "react";
// import React, { useEffect } from "react";
// import { getMap } from "../api/getMap";
const Map = ({ coords }) => {
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   // Init map
  //   const displayMap = async () => {
  //     const mapDetails = await getMap();
  //     console.log("herE", mapDetails);
  //     const map = L.map("map").setView([51.505, -0.09], 13);

  //     L.tileLayer(
  //       "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  //       {
  //         attribution:
  //           'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //         maxZoom: 18,
  //         id: "mapbox/streets-v11",
  //         tileSize: 512,
  //         zoomOffset: -1,
  //         accessToken: "your.mapbox.access.token",
  //       }
  //     ).addTo(map);
  //   };
  //   displayMap();
  //   return () => {
  //     abortController.abort();
  //   };
  // }, [coords]);
  console.log(coords);
  return (
    <div className="bg-light mt-3 p-3">
      <h1>Map</h1>
      <div id="map" style={{ height: "180px" }}></div>
    </div>
  );
};

export default Map;

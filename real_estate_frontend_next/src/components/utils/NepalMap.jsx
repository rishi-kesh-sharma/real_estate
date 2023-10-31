import React, { useState, useEffect } from "react";
import { geoPath } from "d3-geo";
import * as d3 from "d3";
import { feature } from "topojson-client";
import districtsData from "../../data/districts.json";
import { useRouter } from "next/router";
const width = 900;
const height = 400;
var projection = d3
  .geoAlbers()
  .center([25, 25])
  .rotate([-75, 0])
  .parallels([27, 90]);
var path = d3.geoPath().projection(projection);
const WorldMap = () => {
  const router = useRouter();

  const [geographies, setGeographies] = useState([]);
  const [currentDistrict, setCurrentDistrict] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  useEffect(() => {
    fetch("/assets/nepal-districts.topo.json").then((response) => {
      if (response.status !== 200) {
        console.log(`There was a problem: ${response.status}`);
        return;
      }
      response.json().then((values) => {
        setGeographies(feature(values, values.objects.districts));
      });
    });
    projection.scale(1).translate([0, 0]);
    var b = path.bounds(geographies),
      s =
        0.95 /
        Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
      t = [
        (width - s * (b[1][0] + b[0][0])) / 2,
        (height - s * (b[1][1] + b[0][1])) / 2,
      ];

    projection.scale(s).translate(t);

    for (var i = 0; i < districtsData.length; i++) {
      //Grab state name
      var dataDistrict = districtsData[i].District.toLowerCase().replace(
        /^\s+|\s+$/g,
        ""
      );

      //Grab data value, and convert from string to float
      var dataPopulation = parseFloat(districtsData[i].Population);
      var dataArea = parseFloat(districtsData[i].GeographicalArea);

      //Find the corresponding state inside the GeoJSON
      for (var j = 0; j < geographies?.features?.length; j++) {
        var jsonDistrict = geographies.features[j]?.properties.name
          .toLowerCase()
          .replace(/^\s+|\s+$/g, "");

        if (dataDistrict == jsonDistrict) {
          geographies.features[j].properties.value = dataPopulation;
          geographies.features[j].properties.Area = dataArea;
          break;
        }
      }
    }
  }, [geographies]);

  const handleDistrictClick = (e, i) => {
    e.target.classList.toggle(".active");
    const dist = geographies.features[i].properties.name.toLowerCase();
    setCurrentDistrict(dist);
    router.push(`/properties?district=${dist}`);
  };

  const handleMouseOver = (e, i) => {
    setShowTooltip(true);
  };
  const handleMouseOut = (e, i) => {
    setCurrentDistrict("");
    setShowTooltip(false);
  };
  return (
    <>
      <svg
        width={`${width}`}
        height={`${height}`}
        viewBox={`0 0 ${width} ${height} `}>
        <g className="districts">
          {geographies?.features?.map((d, i) => {
            const initialCoordinates = d.geometry.coordinates[0][0];
            const x = initialCoordinates[0];
            const y = initialCoordinates[1];
            return (
              <g className="relative">
                <path
                  key={`path-${i}`}
                  d={geoPath().projection(projection)(d)}
                  className="district"
                  fill={`#3681e3`}
                  stroke="white"
                  // xlinkTitle={d.properties.name}
                  strokeWidth={0.5}
                  onClick={(e) => handleDistrictClick(e, i)}
                  onMouseOver={(e) => handleMouseOver(e, i)}
                  onMouseOut={(e) => handleMouseOut(e, i)}>
                  <title>{d.properties.name}</title>
                </path>
              </g>
            );
          })}
        </g>
      </svg>
      {showTooltip && (
        <div className="absolute bottom-[50px] left-[200px] z-100 text-white text-2xl tooltip">
          {currentDistrict}
        </div>
      )}
    </>
  );
};
export default WorldMap;

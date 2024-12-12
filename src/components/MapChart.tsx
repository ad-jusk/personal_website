import { useColorModeValue } from "@chakra-ui/react";
import { ReactElement } from "react";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";

const MapChart = (): ReactElement => {
  const strokeColor = useColorModeValue("#fefefe", "#3a2e39");

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1100,
      }}
    >
      <Geographies geography="/features.json" fill="#88ccca" stroke={strokeColor} strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Annotation
        subject={[19.5, 52]}
        dx={-270}
        dy={-200}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-10"
          textAnchor="end"
          fontWeight="bold"
          fontSize="30px"
          alignmentBaseline="middle"
          fill="#F53"
        >
          {"I live here!"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;

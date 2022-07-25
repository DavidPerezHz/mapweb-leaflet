import React from "react";
// import GoogleMapReact from 'google-map-react';
 

export const Mapold = () => {
  const API_KEY = "AIzaSyCm1tl1GiMhdixARiIRRpsCMHpwKVPis5w";

  const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 20.6737919,
      lng: -103.3354131,
    },
    zoom: 5,
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        center={ defaultProps.center }
        defaultZoom={ defaultProps.zoom }
        // options={{ styles: lightMode ? lightTheme : darkTheme }}
        // onGoogleApiLoaded={({ map, maps }) =>
        //   this.handleApiLoaded({ map, maps })
        // }
      >
         <AnyReactComponent
            lat={20.6737919}
            lng={-103.3354131}
            text="My Marker"
          />
      </GoogleMapReact> */}
    </div>
  );
}
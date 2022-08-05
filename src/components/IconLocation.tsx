
import L, { Icon } from "leaflet";
import IconUser from "../assests/icons8-ubicación-del-usuario-48.png";

interface PropsIcon {
  iconUrl: any;
  iconRetinaUrl: any;
  iconSize: [number, number];
  className: string;
}

// or https://leafletjs.com/reference.html#icon
export const IconLocation = new Icon<PropsIcon>({
  iconUrl: require("../assests/icons8-ubicación-del-usuario-48.png"),
  iconRetinaUrl: require("../assests/icons8-ubicación-del-usuario-48.png"),
  iconSize: [40, 40],
  className: "leaflet-venue-icon",
});

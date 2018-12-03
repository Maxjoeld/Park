import {
  Dimensions
} from "react-native";
var width = Dimensions.get("window").width; //full width

const styles = {
  searchBox: {
    top: 90,
    position: "absolute",
    width: width,
  },
  driverbox: {
    width: width,
    height: 100,
  }
};

export default styles;
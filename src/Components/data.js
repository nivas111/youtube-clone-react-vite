export const API_KEY = "AIzaSyC_h6OG035N4gBIJtG-Kvr_DFxQw80TnzM";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};

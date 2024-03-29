import moment from "moment";

// Create a helper function to format date to get day and time
export function getDayAndMonth(date) {
  const formattedDate = moment(date).format("Do MMMM");
  return formattedDate;
}

// blurDataURL help
const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63);

export const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

// Check value is null or undefined
/**
 * self-described
 * @param item
 */
export const isNullUndefined = (item) => {
  try {
    return item === null || item === undefined;
  } catch (err) {
    return true;
  }
};

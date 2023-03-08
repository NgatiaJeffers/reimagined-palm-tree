import moment from "moment";

// Create a helper function to format date to get day and time
export function getDayAndMonth(date) {
    const formattedDate = moment(date).format("Do MMMM")
    return formattedDate
}

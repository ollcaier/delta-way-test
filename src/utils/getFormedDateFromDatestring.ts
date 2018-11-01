export const getFormedDateFromDatestring = (datetime: string): string => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date(datetime);

  if (date.toString() === "Invalid Date") {
    throw new Error("Invalid Date");
  } else {
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }
};

export const formateDate = (date : Date) => {
  const options :  Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("uk-UA", options);
};

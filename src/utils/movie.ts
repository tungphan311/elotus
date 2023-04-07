export const getAverageRatings = (vote: number): string => {
  if (vote >= 8) {
    return "good";
  } else if (vote >= 5) {
    return "average";
  } else {
    return "bad";
  }
};

export const getGender = (gender: number) => {
  if (gender === 1) {
    return "Female";
  } else if (gender === 2) {
    return "Male";
  }
};

export const getDateName = (dateStr: string, locale: string = "en-US") => {
  let date = new Date(dateStr);
  return date.toLocaleDateString(locale, { dateStyle: "full" });
};

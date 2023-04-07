export const getAverageRatings = (vote: number): string => {
  if (vote >= 8) {
    return "good";
  } else if (vote >= 5) {
    return "average";
  } else {
    return "bad";
  }
};

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

export const getLanguageName = (language: string) => {
  const languageNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "language",
  });

  const lang = languageNamesInEnglish.of(language);

  return lang;
};

export let formatTime = (n: number) =>
  `${Math.trunc(n / 60)}h ${`0${n % 60}`.slice(-2)}min`;

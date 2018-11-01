const API_KEY = "c507f18273fa98b1082c4642776329c0";

export const baseFetch = async (url: string) =>
  fetch(`/${url}?app_id=${API_KEY}`)
    .then(async (response) => response.json());

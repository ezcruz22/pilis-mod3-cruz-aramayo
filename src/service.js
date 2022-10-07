const SERVER_DOMAIN = "https://api.open-meteo.com/en";

export const getWeather = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/`);
    return response.json();
  } catch {
    throw new Error("could not fetch weather");
  }
};

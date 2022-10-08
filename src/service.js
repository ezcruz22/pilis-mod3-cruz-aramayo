/*const SERVER_DOMAIN =
  "https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=";
*/
export const getWeather = async (URL) => {
  try {
    const response = await fetch(URL);
    return response.json();
  } catch {
    throw new Error("could not fetch weather");
  }
};

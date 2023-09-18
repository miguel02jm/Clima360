const fetchWeather = async (city, setDataWeather) => {
  const urlBase = "https://api.openweathermap.org/data/2.5/forecast";
  const API_KEY = "f6b08b447c5b3aaadd5d8233aff2fada";
  const intervals = 5;
  try {
    const response = await fetch(
      `${urlBase}?q=${city}&cnt=${intervals}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    setDataWeather(data);
  } catch (error) {
    console.error("Ocurrió el siguiente problema: ", error);
    setDataWeather(null);
  }
};

export default fetchWeather;

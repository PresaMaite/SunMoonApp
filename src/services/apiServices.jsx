const BASE_URL = "https://timezone.abstractapi.com/v1/current_time/?api_key=9acd32d2fce5499d879dbcbe3e336545&location=";

export const apiService = async (location) => {
    let jsonData = {};

    try {
        const response = await fetch(`${BASE_URL}${location}`);
        jsonData = await response.json();
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }

return (
    jsonData
)};
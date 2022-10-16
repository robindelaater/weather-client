class WeatherClient {
	private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
	private apiKey: string;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.baseUrl = `${this.baseUrl}?appid=${this.apiKey}&`;
	}

	async getCurrentWeatherByCity(city: string) {
		try {
			const res = await fetch(`${this.baseUrl}q=${city}`);

			return await res.json();
		} catch (error) {
			throw new Error(error);
		}
	}
}

export default WeatherClient;

class WeatherClient {
	private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
	private apiKey: string;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
		this.baseUrl = `${this.baseUrl}?appid=${this.apiKey}`;
	}

	async getCurrentWeatherByCity(city: string) {
		try {
			const { lat, lon } = await this.getLatLon(city);
			const res = await fetch(`${this.baseUrl}&lat=${lat}&lon=${lon}`);

			return await res.json();
		} catch (error) {
			throw new Error(error);
		}
	}

	async getLatLon(input: string) {
		const res = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=${this.apiKey}`
		);

		const data = await res.json();

		if (data.length > 0) {
			return { lat: data[0].lat, lon: data[0].lon };
		}

		throw new Error('Location not found');
	}
}

export default WeatherClient;

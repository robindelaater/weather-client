import weatherClient from './weather-client';

const createClient = (apiKey: string): weatherClient => {
	return new weatherClient(apiKey);
};

export { createClient };

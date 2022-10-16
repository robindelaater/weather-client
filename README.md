# Weather Client

A NPM weather client module for easy use of [OpenWeatherMap API](https://openweathermap.org/).

## Getting started

1. Create an account and get your API key at [OpenWeatherMaps' website](https://openweathermap.org/).

2. Install the NPM module into your project:

```
npm install @robindelaater/weather-client
```

3. Import and create a new client

```JavaScript
import { createClient } from '@robindelaater/weather-client';

const weather = createClient('{YOUR_OPENWEATHERMAP_API_KEY}')
```

#### Get weather in a city

```JavaScript
weather.getWeatherByCity('Amsterdam');
```

The client is still in development, so more functionality will follow.

import {
  WiThunderstorm,
  WiSleet,
  WiStormShowers,
  WiSnow,
  WiFog,
  WiDaySunny,
  WiDayFog,
  WiSmoke,
} from "react-icons/wi";

interface WeatherProps {
  weather: any;
  size: number;
  temp: number;
}

export default function WeatherIcons({ weather, size, temp }: WeatherProps) {
  const colors = {
    white: "#fff",
    gray: "#333",
  };

  return (
    <>
      {weather === "Thunderstorm" ? (
        <WiThunderstorm
          size={size}
          className="weather-icon"
          color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
        />
      ) : weather === "Drizzle" ? (
        <WiSleet
          size={size}
          className="weather-icon"
          color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
        />
      ) : weather === "Rain" ? (
        <WiStormShowers
          size={size}
          className="weather-icon"
          color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
        />
      ) : weather === "Snow" ? (
        <WiSnow
          size={size}
          className="weather-icon"
          color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
        />
      ) : weather === "Atmosphere" ? (
        <WiFog
          size={size}
          className="weather-icon"
          color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
        />
      ) : weather === "Clear" ? (
        <WiDaySunny
          size={size}
          className="weather-icon"
          color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
        />
      ) : weather === "Clouds" ? (
        <WiDayFog
          size={size}
          className="weather-icon"
          color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
        />
      ) : weather === "Fog" ? (
        <WiFog
          size={size}
          className="weather-icon"
          color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
        />
      ) : (
        weather === "Smoke" && (
          <WiSmoke
            size={size}
            className="weather-icon"
            color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
          />
        )
      )}
    </>
  );
}

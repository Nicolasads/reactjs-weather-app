import {
  WiNightFog,
  WiNightThunderstorm,
  WiNightStormShowers,
  WiNightSnow,
  WiNightClear,
  WiFog,
  WiSnow,
  WiThunderstorm,
  WiSleet,
  WiStormShowers,
  WiDaySunny,
  WiDayFog,
} from "react-icons/wi";

interface WeatherProps {
  weather: any;
  size: number;
  temp: number;
  position: number;
}

export default function WeatherNightIcons({
  weather,
  size,
  temp,
  position,
}: WeatherProps) {
  const colors = {
    white: "#fff",
    gray: "#333",
  };

  const isDifferentFour = position !== 4;

  return (
    <>
      {weather === "Thunderstorm" ? (
        <>
          {isDifferentFour ? (
            <WiThunderstorm
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          ) : (
            <WiNightThunderstorm
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          )}
        </>
      ) : weather === "Drizzle" ? (
        <>
          {isDifferentFour ? (
            <WiSleet
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          ) : (
            <WiNightFog
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          )}
        </>
      ) : weather === "Rain" ? (
        <>
          {isDifferentFour ? (
            <WiStormShowers
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          ) : (
            <WiNightStormShowers
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          )}
        </>
      ) : weather === "Snow" ? (
        <>
          {isDifferentFour ? (
            <WiSnow
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          ) : (
            <WiNightSnow
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          )}
        </>
      ) : weather === "Atmosphere" ? (
        <>
          {isDifferentFour ? (
            <WiFog
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          ) : (
            <WiNightFog
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          )}
        </>
      ) : weather === "Clear" ? (
        <>
          {isDifferentFour ? (
            <WiDaySunny
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          ) : (
            <WiNightClear
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          )}
        </>
      ) : weather === "Clouds" ? (
        <>
          {isDifferentFour ? (
            <WiDayFog
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          ) : (
            <WiNightFog
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          )}
        </>
      ) : weather === "Fog" ? (
        <>
          {isDifferentFour ? (
            <WiFog
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          ) : (
            <WiNightFog
              size={size}
              className="weather-icon"
              color={temp > 17 ? `${colors.white}` : `${colors.gray}`}
            />
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

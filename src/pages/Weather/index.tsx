import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";

import {
  ArrowArea,
  AtmosphereDiv,
  AtmosphereInfo,
  AtmosphereValue,
  BackButton,
  CityName,
  CityStatus,
  Container,
  Content,
  DayDivider,
  DayInfo,
  DayTemperature,
  Divider,
  MaxMinArea,
  MaxTemperature,
  MinTemperature,
  Separator,
  TemperatureInfo,
  TemperatureValue,
  WeatherArea,
  WeatherDates,
  WeatherInfo,
  WeatherType,
} from "./styles";

import { FaArrowLeft } from "react-icons/fa";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";
import moment from "moment";
import WeatherIcons from "../../components/WeatherIcons";
import WeatherNightIcons from "../../components/WeatherNightIcons";

export default function Weather() {
  let { city } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState<any>({});
  const [weather, setWeather] = useState();
  const [temperature, setTemperature] = useState<any>();
  const [forecast, setForecast] = useState<any>([]);

  const weatherIconSize = 50;

  var max = 0;
  var position = 0;
  var forecastPosition = 0;

  const handleForecastPosition = (forecastPos: number) => {
    return forecastPos === 1
      ? "dawn"
      : forecastPosition === 2
      ? "morning"
      : forecastPosition === 3
      ? "afternoon"
      : forecastPosition === 4 && "night";
  };

  const dateFormat = (date: any) => {
    return (
      moment(new Date(date * 1000)).format("LT") === "3:00 AM" ||
      moment(new Date(date * 1000)).format("LT") === "9:00 AM" ||
      moment(new Date(date * 1000)).format("LT") === "3:00 PM" ||
      moment(new Date(date * 1000)).format("LT") === "9:00 PM"
    );
  };

  const forecastInfo = (item: any, index: number) => {
    if (dateFormat(item.dt)) {
      max += 1;
      position += 1;
      forecastPosition += 1;

      return (
        max < 5 && (
          <DayDivider key={index}>
            <DayInfo>{handleForecastPosition(forecastPosition)}</DayInfo>
            <WeatherNightIcons
              size={weatherIconSize}
              weather={weather}
              temp={temperature}
              position={position}
            />
            <DayTemperature>{parseInt(item.temp)} ºC</DayTemperature>
          </DayDivider>
        )
      );
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response: any = await api.get(
          `weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&exclude=minutely&units=metric`
        );

        console.log("data", response);

        setDate(response.data);

        setWeather(response.data.weather[0].main);
        setTemperature(response.data.main.temp);

        const forecastResponse: any = await api.get(
          `onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=current&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        );

        setForecast(forecastResponse.data.hourly);
      } catch (err: any) {
        console.log(err.data);
      }
    };

    fetchWeather();
  }, [city]);

  useEffect(() => {
    const reorderArray = () => {
      if (forecast) {
        let reorderArr = forecast;

        forecast.map((item: any) => {
          if (
            moment(new Date(item.dt * 1000))
              .format("LT")
              .indexOf("PM")
          ) {
            return reorderArr.push(item);
          } else {
            return reorderArr.push(item.lenght - 1);
          }
        });
      }
    };

    reorderArray();
  }, [forecast]);

  return (
    <Container temperature={temperature}>
      {date.weather !== undefined && (
        <Content temperature={temperature}>
          <BackButton onClick={() => navigate("/")}>
            <FaArrowLeft size={30} color={temperature > 17 ? "#fff" : "#333"} />
          </BackButton>

          <WeatherInfo>
            <CityName>{city?.toUpperCase()}</CityName>
            <CityStatus>{weather}</CityStatus>

            <TemperatureInfo>
              <TemperatureValue>{parseInt(date?.main?.temp)}</TemperatureValue>

              <WeatherArea>
                <WeatherType>ºC</WeatherType>

                <MaxMinArea>
                  <ArrowArea>
                    <RiArrowUpFill
                      size={20}
                      color={temperature > 17 ? "#fff" : "#333"}
                    />

                    <MaxTemperature>
                      {parseInt(date?.main?.temp_max)}ºC
                    </MaxTemperature>
                  </ArrowArea>

                  <ArrowArea>
                    <RiArrowDownFill
                      size={20}
                      color={temperature > 17 ? "#fff" : "#333"}
                    />

                    <MinTemperature>
                      {parseInt(date?.main?.temp_min)}ºC
                    </MinTemperature>
                  </ArrowArea>
                </MaxMinArea>
              </WeatherArea>
            </TemperatureInfo>

            <WeatherIcons size={160} weather={weather} temp={temperature} />

            <WeatherDates>
              {forecast.map((item: any, index: number) =>
                forecastInfo(item, index)
              )}
            </WeatherDates>

            <AtmosphereDiv>
              <Divider>
                <AtmosphereInfo>wind speed</AtmosphereInfo>
                <AtmosphereValue>{date?.wind?.speed} m/s</AtmosphereValue>
              </Divider>

              <Separator> | </Separator>

              <Divider>
                <AtmosphereInfo>sunrise</AtmosphereInfo>
                <AtmosphereValue>
                  {moment(new Date(date?.sys?.sunrise * 1000)).format("LT")}
                </AtmosphereValue>
              </Divider>

              <Separator> | </Separator>

              <Divider>
                <AtmosphereInfo>sunset</AtmosphereInfo>
                <AtmosphereValue>
                  {moment(new Date(date?.sys?.sunset * 1000)).format("LT")}
                </AtmosphereValue>
              </Divider>

              <Separator> | </Separator>

              <Divider>
                <AtmosphereInfo>humidity</AtmosphereInfo>
                <AtmosphereValue>
                  {parseInt(date?.main?.humidity)}%
                </AtmosphereValue>
              </Divider>
            </AtmosphereDiv>
          </WeatherInfo>
        </Content>
      )}
    </Container>
  );
}

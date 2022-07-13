import styled from "styled-components";

export const Container = styled.div<{ temperature: number }>`
  overflow: hidden;

  h1,
  h2,
  h3,
  h4,
  h5,
  span {
    color: ${(props) => props.temperature > 17 && "#fff"};
  }
`;

export const Content = styled.div<{ temperature: number }>`
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.temperature > 20
      ? "linear-gradient(to bottom, #57CBDB 60%, #4d99a1)"
      : props.temperature > 17
      ? "linear-gradient(to bottom, #616978 60%, #3C4353)"
      : "linear-gradient(to bottom, #F5F5F5 60%, #a2a2a2)"};
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  margin: 25px;
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  animation-duration: 2s;
  animation-name: slideup;

  @keyframes slideup {
    from {
      transform: translateY(400px);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const CityName = styled.h1`
  font-weight: 300;
  font-size: 50px;
`;

export const CityStatus = styled.h4`
  font-weight: 300;
  font-size: 35px;
  text-transform: lowercase;
`;

export const TemperatureInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TemperatureValue = styled.h1`
  font-size: 100px;
  font-weight: 300;
`;

export const WeatherArea = styled.div``;

export const DateInfo = styled.h5``;

export const WeatherType = styled.h5`
  padding-left: 30px;
  font-size: 20px;
`;

export const MaxMinArea = styled.div``;

export const ArrowArea = styled.div``;

export const MaxTemperature = styled.span``;

export const MinTemperature = styled.span``;

export const WeatherDates = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 40px;
`;

export const DayInfo = styled.h5`
  font-weight: 300;
`;

export const DayDivider = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DayTemperature = styled.h5``;

export const AtmosphereDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 550px) {
    gap: 10px;
  }
`;

export const Divider = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AtmosphereInfo = styled.h5`
  font-weight: 300;
`;

export const AtmosphereValue = styled.h5`
  font-weight: 300;
`;

export const Separator = styled.span`
  font-weight: 200;
  font-size: 30px;
`;

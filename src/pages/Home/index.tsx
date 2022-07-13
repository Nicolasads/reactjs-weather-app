import {
  Button,
  CitiesList,
  Container,
  Content,
  HomeSubtitle,
  HomeTitle,
  LogoImage,
} from "./styles";
import earth from "../../assets/earth-white.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const cities = [
    {
      id: 1,
      name: "Dallol",
    },
    {
      id: 2,
      name: "Fairbanks",
    },
    {
      id: 3,
      name: "Londres",
    },
    {
      id: 4,
      name: "Caruaru",
    },
    {
      id: 5,
      name: "Vancouver",
    },
    {
      id: 6,
      name: "Yakutsk",
    },
  ];

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Content>
        <HomeTitle>Weather</HomeTitle>
        <HomeSubtitle>Select a city</HomeSubtitle>
        <LogoImage src={earth} alt="earth-logo" />

        <CitiesList className="container-fluid row justify-content-center col-8 ">
          {cities.map((city) => (
            <Button
              onClick={() => navigate(`/weather/${city.name}`)}
              key={city.id}
            >
              {city.name}
            </Button>
          ))}
        </CitiesList>
      </Content>
    </Container>
  );
}

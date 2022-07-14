import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("Testes da tela home", () => {
  test("Deverá exibir o nome Weather", () => {
    render(<App />);

    const weatherName = screen.getByText("Weather");

    expect(weatherName).toBeInTheDocument();
  });

  test("Deverá exibir o nome Caruaru", () => {
    render(<App />);

    const cityName = screen.getByText("Caruaru");

    expect(cityName).toBeInTheDocument();
  });

  test("Deverá renderizar a próxima tela Weather", () => {
    render(<App />);

    const cityName = screen.getByText("Caruaru");
    userEvent.click(cityName);

    const windowLocation = window.location.pathname !== "/home";

    console.log("location", window.location.href);

    expect(windowLocation).toBeTruthy();
  });
});

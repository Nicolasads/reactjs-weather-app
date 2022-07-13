import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --dark: #0f0f0f;
        --gray: #333;
        --lightGray: #555;
        --white: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }


        @media (max-width: 768px) {
            font-size: 87.5%;
        }

        body {
            -webkit-font-smoothing: antialiased;
        }

        body, input, textarea, button {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }

        h1, h2, h3, h4, h5, h6, strong {
            font-weight: 400;
        }

        button { 
            cursor: pointer;
        }

        [disabled] {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,

body {
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font-family: "Roboto", sans-serif;
}


body {
	height: 100%;
	min-height: 100vh;

	background-image: url('https://wallpaperaccess.com/full/11814.jpg');
	background-position: top;
	background-size: cover;
  background-repeat: no-repeat;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

`;

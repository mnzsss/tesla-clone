import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #fff;
  color: #000;
  -webkit-font-smoothing: antialiased;
}

body, input, button, table {
  font-size: 1rem;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}

button {
  cursor: pointer;
}
`

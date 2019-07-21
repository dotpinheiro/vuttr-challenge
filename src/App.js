import React from "react";
import GlobalStyle from "./styles/global";
import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <MainPage />
    </Provider>
  );
}

export default App;

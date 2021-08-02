import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addProducts } from "./store/modules/products/actions";
import GlobalStyle from "./styles/global";
import { Routes } from "./routes";
import { Header } from "./components/Header";
import { Container } from "./AppStyle";

function App() {
  const dispatch = useDispatch();

  //MOTAGEM
  useEffect(() => {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => {
        dispatch(addProducts(res.data));
      })
      .catch((err) => console.log(err));
  });

  return (
    <Container className="App">
      <GlobalStyle />
      <Header />
      <Routes />
    </Container>
  );
}

export default App;

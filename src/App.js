import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addProducts } from "./store/modules/products/actions";
import GlobalStyle from "./styles/global";
import { Routes } from "./routes";

function App() {
  const dispatch = useDispatch();

  //MOTAGEM
  useEffect(() => {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => {
        console.log(res.data);

        dispatch(addProducts(res.data));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;

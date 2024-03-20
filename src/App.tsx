import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { store } from "./lib/store";
import { router } from "./routs";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

import "./App.scss";
import Immigration from "./pages/Immigration/Immigration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Immigration />
    </>
  );
}

export default App;

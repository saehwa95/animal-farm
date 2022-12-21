import "./App.css";
import Router from "./shared/Router";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.REACT_APP_NODE_ENV === "production") {
  disableReactDevTools();
}

function App() {
  return <Router />
}

export default App;
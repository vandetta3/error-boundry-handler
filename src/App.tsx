import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ErrorBoundary from "./ErrorBoundry";
import User from "./component/User";
import Counter from "./component/Counter";
import RendorError from "./component/RenderError";
import ThrownError from "./component/ThrownError";
import FetchError from "./component/FetchError";
import PropTypeErrorComponent from "./component/TypeError";
import SetTimeOut from "./component/SetTimeOut";
import ArrayMapping from "./component/ArrayMapping";
import UnexpectedBehaviorComponent from "./component/unexpectedError";
import StateInitializationError from "./component/UnassignedValue";
import UIErrorComponent from "./component/UiRenderError";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ThrownError /> */}
      {/* <PropTypeErrorComponent text={{}} /> */}
      <ErrorBoundary>
        <ArrayMapping />
      </ErrorBoundary>
      {/* <RendorError /> */}
      {/* <StateInitializationError /> */}
      {/* <UIErrorComponent /> */}
      {/* <UnexpectedBehaviorComponent /> */}
      <FetchError />
      <Counter />
      <SetTimeOut />
    </>
  );
}

export default App;

import { createContext } from "react";
import Context4 from "./context/Context4";
import Context5 from "./context/Context5";
import Context6 from "./context/Context6";
export const nameContext = createContext();
function App() {
  return (
    <div className="App">
      <nameContext.Provider value={"ayaz"}>
        <Context4 />
        <Context5 />
        <Context6 />
      </nameContext.Provider>
    </div>
  );
}

export default App;

import Effect1 from "./effect/Effect1";
// import Effect2 from "./effect/Effect2";
import Effect3 from "./effect/Effect3";
import State1 from "./state/State1";
import State2 from "./state/State2";
import State3 from "./state/State3";

function App() {
  return (
    <div className="App">
      <State1 />
      <State2 />
      <State3 />
      <Effect1 />
      {/* <Effect2 /> */}
      <Effect3 />
    </div>
  );
}

export default App;

import { Navbar } from "../components/Navbar";
import { Filters } from "components/Filters";
import { TargetData } from "components/ShowData/TargetData";
import { useSelector } from "react-redux";
import { ReduxState } from "types/store";

function App() {
  const filter = useSelector((state: ReduxState) => state.pokemon.filter);

  return (
    <div className="App">
      <Navbar />
      <Filters />
      <TargetData />
    </div>
  );
}

export default App;

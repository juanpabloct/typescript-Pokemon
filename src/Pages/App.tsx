import { Navbar } from "../components/Navbar";
import { Filters } from "components/Filters";
import { TargetData } from "components/ShowData/TargetData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Filters />
      <TargetData />
    </div>
  );
}

export default App;

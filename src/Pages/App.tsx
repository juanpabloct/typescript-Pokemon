import { Navbar } from "../components/Navbar";
import { Filters } from "components/Filters";
import { TargetData } from "components/ShowData/TargetData";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          height: "90vh",
          position: "fixed",
          width: "100%",
          opacity: "0.7",
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/c03d/1a40/0bc9ba9570080932582b8ecd2d9931ab?Expires=1658707200&Signature=NQ6nMH1TAua1IOHI9mK-~OLxi7gxC7DstzvgUBFi8q-Ln8H77Y67qH7~ZktjR~t2-gyt9Ng3yqjEIiIZpDCjeJUg~CVojsYpk4s80HLJMUpmZ14u-bPyrVDDje9XR~zIFaM223CLJfMb9MVSmO6bBAWGaAF4CMmF~t5WfRbENrRPtn95m2VWjEzCwRURkZNe~4lPEVwFjDRRWH3zimEZWymgt4mnLV48bHPIUzrUJJ2mg3wUQhbrwYSPCXmR8jrfq2Hs8yZwdRvo3E4p0oWoW2KJh45jpD2MMoZGYD4VqWtz3BWm61L-OwSCwQhmEz7vQi4aH2hqWIveUV~LTPtggQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)",
        }}
      ></div>
      {!openModal && <Filters />}
      <TargetData openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Grade from "./components/Grade";
import ModalComponent from "./components/ModalComponent";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [show, setShow] = useState(false);
  const grades = [
    { parameter: "Weak", rating: 33.33, color: "#fc646d" },
    { parameter: "Average", rating: 90, color: "#FFD504" },
    { parameter: "Improvement", rating: 50, color: "#FF9D48" },
    { parameter: "Cutoff level", rating: 100, color: "#569EFE" },
  ];

  return (
    <div className="wrapper">
      <button onClick={(e) => setShow(true)} className="button historyBtn">
        History
      </button>
      <ProgressBar color={"#FE8252"} rating={33.33}></ProgressBar>
      <div className="verticalLineParent"><div className="vl"></div></div>
      <ModalComponent
        title="Strength Bar"
        description="Introducing strength bar to help you know your weak subjects"
        onClose={() => setShow(false)}
        show={show}
      >
        {grades.map((grade, index) => {
          return <Grade grade={grade} key={index} />;
        })}
      </ModalComponent>
    </div>
  );
}

export default App;

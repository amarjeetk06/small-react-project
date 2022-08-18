import react, {useState} from "react";
import './App.css';

const App= () => {
  const state = useState();

  const [count, setCount] = useState(0);
  const IncNum = () =>{
    setCount(count+1);
  };
  return(
    <div>
    <h1>{count}</h1>
    <button className="btn" onClick={IncNum}>click me</button>
    </div>
  );
};

export default App;

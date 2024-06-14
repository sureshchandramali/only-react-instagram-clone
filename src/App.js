import Leftside from "./compontents/leftside";
import Middleside from "./compontents/middleside";
import Rightside from "./compontents/rightside";

function App(){
  return (
    <>
      <div className="App">
        <div className="leftside"><Leftside/></div>
        <div className="middleside"><Middleside/></div>
        <div className="rightside"><Rightside/></div>
      </div>
    </>
  );
}

export default App;

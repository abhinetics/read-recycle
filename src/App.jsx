import './App.css';
import Card from './Card';
function App() {
  return (
    <div className="App">
      <h1 className='maintitle' >All Books 40-60% off 🎉 </h1>
    <div className="main">
      <Card  name={"PEA 305" } desc="This is is about ect" />
      <Card name={"PES 319"} />
      <Card name={"PEL 121"} />
      <Card name={"PEL 131"}/>
      <Card name={"PEV 106"} />
    </div>

    </div>
  );
}

export default App;

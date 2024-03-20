import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Works from "./Component/Works/Works";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Services/>
    <Works/>
    </div>
  );
}

export default App;

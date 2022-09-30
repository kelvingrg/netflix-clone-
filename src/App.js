
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import "./Components/NavBar/NavBar.css"
import RowPost from './Components/RowPost/RowPost';
import {action,orginals} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      

    </div>
  );
}

export default App;

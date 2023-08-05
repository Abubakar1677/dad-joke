import logo from './logo.svg';
import './App.css';
import JokesReg from './JokesReg';
import JokeRec from './JokesRec';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <p style={{fontSize:'30px', fontFamily:'sans-serif'}}>Crack(s) Counter & Rater</p> 
     <JokesReg/>
     <JokeRec/>
    </div>
  );
}

export default App;

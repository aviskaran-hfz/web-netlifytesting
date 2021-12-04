import './App.css';
import Navbar from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}><Home /></Route>
          <Route path="/about" component={About}><About /></Route>
          <Route path="/service" component={Service}><Service /></Route>
          <Route path="/contact" component={Contact}><Contact /></Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;

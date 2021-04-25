import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

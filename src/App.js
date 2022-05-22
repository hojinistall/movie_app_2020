import React from 'react';
// import Home from './routes/Home';
import {HashRouter,Route} from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Navitation from './components/Navigation';

function App(){
  return (
    <HashRouter>
      <Navitation/>
      <Route path="/about" component={About}/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/movie-detail" component={Detail}/>
     </HashRouter>
  );
}
export default App;

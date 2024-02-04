import './App.css';
import {About, Cards, Detail, Error, Favorites, Form, Home, Nav} from "./components"
import { Routes, Route } from 'react-router-dom';
import PATHROUTES from './helpers/PathRoutes';

const App = () => {

  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path={PATHROUTES.HOME} element={<Home />} />
        <Route path={PATHROUTES.ABOUT} element={<About/>} />
        <Route path={PATHROUTES.DETAIL} element={<Detail/>} />
        <Route path={PATHROUTES.FAVORITES} element={<Favorites/>}/>
        <Route path={PATHROUTES.ERROR} element={<Error/>}/>
        <Route path={PATHROUTES.CHARACTERS} element={<Cards/>}/>
      </Routes>
    </div>
  );
}

export default App;

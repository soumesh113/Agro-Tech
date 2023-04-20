import ContactHeader from './components/UI/ContactHeader/ContactHeader';
import NavBar from './components/UI/NavBar/NavBar';
import Home from './components/mainPage/Home';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import EquipmentMain from './components/Equipments/EquipmentMain';
import TradingMainPage from './components/Trading/TradingMainPage';
import MainPageFooter from './components/mainPage/MainPageFooter/MainPageFooter';
import Predictions from './components/ML/Predictions';
import AboutUs from './components/aboutUs/AboutUs';
import FertilizerForm from './components/ML/FertilizerForm';
import CropRecommendation from './components/ML/CropRecommendation';
import './App.css';
import { useState } from 'react';
function App() {
  
  const [mode,setMode]=useState(false);
    const getStartedHandler=()=>{
        if(mode===false)
        setMode(true);
        else 
        setMode(false);
    }
    var element=<div></div>
    try{
     element= <div>{window.localStorage.getItem("loggedIn")}</div>;
    }catch(error){

    }

  return (
    <Router>
    <div className="App">
      <ContactHeader></ContactHeader>
      <NavBar mode={mode} getStartedHandler={getStartedHandler}></NavBar>
      <Routes>
      <Route exact path="/" element={<Home mode={mode} getStartedHandler={getStartedHandler}></Home>} />
      <Route path="/equipments" element={<EquipmentMain></EquipmentMain>} />
      <Route path="/trading" element={<TradingMainPage></TradingMainPage>}></Route>
      <Route path="/predictions" element={<Predictions></Predictions>}></Route>
      <Route path="/aboutUs" element = {<AboutUs></AboutUs>}></Route>
      <Route path="/fertilizer" element = {<FertilizerForm></FertilizerForm>}></Route>
      <Route path= "/crop_recommendation" element = {<CropRecommendation></CropRecommendation>}></Route>
      </Routes>
      <MainPageFooter></MainPageFooter>
    </div>
    </Router>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Desire from "./Components/Links/Desire/Desire";
import Home from "./Components/Links/Home/Home";
import MainLayout from "./Components/Links/MainLayout/MainLayout";
import Goods from "./Components/Links/Goods/Goods";
import GoodsLayout from './Components/Links/Goods/GoodsLayout/GoodsLayout'
import CoffeeInfo from "./Components/All/CoffeeInfo/CoffeeInfo";
import dataCoffee from "./Components/Data/data";
import {useState} from "react";

function App() {
 const [data, setData] = useState(dataCoffee)
    const addLike = (e, id) => {
     e.preventDefault()
        const changeData = data.map(elem => {
            if (elem.id === id) {
                console.log(elem.id)
                return {...elem, isDesire: !(elem.isDesire)}
                            }
            return elem
        })
        setData(changeData)
    }

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainLayout/>}>
                  <Route index element={<Home data={dataCoffee}/>}/>
                  <Route path="goods" element={<GoodsLayout/>}>
                      <Route index element={<Goods addLike={addLike} data={data}/>}/>
                      <Route path="1" element={<CoffeeInfo data={dataCoffee[0]}/>}/>
                      <Route path="2" element={<CoffeeInfo data={dataCoffee[1]}/>}/>
                      <Route path="3" element={<CoffeeInfo data={dataCoffee[2]}/>}/>
                      <Route path="4" element={<CoffeeInfo data={dataCoffee[3]}/>}/>
                      <Route path="5" element={<CoffeeInfo data={dataCoffee[4]}/>}/>
                      <Route path="6" element={<CoffeeInfo data={dataCoffee[5]}/>}/>
                  </Route>
                  <Route path="desire" element={<Desire data={data.filter(({isDesire}) => isDesire)}/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;

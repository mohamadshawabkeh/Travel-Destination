import TourDetails from "./components/TourDetails/TourDetails";
import Home from "./components/home/Home";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cityId' element={<TourDetails/>} />

      </Routes>
      
      
    </>
  );
}

export default App;

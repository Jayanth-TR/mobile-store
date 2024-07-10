import React from 'react';
// import SearchBar from './SearchBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { Login } from './Pages/Login';
import NavBar from './NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Category from './Category';





const accessories = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description: "High quality wireless earbuds with noise cancellation.",
    price: 1000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLT0p5EcPyP1MY5EhleCf_a4fDMYiugBa3Q&s',
  },
  {
    id: 2,
    name: "Portable Charger",
    description: "10,000mAh portable charger for on-the-go power.",
    price: 4500,
    img: 'https://d57avc95tvxyg.cloudfront.net/images/detailed/893/15000mah-power-bank-portable-charger-for-domo-ntice-quad-1-onyx-maxbhi-2-4-1.jpg?t=1513055713',
  },
  {
    id: 3,
    name: "Phone Case",
    description: "Durable and stylish phone case for your smartphone.",
    price: 150,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeR6QkXjnnopaFe_dHVQPJ_nNheYh47Eggw&s',
  },
  {
    id: 4,
    name: "Screen Protector",
    description: "Tempered glass screen protector to prevent scratches.",
    price: 100,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3UP_preeZQNowimybKFfaJ_PkpJXQWBR4A&s',
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality.",
    price: 500,
    img: 'https://m.media-amazon.com/images/I/614pmXRPMFL._AC_UF1000,1000_QL80_.jpg',
  },
];




function App() {
  return (
    <Router>
      <NavBar />

      {/* <SearchBar/> */}
      <Routes>
        <Route path="/" element={<Home accessories={accessories} />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}
export default App;




import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Pages/home.css';
import SearchBar from './SearchBar';
import Products from '../Products';
import productData from '../ProductData';



const Home = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
  const accessories = props.accessories || [];

  const products = [
    { id: 1, category: 'Headsets', img: 'https://m.media-amazon.com/images/G/31/img22/WLA/June24/Headset_Mania/Subcat_ingress/D139980456_IN_WLA_MArch_Headset_Mania_Sub-cat-ingress_1._CB553685330_.jpg' },
    { id: 2, category: 'Cases & Covers', img: 'https://m.media-amazon.com/images/G/31/img22/WLA/June24/Headset_Mania/Subcat_ingress/D139980456_IN_WLA_MArch_Headset_Mania_Sub-cat-ingress_3._CB553685330_.jpg' },
    { id: 3, category: 'PowerBanks', img: 'https://m.media-amazon.com/images/G/31/img22/WLA/June24/Headset_Mania/Subcat_ingress/D139980456_IN_WLA_MArch_Headset_Mania_Sub-cat-ingress_2._CB553685330_.jpg' },
    { id: 4, category: 'Cables & Chargers', img: 'https://m.media-amazon.com/images/G/31/img22/WLA/June24/Headset_Mania/Subcat_ingress/D139980456_IN_WLA_MArch_Headset_Mania_Sub-cat-ingress_4._CB553685330_.jpg' },
    { id: 5, category: 'Screen Protector', img: 'https://m.media-amazon.com/images/G/31/img22/WLA/June24/Headset_Mania/Subcat_ingress/D139980456_IN_WLA_MArch_Headset_Mania_Sub-cat-ingress_5._CB553685330_.jpg' },
    { id: 6, category: 'Mobile Holder', img: 'https://m.media-amazon.com/images/G/31/img22/WLA/June24/Headset_Mania/Subcat_ingress/D139980456_IN_WLA_MArch_Headset_Mania_Sub-cat-ingress_6._CB553685330_.jpg' }
  ];

  useEffect(() => {
    // Flatten the productData to get all products
    const products = productData.reduce((acc, category) => {
      const itemsWithCategory = category.items.map(item => ({ ...item, category: category.category }));
      return acc.concat(itemsWithCategory);
    }, []);

    setAllProducts(products);
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const matchedProduct = allProducts.find(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      if (matchedProduct) {
        navigate(`/category/${matchedProduct.category}`, { state: { items: [matchedProduct] } });
      } else {
        alert('No products match your search query.');
      }
    } else {
      alert('Please enter a search term.');
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="container-home">
        <div className='product'>
          {products.map((item, id) => {
            return <Products key={id} product={item} />
          })}
        </div>

        <div className='offer-container'>
          <h1 className='offer'>Special Offer !</h1>
        

        <div className='card-container'>
          {accessories.map((item, id) => (
            <div className="card" key={id}>
              <img src={item.img} alt={item.name} />
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <p className="price">₹{item.price}</p>
              <div className='home-button'>
                <button className='cart-btn1'>Add to Cart</button>
                <button className='order-btn1'>Order Now</button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React,{useState} from 'react';
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {


  const[cart, setCart] = useState([]);
  const[page, setPage] = useState(PAGE_PRODUCTS);

  const [products] = useState([
    {
      name: 'Battery',
      cost: 'Rs 10',
      image: 'https://m.media-amazon.com/images/I/61gLEz0aatL._SL1500_.jpg'
    },
    {
      name: 'Chair',
      cost: 'Rs 1000',
      image: 'https://www.ulcdn.net/images/products/115770/slide/666x363/Venturi_New_Aqua_5.jpg?1598416171'
    },
    {
      name: 'Spex',
      cost: 'Rs 1200',
      image: 'https://m.media-amazon.com/images/I/51uoiBtSI5L._UL1500_.jpg'
    },
    {
      name: 'Table',
      cost: 'Rs 1000',
      image: 'https://www.ikea.com/in/en/images/products/ekedalen-extendable-table-oak__0736974_pe740838_s5.jpg'
    },
    {
      name: 'Laptop',
      cost: 'Rs 40000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKULjjQg45ovLYO1m4Bu7szxJgnO4v1E3ecQ&usqp=CAU'
    },
    {
      name: 'Mobile',
      cost: 'Rs 10000',
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2021/operation/1217/homepage/mo/02-OnePlus-9.jpg'
    },
    {
      name: 'Pant',
      cost: 'Rs 500',
      image: 'https://m.media-amazon.com/images/I/51CMpAc3DQS._UL1280_.jpg'
    },
    {
      name: 'Shirt',
      cost: 'Rs 300',
      image: 'https://contents.mediadecathlon.com/p1484240/ab565f3675dbdd7e3c486175e2c16583/p1484240.jpg'
    },

  ]);

  const addToCart = (product) => {
    setCart([...cart, {...product}]);
  };


  const removeFromCart =(productToRemove) => {
    setCart(cart.filter(product => product!==productToRemove))
  };

  const navigateTo = (nextPage) =>
  {
    setPage(nextPage);
  };


  const renderProducts = () => ( 
    <>
    <h1>Products</h1>
    <div className='products'>
      {products.map((product, idx) => (
      <div className='product' key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt="product.name"/>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
    </div>
    </>
  );

  const renderCart = () => ( 
    <>
    <h1>Cart</h1>
    <div className='products'>
      {cart.map((product, idx) => (
      <div className='product' key={idx}>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt="product.name"/>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </div>
    ))}
   
    </div>
    </>
  );

  return(
    <div className='App'>
      <header>
        <button onClick={ () => navigateTo(PAGE_CART)}>Go to Cart({cart.length})</button>
        <button onClick={ () => navigateTo(PAGE_PRODUCTS)}>View Products</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  )
}

export default App;
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CartProvider from './components/Context/CartContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (   
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    </CartProvider> 
  );
}

export default App;

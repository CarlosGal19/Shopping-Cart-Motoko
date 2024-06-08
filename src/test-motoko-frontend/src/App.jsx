import Header from './components/Header'
import Cart from './components/Cart'
import Games from './components/Games'
import Footer from './components/Footer'
import { AddProvider } from './context/AddProvider'

function App() {

  return (
    <>
      <Header/>
      <div className='flex'>
        <AddProvider>
          <Games/>
          <Cart/>
        </AddProvider>
      </div>
      <Footer/>
    </>
  );
}

export default App;

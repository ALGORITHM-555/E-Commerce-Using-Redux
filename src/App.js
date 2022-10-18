import './App.css';
import {lazy,Suspense} from 'react';
// import Home from './component/Home';
import {Routes,Route,useLocation } from 'react-router-dom';
import {useEffect} from 'react';
// import SingleProductDetail from './component/Shop/SingleProductDetail';
import Header from './component/Header/Header';
import Footer from './component/Footer/HeroFooter/Footer';
// import Shop from './component/Shop/Shop'; 
import PreLoader from './component/PreLoader';
const Home = lazy(()=>import('./component/Home'));
const Shop = lazy(()=>import('./component/Shop/Shop'));
const SingleProductDetail = lazy(()=>import('./component/Shop/SingleProductDetail'))
 
function App() {
  const location = useLocation();
  function fadeout() {
    var preloader = document.querySelector('.preloader') !== null;
    if(preloader){
      document.querySelector('.preloader').style.opacity = '0';
      document.querySelector('.preloader').style.display = 'none';  
    }    
  }
  useEffect(() => {
    setTimeout(fadeout,500);   
  }, [location]);
  
  return (
    <div className="App">    
        <Suspense fallback={<PreLoader></PreLoader>}>        
        <Header></Header>
          <Routes>
              <Route path="/" element={<Home/>}></Route>              
              <Route path="/shop" element={<Shop/>}>                
                  <Route path="single-product-detail" element={<SingleProductDetail/>} />                
              </Route>
          </Routes>    
        <Footer></Footer>
        </Suspense>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/components/HomePage/HomePage';
import CategoryPage from './components/components/CardPage/CategoryPage';
import ProductPage from './components/components/ProductPage/ProductPage';
import Header from './components/components/Header/Header';
import Footer from './components/components/Footer/Footer';
import ContactsPage from './components/components/ContactsPage/ContactsPage';
import MsissionPage from './components/components/MissionPage/MsissionPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='category_page' element={<CategoryPage />} />
        <Route path='product_page' element={<ProductPage />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='missions' element={<MsissionPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

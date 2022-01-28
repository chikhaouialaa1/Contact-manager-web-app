import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Dashboard from './pages/AdminPage/Dashboard/Dashboard';
import DashboardEcom from'./pages/AdminPage/Produit/Ecom';

import AdminSideBar from './pages/AdminPage/Produit/Produit';
import AddProduit from './pages/AdminPage/Produit/AddProduit/AddProduit';
import ProduitDetail from './pages/AdminPage/Produit/ProduitDetail/ProduitDetail';

import Categorie from './pages/AdminPage/Categorie/Categorie'
import AddCategorie from './pages/AdminPage/Categorie/AddCategorie/AddCategorie';
import CategorieDetail from './pages/AdminPage/Categorie/CategorieDetail/CategorieDetail';

import User from './pages/AdminPage/User/User'
import AddUser from './pages/AdminPage/User/AddUser/AddUser';
import UserDetail from './pages/AdminPage/User/UserDetail/UserDetail';

import Home from './pages/Visitor/Home/Home'
import Inscription from './pages/Authentication/Inscription/Inscription';
import Login from './pages/Authentication/Login/Login';
import Citoyen from './components/Citoyen/Citoyen'
import AdminLogin from './pages/Authentication/adminlogin/AdminLogin'


import { Provider } from 'react-redux';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inscription/>}/>
        <Route path="/produit" element={<AdminSideBar/>}/>
        <Route path="/addProduit" element={<AddProduit/>}/>
        <Route path="/produitDetail/:id" element={<ProduitDetail/>}/>

        <Route path="/user" element={<User/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/userDetail/:id" element={<UserDetail/>}/>
        
        <Route path="/categorie" element={<Categorie/>}/>
        <Route path="/addCategorie" element={<AddCategorie/>}/>
        <Route path="/categorieDetail/:id" element={<CategorieDetail/>}/>
        
        <Route path="/home" element={<Home/>}/>
        <Route path="/citoyen" element={<Citoyen/>}/>

        <Route path="/inscription" element={<Inscription/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/ecom" element={<DashboardEcom/>}/>

       </Routes>
    </Router>
      
    
  );
}

export default App;

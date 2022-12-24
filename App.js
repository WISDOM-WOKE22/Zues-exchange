import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
// Components
// import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MobileFooter from './components/MobileFooter';
import { useAuthContext } from './Hooks/useAuthContext';
import BackButton from './components/BackButton/BackButton';
// Pages
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Home from './pages/Home/Home';
import LandingPage from './pages/LandingPage/LandingPage';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import Wallet from './pages/Wallet/Wallet';
import Buy from './pages/Buy';
import Deposite from './pages/Deposite'
import Earn from './pages/Earn/Earn'
import TransactionPage from './pages/TransactionPage/TransactionPage';
import Settings from './pages/Settings/Settings';
import Account from './pages/Account/Account';
import Market from './pages/MarketPlace/Market';
import EditAccount from './pages/Account/EditAccount/EditAccount';
import WithdrawPage from './pages/WithdrawalPage/WithdrawPage';
import BuyCrypto from './pages/BuyCrypto/BuyCrypto';
import { useThemeContext } from './Hooks/useThemeContext';

function App() {
  const { user } = useAuthContext()
  const { background } = useThemeContext()
  console.log(background)
  return (
    <div className="App" style={{ backgroundColor: background }}>
      <BrowserRouter>
     {user && <Sidebar/>}
     {/* {user && <BackButton/>} */}
      {/* {!user && <Navbar/>} */}
        <Routes>
          <Route path='/landing_page' element={!user? <LandingPage/>:<Dashboard/>}/>
          <Route path='/Buy_&_sell' element={user && <Buy/>}/>
          <Route path='/login' element={user? <Dashboard/>:<Login/>}/>
          <Route path='/sign_up' element={user? <Dashboard/>:<SignUp/>}/>
          <Route path='/wallet' element={user? <Wallet/>:<Login/>}/>
          <Route path='/Home' element={user? <Home/>:<LandingPage/>} />
          <Route path='/contact' element={!user? <Contact/>:<Dashboard/>}/>
          <Route path='/' element={user? <Dashboard/>:<LandingPage/>}/>
          <Route path='/crypto_market' element={user ? <Market/>:<Login/>}/>
          <Route path='/deposite' element={user? <Deposite/>:<LandingPage/>}/>
          <Route path='/earn' element={user? <Earn/>:<Login/>}/>
          <Route path='/account' element={user? <Account/>:<Login/>}/>
          <Route path='/account/edit_account' element={user? <EditAccount/>: <Login/>}/>
          <Route path='/transactions' element={user? <TransactionPage/>:<Login/>}/>
          <Route path='/settings' element={user? <Settings/>:<Login/>}/>
          <Route path='*' element={user? <Dashboard/>:<LandingPage/>}/>
        <Route path='/withdraw' element={user? <WithdrawPage/>: <Login/>}/>
        <Route path='/buy_crypto' element={user? <BuyCrypto/>:<Login/>}/>
        </Routes>
        {user && <MobileFooter/>}
      </BrowserRouter>
    </div>
  );
}

export default App;

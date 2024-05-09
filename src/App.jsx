import Auth from './pages/auth/Auth';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './pages/auth/Register';
import NewPassword from './pages/auth/NewPassword';
import ForgotPassword from './pages/auth/ForgotPassword';

import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';

import ResetCode from './pages/auth/ResetCode';
import Collections from './pages/Collections';
import Collection from './pages/Collection';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardProfile from './pages/Dashboard/DashboardProfile';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/collections/:id' element={<Collection />} />

        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardProfile />} />
          <Route path='profile' element={<DashboardProfile />} />
        </Route>

        <Route path='/register' element={<Register />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/password-reset' element={<ForgotPassword />} />
        <Route path='/new-password' element={<NewPassword />} />
        <Route path='/reset-code' element={<ResetCode />} />
      </Routes>

      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Footer />
    </Router>
  );
}

export default App;

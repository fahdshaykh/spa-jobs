import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function MainLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  )
}

export default MainLayout
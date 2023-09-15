import './App.css';
import Index from './Component/Index/Index'
import { ToastContainer } from 'react-toastify'



function App() {


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Index />
    </>
  );
}

export default App;

import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Loader from './components/Loader'
//this for optimizing loading time 
//when the page is called then it will load otherwise it won't
const Dashboard = lazy(() => import ('./pages/Dashboard'))
const Transactions = lazy(() => import ('./pages/Transactions'))
const Customers = lazy(() => import ('./pages/Customers'))
const Products = lazy(() => import ('./pages/Products'))


const App = () => {
  return (
    <Router>
        <Suspense fallback = {<Loader/>}>
         <Routes>
          {/* Default Routes */}
            <Route path = '/admin/dashboard' element={<Dashboard/>}/>
            <Route path = '/admin/product' element={<Products/>}/>
            <Route path = '/admin/customer' element={<Customers/>}/>
            <Route path = '/admin/transaction' element={<Transactions/>}/>

            {/* Charts */}


            {/* Extra Apps */}

          </Routes>
        </Suspense>
    </Router>
  )
}

export default App
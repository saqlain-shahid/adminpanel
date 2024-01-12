import { BsSearch } from 'react-icons/bs'
import AdminSidebar from '../components/AdminSidebar'


const Dashboard = () => {
  return (
    <div className='adminContainer'>
        <AdminSidebar/>
        <main className='dashboard'>
            <div className='bar'>
                <BsSearch/>
                <input type="text" placeholder='Search queries' id="" />
            </div>
        </main>
    </div>
  )
}

export default Dashboard
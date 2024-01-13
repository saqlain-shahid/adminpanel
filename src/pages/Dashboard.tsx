import { BsSearch } from 'react-icons/bs'
import AdminSidebar from '../components/AdminSidebar'
import { FaRegBell } from 'react-icons/fa'
import userImg from '../assets/admin.png'

const Dashboard = () => {
  return (
    <div className='adminContainer'>
        <AdminSidebar/>
        <main className='dashboard'>
            <div className='bar'>
                <BsSearch/>
                <input type="text" placeholder='Search queries' />
                <FaRegBell/>
                <img src={userImg} alt="" />
                
            </div>
        </main>
    </div>
  )
}

export default Dashboard
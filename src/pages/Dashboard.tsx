import { BsSearch } from 'react-icons/bs'
import AdminSidebar from '../components/AdminSidebar'
import { FaRegBell } from 'react-icons/fa'
import userImg from '../assets/admin.png'
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi'

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
            <section className='widget-container'>
                <WidgetItem 
                  percent={40} 
                  amount={true}
                  value={3400000}
                  heading={'Revenue'}
                  color={'rgb(0,115,255)'}
                  />
            </section>
        </main>
    </div>
  )
}

interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean;
}
const WidgetItem = ({heading,value,percent,color,amount}) => <article className='widget'>
    <div className='widgetInfo'>
        <p>{heading}</p>
        <h4>{amount? `$${value}` : value}</h4>
        {
          percent > 0 ? (
            <span className='green'><HiTrendingUp/> + {percent} % {' '}</span>
          ) : (
            <span className='red'><HiTrendingDown/> - {percent} % {' '}</span>
          )
        }
    </div>
</article>;

export default Dashboard
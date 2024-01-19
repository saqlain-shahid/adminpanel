import { ReactElement } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC";


interface DataType{
  photo:string;
  name:string;
  price:number;
  stock:number;
  action:ReactElement;
}

const Products = () => {
  const Table = TableHOC;
  return (
    <div className='admin-container'>
        {/* sidebar */}
        <AdminSidebar/>
        {/* main */}
        <main>saqqqq</main>
    </div>
  )
}

export default Products
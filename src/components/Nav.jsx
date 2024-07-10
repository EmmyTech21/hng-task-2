import { nav } from './data'
import { Link } from 'react-router-dom'
import logo from '../images/1 (1) 1.png'
import { FaSearch } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  return (
    <div className='bg-[#00AFB9] h-32'>

        <nav className=' flex text-white p-8  justify-between'>
          
            <ul className='flex text-5xl gap-6'>
              <div className=' flex mr-5'>
          <img src={logo}  className="" alt="" />
          <p className='text-5xl'>Fashion Factory</p>
          </div>
               {nav.map((link,index)=>{
                return <li key={index}>
                    <Link to={link.path}> {link.name} </Link>
                </li>
               })}
            </ul>
            <div className=' flex gap-6'>
              <FaSearch className=' w-14 h-16' />
              <BsCartCheckFill className=' w-14 h-16' />
              <GiHamburgerMenu className=' w-14 h-16'/>
            </div>
        </nav>
    </div>
  )
}


import { Link } from 'react-router-dom'
import hero from '../images/image 1.png'
import image1 from '../images/Rectangle 4.png'
import image2 from '../images/Rectangle 6.png'
import image3 from '../images/Rectangle 8.png'

import { product1 } from './data'
export default function Hero() {
  return (
    <div className='mx-20'>
         {/* <div className=' absolute bg-[#F07167] top-[700px] right-0'>
            <h3>Unleash Your Style with Fashion Factory Clothing.</h3>

            <p>Fashion factory is your go-to destination for trendy and unique fashion piece</p>
        </div> */}
        <div className=' mb-10'>
        <img src={hero} className='  bg-cover bg-center w-full h-96' alt="" />

        </div>

        <div className=' text-center m-10'>
            <h1 className=' text-6xl m-6'> Browse  Our Collection </h1>
            <p className='text-2xl'>Discover the perfect outfit to fit your style </p>
        </div>
        <div className=' m-20 flex gap-8 justify-center text-center'>
            <div className=''>
            <img src={image1} alt="" />
            <p className='bg-[#D9D9D9]'>Evening Gowns</p>
            </div>
            <div>
                  <img src={image2} alt="" />
                  <p className='bg-[#D9D9D9]'>office wear</p>
            </div>
            <div>
            <img src={image3} alt="" />
            <p className='bg-[#D9D9D9]'>Casual Wears</p>
               
            </div>
        </div>
        <h1 className=' text-4xl text-center m-20'>Our Products</h1>
        <div className='h-[700px] flex flex-wrap gap-8 '>
            
            {product1.map((prods, index)=>{
              return  <div key={index}>
                    <img className='w-96' src={prods.image} alt="" />
                    <h4>{prods.name}</h4>
                    <p>{prods.tags}</p>
                       <span>{prods.price}</span>
                </div>
            })}
        </div>
       <Link>Show More</Link>
    </div>
  )
}

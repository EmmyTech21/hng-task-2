import logo from '../images/image 2.png'
import { product2 } from './data'

export default function Shop() {
  return (
    <div>
      <div className='mb-44'>
        <img className='bg-cover bg-center w-full h-80'src={logo} alt="" />
      </div>
      <div className='h-[700px] flex flex-wrap gap-8 mx-32'>
            {product2.map((prods, index)=>{
              return  <div key={index}>
                    <img className='w-96' src={prods.image} alt="" />
                    <div className='bg-[#EECCFF] ' >
                       <h4 className='text-3xl'>{prods.name}</h4>
                    <p>{prods.tags}</p>
                          <button className=' mr-16 block'> Add to Cart</button>
                       <p>#{prods.price}</p>
                    </div>
                   
                </div>
            })}
        </div>
    </div>
  )
}

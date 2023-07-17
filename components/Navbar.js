import React, { useRef } from 'react'
import Image from 'next/image'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from 'next/link';
const Navbar = ({cart,addToCart,removeFromCart ,clearCart ,subtotal}) => {
  console.log(cart,addToCart,removeFromCart ,clearCart ,subtotal);
  const ref = useRef();
  const toggleCart = () =>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.add('translate-x-full')
      ref.current.classList.remove('translate-x-0')
    }
  }
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-between item-center outline outline-offset-1 outline-4 bg-white outline-slate-50 py-1 ">
      <div className="logo mx-5">
      <Link href={'/'}><Image width={50} height={50} src="/codeswear.png" alt=''/></Link>
      </div>
      <div className='nav'>
        <ul className="flex item-center space-x-2 font-bold md:text-xl">
          <Link href={'/tshirts'}><li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li></Link>
          <Link href={'/stickers'}><li>Stickers</li></Link>
          <Link href={'/mugs'}><li>Mugs</li></Link>
        </ul>
      </div>
      <div className='cart absolute right-0 top-4 mx-5'>
        <button onClick={toggleCart}><AiOutlineShoppingCart className='text-xl md:text-3xl'/></button>
      </div>
       <div ref={ref} className='sideCart h-full absolute top-0 bg-pink-100 p-10 transform transition-transform translate-x-full ml-96 mr-0'>
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle/></span>
        <ol>
          {Object.keys(cart).length==0 && <div className='my-4 text-base fon-normal'>Your Cart is Empty</div>}
        {Object.keys(cart).map((k)=>{
            return (<li key={k}>
          <div className='item flex my-4'>
            <div>{cart[k].name}</div>
            <div className="flex flex-row justify-center align-middle ml-8 gap-2">
            <div className='flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500'><AiOutlinePlusCircle/></div>
            <div className='flex font-semibold items-center justify-center w-1/3'>{cart[k].qty}</div>
            <div className='flex font-semibold items-center justify-center w-1/3 cursor-pointer text-pink-500'><AiOutlineMinusCircle/></div>
            </div>
            </div>
          </li>)})}
        </ol>
        <div className="flex justify-center gap-4">
        <button className="flex mx-4 mt-12 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">CheckOut</button>
        <button className="flex mx-2 mt-12 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Clear Cart</button>
        </div>
       </div>
    </div>
  )
}

export default Navbar
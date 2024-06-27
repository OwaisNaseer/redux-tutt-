import React from 'react'
import { CartIcon } from '../../../assets/Icons'
export default function Header(props) {
  return (
    <div className='flex justify-end'>
         <div className="relative ">
            <CartIcon />
            <span className=" p-5text-vampireBlack rounded-full bg-yellow-500 w-[25px] h-[25px] absolute flex justify-center items-center top-0 right-0">
              {props.cardData.cardItems.length}
            </span>
          </div>
    </div>
  )
}

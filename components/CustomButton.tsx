"use client"

import { CustomButtonProps } from '@/types'
import Imgae from 'next/image'

const CustomButton = ({title,containerStyles,handleClick,btnType}: CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    type={ btnType ||'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}>
        <span className={`flex-1`}>Shop Now</span>
        <div className="flex justify-center items-center">
            <div className="w-2 h-4">
         
            </div>
        </div>
    </button>
  )
}

export default CustomButton
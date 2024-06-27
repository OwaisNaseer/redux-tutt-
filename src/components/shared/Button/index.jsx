import React from 'react'

export default function Button({text, className, variant, onClick, disabled}) {
  return (
    <button
    disabled={disabled}
    className={`${className} font-medium flex justify-center items-center rounded-[7px] base:rounded-[16px] py-3 px-6 text-nowrap text-center  ${variant==="contained"?'bg-yellow500 text-black' : 'bg-transparent '} ${disabled ? "!bg-[#e8eaed] text-black !cursor-not-allowed" : "cursor-pointer"}`}
    onClick={!disabled && onClick}
    >
    {text}
  </button>
  )
}
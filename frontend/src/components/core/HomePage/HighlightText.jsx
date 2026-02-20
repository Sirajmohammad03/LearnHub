import React from 'react'

const HighlightText = ({ text }) => {
  return (
    <span className='font-bold text-3xl lg:text-4xl font-semibold mt-7 text-richblue-200 gradient_color'>
      {" "}
      {text}
    </span>
  )
}

export default HighlightText

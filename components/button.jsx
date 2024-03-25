import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button className="bg-[#F6D707] py-3 px-6 hover:bg-[#040404] hover:text-white rounded-lg my-7">
            {title}
        </button>
    </div>
  )
}

export default Button
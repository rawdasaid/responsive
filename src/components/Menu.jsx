import React from 'react'

function Menu(props) {
  return (
    <div className="flex gap-5 items-center">

        
    <img className='w-[230px] h-[130px]' src={props.image} />
    <div className="">
    <h1 className="font-semibold text-xl">{props.name}</h1>
    <p className='mt-1'>{props.desk}</p>
    <h1 className="font-bold mt-1">{props.price}$</h1>
    <button className="bg-yellow-500 py-2 px-5 rounded mt-3 "> Oder New</button>
    </div>
</div>
  )
}
export default Menu
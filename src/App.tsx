import { useState } from 'react'

import CarMaxLogo from "./assets/CarmaxLogo.svg"
import LocationIcon from "./assets/LocationIcon.svg"
import PersonIcon from "./assets/PersonIcon.svg"
import HeartIcon from "./assets/HeartIcon.svg"
import SearchIcon from "./assets/SearchIcon.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<nav className='w-full flex gap-8 h-12 my-4 px-4 items-center'>
			<img src={CarMaxLogo} alt="Carmax Logo" className='h-8 mt-2'/>
			<div className='flex flex-grow gap-10 text-[#053361]'>
				<a href="" className=''>Shop</a>
				<a href="" className=''>Sell/Trade</a>
				<a href="" className=''>Finance</a>
				<a href="" className=''>Research</a>
			</div>
			<div className='ml-auto mr-4 flex gap-6 items-center'>
				<img src={LocationIcon} alt="Location Icon" className='h-6'/>
				<img src={HeartIcon} alt="Heart Icon" className='h-6 ml-2'/>
				<img src={PersonIcon} alt="Person Icon" className='h-8'/>
			</div>
		</nav>
		<div className='grid grid-cols-2 mx-auto my-4'>	
			<input type="text" className='
				h-12 border border-gray-300 rounded-lg px-4 mx-8 bg-[#f5f6f7]
				col-start-1 col-end-3 row-start-1 row-end-2
			'/>
			<img src={SearchIcon} alt="Search Icon" className='
				h-6 col-start-2 col-end-3 row-start-1 row-end-2 my-auto 
				ml-auto mr-12 pointer-events-none
			'/>
		</div>
		<div className="">
			<h1 className="text-xl font-bold ml-8 mt-6">Used Cars</h1>
		</div>
    </>
  )
}

export default App

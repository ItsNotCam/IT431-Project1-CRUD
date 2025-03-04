import React from 'react';
import CarMaxLogo from "../assets/CarmaxLogo.svg"
import LocationIcon from "../assets/LocationIcon.svg"
import PersonIcon from "../assets/PersonIcon.svg"
import HeartIcon from "../assets/HeartIcon.svg"

const Nav: React.FC = () => (
	<nav className='w-full flex gap-8 h-12 my-4 px-4 items-center'>
		<img src={CarMaxLogo} alt="Carmax Logo" className='h-8 mt-2'/>
		<ul className='flex flex-grow gap-10 text-[#053361]'>
			<a href="" className=''>Shop</a>
			<a href="" className=''>Sell/Trade</a>
			<a href="" className=''>Finance</a>
			<a href="" className=''>Research</a>
		</ul>
		<div className='ml-auto mr-4 flex gap-6 items-center'>
			<img src={LocationIcon} alt="Location Icon" className='h-6'/>
			<img src={HeartIcon} alt="Heart Icon" className='h-6 ml-2'/>
			<img src={PersonIcon} alt="Person Icon" className='h-8'/>
		</div>
	</nav>
)

export default Nav;
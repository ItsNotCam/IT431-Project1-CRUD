"use client";
import React from 'react';

import ThreeDotsIcon from "../assets/ThreeDotsIcon.svg"
import PenIcon from "../assets/PenIcon.svg"
import TrashIcon from "../assets/TrashIcon.svg"

export interface CarCardProps {
	car: Car;
	index: number;
	removeCar: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, index, removeCar }) => {
	const [dropDownOpen, setDropDownOpen] = React.useState(false);

	const toggleDropDown = () => {
		setDropDownOpen(!dropDownOpen);
	}

	const deleteCar = () => {
		removeCar(car);
		setDropDownOpen(false);
	}

	const editCar = () => {
		console.log("Edit Car");
	}

	return (
		<div key={index} className='
		max-h-[450px] flex flex-col gap-2 flex-grow xl:max-w-[30%] md:max-w-1/2 sm:max-w-full xs:max-w-full
		border border-gray-300 rounded-lg shadow-sm group relative
	'>

			{/* Car Image */}
			<img src={car.imagePath} alt={`${car.make} ${car.model}`}
				className='object-cover w-full h-[calc(450px/2)] rounded-t-lg' />

			{/* Overlay */}
			<div className="
			opacity-0 group-hover:opacity-100 transition-opacity absolute h-[calc(450px/2)] w-full 
			top-0 left-0 text-white p-2 text-xs z-10
			bg-[linear-gradient(to_right,rgba(12,12,12,0.3)_0%,transparent_15%,transparent_85%,rgba(12,12,12,0.2)_100%)]
		"/>

			{/* Car Info */}
			<div className="flex flex-col pl-4 relative">

				{/* Three Dots Button */}
				<div className="absolute right-4 -top-[26px]">
					<button className='relative group  p-2 bg-white rounded-full border-2 
				border-gray-300 hover:border-blue-400 z-10 
				transition-colors cursor-pointer' onClick={toggleDropDown}>
						<img src={ThreeDotsIcon} />
					</button>
				</div>

				<div>
					{/* Dropdown */}
					{dropDownOpen && (
						<div className="
							absolute right-6 top-6 py-2 bg-white rounded-lg shadow-md
							border border-gray-300 z-10 flex items-start flex-col gap-1 w-[200px]
							*:px-4 *:gap-2 
						">
							<button className='w-full py-2 hover:bg-gray-100 flex items-center justify-start cursor-pointer'
								onClick={(e) => { () => editCar() }}>
								<img src={PenIcon} alt="Edit" className="w-6 h-6 inline-block mr-2" />
								Edit
							</button>
							<button className='w-full py-2 hover:bg-gray-100 flex items-center justify-start cursor-pointer'
								onClick={() => deleteCar()}>
								<img src={TrashIcon} alt="Edit" className="w-6 h-6 inline-block mr-2" />
								Delete
							</button>
						</div>)
					}
				</div>

				{/* Car Title */}
				<div>
					<h2 className="">{car.year} {car.make}</h2>
					<h2 className="">{car.model}</h2>
				</div>

				{/* Price and Mileage */}
				<div className='flex flex-row items-end h-full'>
					<span className='font-bold text-2xl'>${car.price.toLocaleString()}*</span>
					<div className="h-6 w-[1px] bg-gray-300 mx-2"></div>
					<span className="text">{car.mileage / 1000 + "k"} mi</span>
				</div>
			</div>

			{/* Test Drive */}
			<div className='text-sm text-gray-500 py-2 border-t mx-4 border-gray-300 h-full flex flex-col justify-end'>
				<p>Test drive today</p>
				<p>{car.location}</p>
			</div>
		</div>
	);
}

export default CarCard;

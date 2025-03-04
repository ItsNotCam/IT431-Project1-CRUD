"use client"

import React from 'react';
import SearchIcon from "../assets/SearchIcon.svg"
import { CarActionProps } from '../App';

interface CarDisplayProps {
	cars: Car[];
	removeCar: (car: Car) => CarActionProps;
	addCar: (car: Car) => CarActionProps;
	getCars: () => Car[];
}

const CarComponent: React.FC<{ car: Car, index: number, removeCar: any }> = ({ car, index, removeCar }) => {
	const mileageToString = (price: number): string => price / 1000 + "k";
	return (
		<div key={index} className='
			max-h-[450px] flex flex-col gap-2 flex-grow xl:max-w-[30%] md:max-w-1/2 sm:max-w-full xs:max-w-full
			border border-gray-300 rounded-lg shadow-sm overflow-hidden group relative
		' onClick={() => removeCar(car)}>
			<img src={car.imagePath} alt={`${car.make} ${car.model}`}
				className='object-cover w-full h-[calc(450px/2)]'
			/>
			<div className="
					opacity-0 group-hover:opacity-100 transition-opacity absolute h-[calc(450px/2)] w-full 
					top-0 left-0 text-white p-2 text-xs z-10
					bg-[linear-gradient(to_right,rgba(12,12,12,0.3)_0%,transparent_15%,transparent_85%,rgba(12,12,12,0.2)_100%)]
				" />
			<div className="flex flex-col pl-4">
				<div>
					<h2 className="">{car.year} {car.make}</h2>
					<h2 className="">{car.model}</h2>
				</div>
				<div className='flex flex-row items-end h-full'>
					<span className='font-bold text-2xl'>${car.price.toLocaleString()}*</span>
					<div className="h-6 w-[1px] bg-gray-300 mx-2"></div>
					<span className="text">{mileageToString(car.mileage)} mi</span>
				</div>
			</div>
			<div className='text-sm text-gray-500 py-2 border-t mx-4 border-gray-300 h-full flex flex-col justify-end'>
				<p>Test drive today</p>
				<p>{car.location}</p>
			</div>
		</div>
	);
}

const CarDisplay: React.FC<CarDisplayProps> = (props) => {
	const [searchTerm, setSearchTerm] = React.useState('')
	const [cars, setCars] = React.useState(props.cars)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearchTerm(e.target.value) }

	const shouldDisplayCar = (car: Car): boolean => {
		return (
			searchTerm === "" ||
			car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
			car.model.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	const removeCar = (car: Car) => {
		const { cars, success } = props.removeCar(car);
		if(success) {
			console.log("car removed");
			setCars(cars);
		} else {
			console.log("car wasnt removed");
		}
	}

	return (
		<div>
			<div className='grid grid-cols-2 mx-auto my-4'>
				<input type="text" className='
					h-12 border border-gray-300 rounded-lg px-4 mx-8 bg-[#f5f6f7]
					col-start-1 col-end-3 row-start-1 row-end-2
				' value={searchTerm} onChange={handleSearch} />
				<img src={SearchIcon} alt="Search Icon" className='
					h-6 col-start-2 col-end-3 row-start-1 row-end-2 my-auto 
					ml-auto mr-12 pointer-events-none
				'/>
			</div>
			<div className="m-6">
				<h1 className="text-xl font-bold ">Used Cars</h1>
				<div className="flex flex-wrap gap-2 items-center my-4">
					{cars.filter(shouldDisplayCar).map((car, index) => <CarComponent car={car} index={index} removeCar={removeCar} />)}
				</div>
			</div>
		</div>
	);
};

export default CarDisplay;
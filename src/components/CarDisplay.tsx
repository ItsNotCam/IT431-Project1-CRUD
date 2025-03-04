"use client"

import React from 'react';
import SearchIcon from "../assets/SearchIcon.svg"
import { CarActionProps } from '../App';
import { CarCard } from './CarCard';

interface CarDisplayProps {
	cars: Car[];
	removeCar: (car: Car) => CarActionProps;
	addCar: (car: Car) => CarActionProps;
	getCars: () => Car[];
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
					{cars.filter(shouldDisplayCar).map((car, index) => <CarCard car={car} index={index} removeCar={removeCar} />)}
				</div>
			</div>
		</div>
	);
};

export default CarDisplay;
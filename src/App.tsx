"use server"

import React from "react"
import Nav from "./components/Nav"
import CarDisplay from "./components/CarDisplay";
import { addCarToDB, loadCars } from "./lib/db";

export interface CarActionProps {
	cars: Car[];
	success: boolean;
}

const App: React.FC = () => {
	var cars: Car[] = loadCars();

	const removeCar = (car: Car): CarActionProps => {
		const index = cars.indexOf(car);

		if (index > -1) {
			cars.splice(index, 1);
		}

		return { cars, success: index > -1 };
	}

	const addCar = (car: Car): CarActionProps => {
		cars = addCarToDB(car);
		return { cars, success: true };
	}

  return (
    <>
		<Nav />
		<main>
			<CarDisplay cars={cars} removeCar={removeCar} getCars={loadCars} addCar={addCar}/>
		</main>
    </>
  )
}

export default App

import React from 'react';
import { CarActionProps } from "../global-types";

const AddCar: React.FC<{ addCar: (car: Car) => CarActionProps }> = ({ addCar }) => {
	return (
		<div className="absolute bottom-0 right-0 m-4">
			<button className="
				w-12 h-12 bg-white shadow-sm rounded-full border border-gray-200 
				text-4xl cursor-pointer hover:border-blue-400 transition-colors pb-2
			" onClick={() => addCar}>+</button>
		</div>
	);
};

export default AddCar;
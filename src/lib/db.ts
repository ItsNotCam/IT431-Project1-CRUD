const cars: Car[] = [
	{ 
		year: 2025,
		make: 'Toyota', 
		model: 'GR Corolla', 
		price: 20000, 
		mileage: 15000, 
		imagePath: 'data/images/corolla.avif', 
		location: "Fairfax, VA" 
	},{ 
		year: 2019,
		make: 'Honda', 
		model: 'Civic', 
		price: 18000, 
		mileage: 20000, 
		imagePath: 'data/images/civic.jpg', 
		location: "Manassas, VA" 
	},{ 
		year: 2021,
		make: 'Ford', 
		model: 'Mustang Ecoboost Base', 
		price: 30000, 
		mileage: 10000, 
		imagePath: 'data/images/mustang.webp', 
		location: "Gaithersburg, MD" 
	}
];

export function loadCars(): Car[] {
	return cars;
}

export function addCarToDB(car: Car): Car[] {
	cars.push(car);
	return cars;
}
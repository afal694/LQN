export interface Person {
	name: string;
	id: string;
	birthYear: string;
}

export interface FullCharacter {
	id: string;
	name: string;
	birthYear: string;
	created: string;
	eyeColor: string;
	height: string;
	mass: string;
	films: {
		edges: {
			node: {
				id: string;
				title: string;
				releaseDate: string;
				director: {
					name: string;
				};
				planets: {
					edges: {
						node: {
							name: string;
						};
					};
				};
			};
		};
	};
}

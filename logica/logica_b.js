const list = [
	"audino",
	"bagon",
	"baltoy",
	"banette",
	"bidoof",
	"braviary",
	"bronzor",
	"carracosta",
	"charmeleon",
	"cresselia",
	"croagunk",
	"darmanitan",
	"deino",
	"emboar",
	"emolga",
	"exeggcute",
	"gabite",
	"girafarig",
	"gulpin",
	"haxorus",
	"heatmor",
	"heatran",
	"ivysaur",
	"jellicent",
	"jumpluff",
	"kangaskhan",
	"kricketune",
	"landorus",
	"ledyba",
	"loudred",
	"lumineon",
	"lunatone",
	"machamp",
	"magnezone",
	"mamoswine",
	"nosepass",
	"petilil",
	"pidgeotto",
	"pikachu",
	"pinsir",
	"poliwrath",
	"poochyena",
	"porygon2",
	"porygonz",
	"registeel",
	"relicanth",
	"remoraid",
	"rufflet",
	"sableye",
	"scolipede",
	"scrafty",
	"seaking",
	"sealeo",
	"silcoon",
	"simisear",
	"snivy",
	"snorlax",
	"spoink",
	"starly",
	"tirtouga",
	"trapinch",
	"treecko",
	"tyrogue",
	"vigoroth",
	"vulpix",
	"wailord",
	"wartortle",
	"whismur",
	"wingull",
	"yamask",
];

const listAux = list;

const arrayByInitials = (array) => {
	const obj = {};
	array.forEach((i) => {
		if (obj.hasOwnProperty(i[0])) obj[i[0]].push(i);
		else obj[i[0]] = [i];
	});

	return obj;
};

const NameByLetters = arrayByInitials(listAux);

let bestCount = 0;
let bestSequence = [];

const findNext = (remainLetters, sequence) => {
	let lastName = sequence[sequence.length - 1];
	let lastLetter = lastName[lastName.length - 1];
	const nextCandidates = remainLetters[lastLetter];

	if (!nextCandidates || !nextCandidates.length) {
		let count = sequence.length;
		if (count > bestCount) {
			bestSequence = sequence;
			bestCount = count;
		}
	} else {
		for (nextElement of nextCandidates) {
			const aux = JSON.parse(JSON.stringify(remainLetters));
			let newSeq = [...sequence, nextElement];
			aux[lastLetter] = remainLetters[lastLetter].filter(
				(w) => w !== nextElement
			);
			findNext(aux, newSeq);
		}
	}
};

const message = "Time taken";

console.time(message);

for (element of listAux) {
	let aux = JSON.parse(JSON.stringify(NameByLetters));
	aux[element[0]] = NameByLetters[element[0]].filter((w) => w !== element);
	findNext(aux, [element]);
}

console.info({ listAux, NameByLetters, bestCount, bestSequence });
console.timeEnd(message);



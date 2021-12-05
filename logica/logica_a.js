const l = 100;
let i = 0;
while (i <= 100) {
	let mssg = i;

	if (i % 2 === 0) mssg += " ...buzz... ";
	if (i % 5 === 0) mssg += " ...bazz... ";
	console.info(mssg);
	i++;
}

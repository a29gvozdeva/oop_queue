class RangeValidator {
	constructor (from, to) {
		this.from = from;
		this.to = to;
	}

get fromValidate () {
	if (typeof this.from === 'number') {
		return this.from
	}
	throw ('Error type')
}

set fromValidate (value) {
    this.from = value;
}

get toValidate () {
	if (typeof this.to === 'number') {
		return this.to
	}
	throw ('Error type')
}

set toValidate (value) {
	 this.to = value;
}


get range () {
	return [this.fromValidate, this.toValidate];
}


validateNumber (count) {
	return (count >= this.from) && (count <= this.to) 
	? true
	: false;
	}
}


const range1 = new RangeValidator (10, 20);
console.log(range1.fromValidate);
console.log(range1.toValidate);
console.log(range1.range);
console.log(range1.validateNumber(21));

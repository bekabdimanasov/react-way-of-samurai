let a = {
    name: 'bek',
    age: 23,
    marry: false,
    univer: ['manas', 'hse'],
    mother: {
        name: 'salkynai',
        age:51,
        work: {
            name: 'dianoz',
            where: 'isfana'}
    }
}

// глубокое копирование
let b = {...a};
b.univer = {...a.univer};
b.mother = {...a.mother};
b.mother.work = {...a.mother.work};

console.log(b == a) //false
console.log(b.name == a.name) //true , because it is примитывы(strings, numbers, true/false, null, undefined, NaN)
console.log(b.mother.work == a.mother.work) //false
console.log(b.mother.work.name == a.mother.work.name) //true примитив
a.mother.work.name = 'hospital';
console.log(b.mother.work.name == a.mother.work.name) //false, примитив changed
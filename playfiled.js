const x = [1,2,3,4]

const jojo = [
    {
        name:"Matija",
        age:27,
        sex:"M"
    },
    {
        name:'Katharina',
        age:25,
        sex:"F"
    },
    {
        name:'HIhi',
        age:100,
        sex:"F"
    }
]

let s = x.map(y=>y*4)
s = jojo.reduce((total,person)=>{
    total = total + person.age
    return total
},100) 

s = jojo.filter((x)=>x.sex ==="F")

const isMale = people => people.filter((person) =>person.sex === 'M') 
const isFemale = people => people.filter((person) =>person.sex === 'F') 

const getAverage = people => people.reduce((arr,curr)=>{
    arr = arr + curr.age
    return arr / people.length
},0)

const oldestPerson = people => people.reduce((oldest,current)=>{
    return (oldest || 0) > current.age ? oldest : current
},{})

console.log(oldestPerson(jojo));

const [q,w,e] = [1,2,3].map(x=>x)
console.log(isFemale(jojo));

s = getAverage(isFemale(jojo))

console.log(s);


console.log(3413431 % 50);

console.log(new Array(10));

yes(jojo)

const compose = (f,g) => (...args) => f(g(...args))

function compose2 (f,g) {
    return function (...args) {
        return f(g(...args))
    }
}


const MultiplyBy3 = (num) => num*3
const MakeABS = (num) => Math.abs(num)

const wat = (f,g) => function (...args) {
    console.log("wwaatt",f);
    return 1
};

const res = processRow(
    MultiplyBy3,
    MakeABS,
    MultiplyBy3,
    MultiplyBy3
    )(3)

    console.log(res);
    
    function processRow(...fns) {
        return fns.reduce(compose2)
    } 
        
    
const MultiplyBy3AndAbsolute = compose(MakeABS,MultiplyBy3)
console.log(MultiplyBy3AndAbsolute(-4));


const Woopa = ({sadsa}) => {
    console.log(sadsa);
}

Woopa({sadsa:"asd",ds:2})
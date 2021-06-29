
rotationInRadians = 10 * (Math.PI / 180)
let cos = Math.cos();

console.log(cos);
let lat = 51.507400

const lng =  0.127800

const doubleDistance = distance => distance*2;

function x({lat,lng}) {
    const newLat = 2000 / 111111 + lat
    console.log(Math.cos(rotationInRadians));
    const newLng =  2000/(111111*( Math.cos(rotationInRadians))) + lng
    console.log(newLat,newLng);
}
seedX = Array()
for (i=-5;i<5;i++) {
    const newLat = 2000 / 111111 + lat
}

const recur = ({lat})=> {
    count = 0
    const lava = Array()
    function productPositiveLatIterations(num) {
        console.log(num,count);;
        if (count > num ) {
            return lava
        }
        lat = 2000 / 111111 + lat
        console.log(lat);
        lava.push(lat)
        count ++
        return productPositiveLatIterations(num)
    }
    return productPositiveLatIterations

}

const recur = ({lat})=> {
    count = 0
    const lava = Array()
    function productNegativeLat(num) {
        console.log(num,count);;
        if (count > num ) {
            return lava
        }
        lat = 2000 / 111111 - lat
        console.log(lat);
        lava.push(lat)
        count ++
        return productNegativeLat(num)
    }
    return productNegativeLat

}

productLatIterations = recur({lat})
console.log(productLatIterations(5));
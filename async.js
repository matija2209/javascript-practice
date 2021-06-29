const axios = require('axios')

async function x () {
    try {
        const res = await axios.get('https://1f73c1bd-7b83-4dc5-9ece-39dd684c5e61.mock.pstmn.io/')
        const man = async () => {
            axios.get('https://1f73c1bd-7b83-4dc5-9ece-39dd684c5e61.mock.pstmn.io/')
            console.log("asas");
            return 
        }
        return res.data

    } catch (err) {
        throw Error("aayss")
    }
    
}

async function y (data) {
    const res = await axios.get('https://1f73c1bd-7b83-4dc5-9ece-39dd684c5e61.mock.pstmn.io/')
    console.log("heey",data);
    await setTimeout(()=>console.log("ass"),3330)
}
async function main() {
    try {
        const data = await x()
        await y(data)
        console.log("whola");
    } catch (err) {
        console.log("ITS FINE");
    }
    console.log("I?M GOING MATES");
}
main()
console.log(2);
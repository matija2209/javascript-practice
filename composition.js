const learnAttack = (character) => {
  return Object.assign(character, { attack: () => console.log('attacked') })
}
 
const learnSleep = (character) => {
  return Object.assign(character, { sleep: () => console.log('fall asleep') })
}
 
function Elf(name, type, weapon){
  let elf = {
    name,
    type,
    weapon
  }
return elf
}
 
const leroyTheElf = Elf('leroyTheElf', 'elf', 'bow')
 
learnAttack(leroyTheElf)
learnSleep(leroyTheElf)
 
// leroyTheElf.attack()
// leroyTheElf.sleep()
// console.log(leroyTheElf) 

console.log(Array.prototype.concat([],[12312]))
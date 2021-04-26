const getAleatoryNumbers = (init,end) => {
  const arr = []
  const newArr = []
  for(let i = init;i <= end; i++){
    arr.push(i)
  }
  for(let j = arr.length;j > 0; j--){
    let pivote = Math.floor(Math.random() * j)
    let aux = arr[j-1]
    arr[j-1] = arr[pivote]
    arr[pivote] = aux
  }
  for(let k = 0; k < arr.length;k = k + 3){
    newArr.push(arr[k])
  }
  return newArr
}

const getCard = () => {
  const groupB = getAleatoryNumbers(1,15)
  const groupI = getAleatoryNumbers(16,30)
  const groupN = getAleatoryNumbers(31,45)
  const groupG = getAleatoryNumbers(46,60)
  const groupO = getAleatoryNumbers(61,75)

  const card = []
  for(let a = 0; a < 5; a++){
    card.push(groupB[a])
    card.push(groupI[a])
    if(a === 2){
      card.push(null)
    }else{
      card.push(groupN[a])
    }
    card.push(groupG[a])
    card.push(groupO[a])
  }
  return card
}

export default getCard
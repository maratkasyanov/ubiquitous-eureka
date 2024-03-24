
export function resultCheck(res: any[], selected: any[], statusWin: Function, statusField: Function) {
  let result = [0, 0]
  console.log(res[0])
  if (selected[0].length === 8 && selected[1].length === 1) {
    for (let i = 0; i < selected[0].length; i++) {
      let elem = selected[0][i]
      for (let j = 0; j < 8; j++) {
        if (elem === res[0][0][j]) {
          console.log('совпадение')
          result[0]++
        }
      }
    }
    if (selected[1][0] === res[1][0]) {
      result[1] = 1
    }
  }
  console.log(result)
  if (result[1] === 1 && result[0] >= 4) {
    statusWin()

  } else {
    statusField()

  }
}
export function randomNumber(min: number, max: number) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function uniqnumbers(arrall: any[]) {
  let res: number[] = []
  let resarr: number[] = []
  for (let i = 0; i < arrall.length; i++) {
    let elem = randomNumber(0, arrall.length)
    if (!res.includes(elem)) res.push(elem * -1 * -1)
  }
  for (let j = 0; j < 8; j++) {
    let indx = res.slice(0, 8)
    resarr.push(arrall[indx[j]])
  }
  return resarr
}
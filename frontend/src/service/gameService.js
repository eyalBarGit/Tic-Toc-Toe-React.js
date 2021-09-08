import HttpService from './HttpService';
const BASE_URL = 'game'
export default {
  checkWin,
}


async function checkWin(shape, positions) {
  const playerPos = { shape: shape, positions: positions }
  const winner = await HttpService.post(`${BASE_URL}/checkwin`, playerPos)
  return winner
}




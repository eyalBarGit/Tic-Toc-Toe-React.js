const Utils = require('../../../server/services/utils.service.js')
var books = require('../../../data/booksdb.json')
const fs = require('fs');


const winPositons = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 3, 6],
  [0, 4, 8]
];

async function checkWin(shape, positions) {
  let winner;
  winPositons.forEach((winPosition) => {
    if (winPosition.every((winPos) => (positions.includes(winPos)))) {
      winner = shape
    }
    return
  })
  return await win(winner)

}

function win(winner) {
  return winner
}




module.exports = {
  checkWin
}
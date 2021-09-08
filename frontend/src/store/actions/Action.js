import gameService from '../../service/gameService'
export function addPosition(shape, squarePosition) {
  return async dispatch => {
    try {
      const data = {
        shape,
        squarePosition
      }
      dispatch(_addPosition(data));
    }
    catch (err) {
      throw err
    }
  }
}

export function checkWin(shape, positions) {
  console.log('positions:',positions)
  return async dispatch => {
    try {
      const playerPositions = {
        [shape]: {
          positions: positions
        }
      }
      if (playerPositions[shape].positions.length > 2) {
        const winner = await gameService.checkWin(shape, positions)
        dispatch(_setWinner(winner))
      }
    }
    catch (err) {
      throw err
    }
  }

}
export function restartGame() {
  return async dispatch => {
    try {
      const data = {
        X: { positions: [] },
        O: { positions: [] }
      }
      dispatch(_restartGame(data))
    }
    catch (err) {
      throw err
    }
  }

}

export function deactivateGame() {
  return async dispatch => {
    try {
      dispatch(_deactivateGame())
    }
    catch (err) {
      throw err
    }
  }

}


export function activateGame() {
  return async dispatch => {
    try {
      dispatch(_activateGame())
    }
    catch (err) {
      throw err
    }
  }

}



function _addPosition(data) {
  return {
    type: 'ADD_POSITION',
    data
  }
}

function _setWinner(data) {
  return {
    type: 'SET_WINNER',
    data: data
  }
}

function _restartGame(data) {
  return {
    type: 'RESTART_GAME',
    data: data
  }
}
function _deactivateGame() {
  console.log('deactive')
  return {
    type: 'DEACTIVATE_GAME',
  }
}
function _activateGame() {
  return {
    type: 'ACTIVATE_GAME',
  }
}
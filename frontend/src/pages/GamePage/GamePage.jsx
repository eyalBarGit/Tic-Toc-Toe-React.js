import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosition, checkWin, activateGame } from "../../store/actions/Action";
import { Board } from "../../cmps/Board/Board";
import { WinModal } from "../../cmps/Board/WinModal/WinModal";
import { AppHeader } from "../../cmps/AppHeader/AppHeader";
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import io from 'socket.io-client'

let socket;
const END_POINT = 'http://localhost:3030'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0),
  },

}));
export function GamePage() {
  const { players, winner } = useSelector((state) => state.gameReducer);
  const [shape, setShape] = useState("X");
  const [showModal, setModal] = useState(false)
  const nodeRef = useRef(null)
  
  const dispatch = useDispatch();
  // const classes = useStyles();

  const onAddPosition = (shape, idx) => {
    dispatch(addPosition(shape, idx));

    setTimeout(() => {
      onSetShape();
    }, 100);

  };

  const onSetShape = () => {
    return shape === "X" ? setShape("O") : setShape("X");
  };

  const emit = () => {
    socket.emit('hello', 'Eyal')
  }

  useEffect(() => {
    socket = io(END_POINT)

  }, [])

  useEffect(() => {
    dispatch(checkWin(shape, players[shape].positions));
  }, [players, dispatch]);


  const onResetShape = useCallback(
    () => { if (!winner) setShape('X') },
    [winner]
  )


  const onActiveGame = useCallback(() => { dispatch(activateGame()) },
    [dispatch],
  )


  useEffect(() => { if (winner) setModal(true) }, [winner])


  useEffect(() => {
    onResetShape()
    onActiveGame()
  }, [onResetShape, onActiveGame])




  return (
    <div className="game-page">
      <AppHeader showModal={showModal} />
      <div className="main-content flex justify-center align-center">
        {!winner &&
          <Board
            winner={winner}
            onAddPosition={onAddPosition}
            onSetShape={onSetShape}
            shape={shape}
          />
        }

        <Zoom in={showModal} ref={nodeRef}>
          <Paper elevation={10} ref={nodeRef}>
            <WinModal forwardRef={nodeRef} winner={winner} setModal={setModal} />
          </Paper>
        </Zoom>
      </div>
    </div>
  );
}

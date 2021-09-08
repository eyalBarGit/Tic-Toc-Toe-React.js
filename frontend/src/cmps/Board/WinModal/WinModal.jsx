import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { restartGame } from '../../../store/actions/Action';

export function WinModal({ winner, setModal }) {
    const dispatch = useDispatch()

    useEffect(() => {
        // component didMount
        return () => {
            // component willUnMount
        }
    }, [])

    const onRestartGame = () => {
        dispatch(restartGame())
        setModal(false)
    }

    return (
        <div className="win-modal" >
            <div className="modal-window flex justify-center">
                <div className="modal flex column space-between">
                    <h1>Game Over!</h1>
                    <p className="winner">Winner is: <span>{winner}</span></p>
                    <div>
                        <button onClick={onRestartGame}>Restart</button>
                    </div>
                </div>
            </div>
        </div>
    )



}
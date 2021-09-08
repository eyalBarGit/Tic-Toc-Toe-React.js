import React, { useEffect, useState, useRef } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';


export function GameTypeModal({ closeModal, isModal }) {

    const nodeRef = useRef(null)

    return (
        <Zoom in={isModal} ref={nodeRef} >
            <div className="game-type-modal flex justify-center align-center">
                <div className="main-container">
                    <h2>Choos game type!</h2>
                    <Paper ref={nodeRef} style={{ boxShadow: 'none' }}>
                        <div className="btns-container flex column">
                            <button onClick={() => closeModal(false)} >1 vs 1</button>
                            <button>1 vs machine</button>
                        </div>
                    </Paper>

                </div>
            </div >
        </Zoom >
    )



}
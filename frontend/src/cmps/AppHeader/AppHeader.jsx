import React from 'react';
import { Timer } from './Timer/Timer';
// import { useSelector } from 'react-redux';

export function AppHeader({ showModal }) {

    return (
        <div className="app-header flex space-between align-center">
            <h2>Score:</h2>
            <p>players names</p>
            <p>time left: <span > {!showModal && <Timer />}</span>  </p>
        </div>
    )
}
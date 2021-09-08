import React, { useEffect, useState, useCallback } from 'react';

export function Timer() {
    const [timer, setTimer] = useState(10)
    const [isTimerStopped, setStopTimer] = useState(false)

    useEffect(() => {
        const timerId = setInterval(() => setTimer(timer - 1), 1000);
        if (timer === 0) clearInterval(timerId);
        return () => clearInterval(timerId);
    }, [timer,isTimerStopped]);




    return (
        <React.Fragment>
            <span className={`${timer <= 4 ? 'red' : ''}`}>
                {timer}
            </span>
        </React.Fragment>
    )



}
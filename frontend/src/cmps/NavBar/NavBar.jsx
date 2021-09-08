import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo_black.png'
export function NavBar() {
    const state = useSelector(state => state.state)


    useEffect(() => {
        // component didMount
        return () => {
            // component willUnMount
        }
    }, [])


    return (
        <div className="nav-bar flex flex-grow-1 space-between align-center">
            <div className="logo">
                <img style={{ width: '100px' }} src={logo} alt="" />
            </div>

            <ul className="nav-bar-btns flex">
                <li><button>Play 1 vs 1</button></li>
                <li><button>1 vs Machine</button></li>
                <li><button>About</button></li>
                <li><button>log in</button></li>
            </ul>

        </div>
    )



}
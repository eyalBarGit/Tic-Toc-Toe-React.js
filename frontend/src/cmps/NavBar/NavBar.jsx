import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/logo_black.png'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Hamburger from 'hamburger-react'

export function NavBar() {
    const state = useSelector(state => state.state)
    const [isSideMenu, setSideMenu] = useState(false)

    const onShowSideMenu = () => {
        setSideMenu(!isSideMenu)
    }
    useEffect(() => {
        // component didMount
        return () => {
            // component willUnMount
        }
    }, [])


    return (
        <div className="nav-bar flex flex-grow-1 space-between align-center">
            <div className="logo">
                <img style={{ width: '120px' }} src={logo} alt="" />
            </div>
            <div className="hamburger-container" style={{ zIndex: '10' }}>
                <Hamburger toggled={isSideMenu} toggle={onShowSideMenu} ></Hamburger>
            </div>
            <div className={`nav-items  ${isSideMenu ? "visible" : ''}`}>
                <ul className="nav-bar-btns flex align-center ">
                    <li><button> <span><PeopleIcon /></span>Play 1 vs 1</button></li>
                    <li><button> <span><SportsEsportsIcon /></span>1 vs Machine </button></li>
                    <li><button> <span><InfoIcon />About</span> </button></li>
                    <li><button> <span> <AccountCircleIcon /></span>Sign in</button></li>
                </ul>
            </div>

        </div>
    )



}
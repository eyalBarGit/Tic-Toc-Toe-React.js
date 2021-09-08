import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import heroImg from '../../assets/hero-img.png'
import styled, { keyframes } from 'styled-components';
import { bounceIn, fadeInLeft, fadeInRight } from 'react-animations';

const bounceAnimation = keyframes`${bounceIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export function PlayModal() {
    const state = useSelector(state => state.state)
    const [isShow, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000);
        // component didMount
        return () => {
            // component willUnMount
        }
    }, [])


    return (
        <div style={{ width: '100%' }} className="play-modal">
            <BouncyDiv className="flex justify-center align-center">
                <img style={{ width: '250px' }} src={heroImg} alt="hero" />
            </BouncyDiv  >
            <div style={{ height: '50px' }}>
                {isShow &&
                    <FadeLeft className="flex justify-center align-center">
                        <h2>1vs1</h2>
                    </FadeLeft>
                }
            </div>
        </div>
    )
}
const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
  width:100%;
  `;
const FadeLeft = styled.div`
animation: 0.5s ${fadeInLeftAnimation};
width:100%;

`
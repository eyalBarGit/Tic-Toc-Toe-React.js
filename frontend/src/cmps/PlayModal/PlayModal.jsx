import React, { useEffect, useState } from 'react';
import heroImg from '../../assets/hero-img.png'
import styled, { keyframes } from 'styled-components';
import { bounceIn, fadeInLeft, fadeInRight } from 'react-animations';

const bounceAnimation = keyframes`${bounceIn}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

export function PlayModal() {
    const [isShow, setShow] = useState(false)
    const [isRightShow, setRightShow] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setShow(true)
            setTimeout(() => {
                setRightShow(true)
            }, 500);
        }, 500);
    }, [])


    return (
        <div style={{ width: '100%' }} className="play-modal">
            <BouncyDiv className="flex justify-center align-center">
                <img style={{ width: '250px' }} src={heroImg} alt="hero" />
            </BouncyDiv>
            <div style={{ height: '50px' }}>
                {isShow &&
                    <FadeLeft className="flex justify-center align-center">
                        <button>1 vs machine</button>
                    </FadeLeft>
                }
                {isRightShow &&
                    <FadeRight className="flex justify-center align-center">
                        <button  >1 vs 1</button>
                    </FadeRight>
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
const FadeRight = styled.div`
animation: 0.5s ${fadeInRightAnimation};
width:100%;

`
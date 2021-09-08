import React, { useState } from "react";
import { useHistory } from "react-router";
import io from 'socket.io-client'
import {NavBar} from "../../cmps/NavBar/NavBar";
import { GameTypeModal } from './components/GameTypeModal/GameTypeModal'
// import socketService from "../../service/socketService";

const END_POINT = 'http://localhost:3030'
const socket = io(END_POINT)

export function HomePage() {
  const [name, setName] = useState('')
  const history = useHistory()
  const [isModal, setModal] = useState(true)

  const onStartGame = (ev) => {
    ev.preventDefault()
    if (!name) return
    console.log('name:', name)
    history.push('/game/1')
  }
  const onSetName = ({ target }) => {
    const name = target.value
    setName(name)
  }
  const emit = () => {
    socket.emit('hello', name)
  }



  return (
    <div className="home-page">
      <NavBar />
      <GameTypeModal closeModal={setModal} isModal={isModal} />

      <div className="players-name-section flex justify-center">
        <form onSubmit={onStartGame} className="flex column">
          <input type="text" placeholder="Your name" onInput={onSetName} />
          <button>Let's Play!</button>
        </form>
        <button onClick={emit}>Play!</button>
      </div>

    </div>
  );
}

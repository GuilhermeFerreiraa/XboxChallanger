import * as C from './style'
import React from 'react';
import Farcry from "../Farcry"
import Forza from "../ForzaHorizon"
import mineBanner from '../../assets/minecraft_img.png'
import fifaBanner from '../../assets/fifa_img.png'

export default function SectionGames() {
  return (
    <C.Container>
      <Farcry />
      <Forza />
      <img src={fifaBanner} alt="fifa-banner" />
      <img src={mineBanner} alt="minecraft-banner" />
    </C.Container>
  )
}
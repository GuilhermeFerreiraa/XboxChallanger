import React from "react"
import * as C from './AppStyle'
import Footer from "./components/Footer"
import Header from "./components/Header"
import SectionGames from "./components/SectionGames"
import SectionInfo from "./components/SectionInfo"
import SectionMain from "./components/SectionMain"

export default function App() {
  return (
    <C.Container>
      <Header />
      <SectionMain />
      <SectionInfo />
      <SectionGames />
      <Footer />
    </C.Container>
  )
}

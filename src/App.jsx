import React from "react"
import * as C from './AppStyle'
import Header from "./components/Header"
import SectionInfo from "./components/SectionInfo"
import SectionMain from "./components/SectionMain"

export default function App() {
  return (
    <C.Container>
      <Header />
      <SectionMain />
      <SectionInfo />
    </C.Container>
  )
}

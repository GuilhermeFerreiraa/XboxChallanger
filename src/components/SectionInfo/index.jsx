import * as C from './style'
import React from 'react';
import ImgControll from '../../assets/controle-xbox.png'

export default function SectionInfo() {
  return (
    <C.Container>
      <C.InfoContent>
        <C.TitleInfo>
          <span>Desempenho</span>
          <span className='text_highlight'>Aperfeiçoado</span>
        </C.TitleInfo>
        <C.BoxInfo>
          O controle sem fio Xbox traz um design elegante,
          conforto refinado e compartilhamento instantâneo para um favorito comum.
        </C.BoxInfo>
      </C.InfoContent>
      <C.Img>
        <img src={ImgControll} alt="icon_controll" />
      </C.Img>
    </C.Container>
  )
}
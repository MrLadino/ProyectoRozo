import React from 'react'
import { Item } from '../../Item/Item'
import { Header } from '../../Layouts/Header/Header'
import { Logo } from '../../Logo/Logo'
import { Navbar } from '../../Navbar/Navbar'
import {Tittle} from '../../Tittle/Tittle'
import {PictureProfile} from '../../PictureProfile/PictureProfile'
import {DescriptionProfile} from '../../DescriptionProfile/DescriptionProfile'




export const Home = () => {
  return (
    <>
    <Header>
    <Tittle/>
    <Logo />
      <Navbar>
          <Item content="Inicio" />
          <Item content="Acerca de mis" />
          <Item content="proyectos" />          
      </Navbar>
    </Header>    
    <main>
      <PictureProfile/>
      <DescriptionProfile/>
    </main>
    </>
  )
}


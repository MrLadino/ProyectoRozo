import React from 'react'
import { Item } from '../../Item/Item'
import { Header } from '../../Layouts/Header/Header'
import { Logo } from '../../Logo/Logo'
import { Navbar } from '../../Navbar/Navbar'


export const Home = () => {
  return (
    <>
    <Logo />
    <Header>
      <Navbar>
          <Item content="Inicio" />
          <Item content="Acerca de mi" />
          <Item content="proyectos" />          
      </Navbar>
    </Header>    
    </>
  )
}


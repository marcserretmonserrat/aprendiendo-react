import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const test = { initialIsFollowing: false, userName: 'test' , name : 'test'}

    const [name, setName] = useState('Listo')

    console.log('render with name: ' + name)

    return(
        <section className='App'>
            <TwitterFollowCard initialIsFollowing userName="MarcSerret" name="MarcSerret">
                Marc Serret
            </TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing userName="midudev" name="Miguel Ángel Duran">
                Miguel Ángel Duran
            </TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing={false} userName="pheralb" name="Pablo Henandez">
                Pablo Henandez
            </TwitterFollowCard>
            <TwitterFollowCard {...test}>
                
            </TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing={false} userName={name} name="Prueba actualización dom">
                Prueba actualización dom
            </TwitterFollowCard>

            <button onClick={()=>setName('Change')}>
                Cambia nombre
            </button>
        </section>
        
    )
}


// Componente -> Función que genera elementos.
// Elemento -> Elementos que se reenderizan.

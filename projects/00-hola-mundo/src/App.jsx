import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
        const users = [
    {
        userName: 'MarcSerret',
        name: 'MarcSerret',
        initialIsFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Ángel Duran',
        initialIsFollowing: false
    },
    {
        userName: 'pheralb',
        name: 'Pablo Henandez',
        initialIsFollowing: false
    },
    {
        userName: 'tes1',
        name: 'test',
        initialIsFollowing: true
    },
    {
        userName: 'test2',
        name: 'test',
        initialIsFollowing: true
    },
    {
        userName: 'test3',
        name: 'test',
        initialIsFollowing: true
    },
    ]

    return(
        <section className='App'>
           {
            users.map(({ userName, name, initialIsFollowing}) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={initialIsFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            )
            }
        </section>
        
    )
}


// Componente -> Función que genera elementos.
// Elemento -> Elementos que se reenderizan.

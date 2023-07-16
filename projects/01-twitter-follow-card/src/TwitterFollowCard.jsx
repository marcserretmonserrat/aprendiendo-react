import { useState } from "react"

export function TwitterFollowCard ({children = 'unknow',userName = 'unknow', initialIsFollowing = false}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    // comentarios de javascript
    console.log('Propagación de cambios', userName)

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt={`El avatar de ${userName}`} />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUserName'>{`@${userName}`}</span>
            </div>
        </header>

        {/* Comentarios */}

        <aside className='tw-followCard-aside'>
            <button className={buttonClassName} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}
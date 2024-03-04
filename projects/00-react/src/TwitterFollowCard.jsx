export function TwitterFollowCard({ }) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt='El avatar de midudev'
                    src={`https://unavatar.io/midudev`}
                />
                <div className='tw-followCard-info'>
                    <strong>Hola</strong>
                    <span className='tw-followCard-infoUserName'>@midudev</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    <span className='tw-followCard-text'>midudev</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
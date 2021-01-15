import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

// we use destruction {} to avoid using "props."
const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner></Spinner>
    ) : (
            <section className='cards'>
                {items.map((item) => (
                    <CharacterItem key={item.char_id} item={item}></CharacterItem>
                ))}
            </section>
        )
}

export default CharacterGrid





// Responsible for creating the Character Grid of Card Imgs 
import { useState } from 'react'
import Cards from './Cards'

const questions = ['a', 'b', 'c']

export default function PreferencesInput() {
  const [cards, setCards] = useState(questions)

  const handleSwipe = (item, direction) => {
    console.log(item, 'was swiped', direction)
    // Remove the card from the data array
    setCards((current) => current.filter((card) => card !== item))
  }

  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
      <div className="w-full max-w-md mx-auto">
        <Cards cards={cards} onSwipe={handleSwipe} />
      </div>
    </div>
  )
}

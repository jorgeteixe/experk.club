import { useState } from 'react'
import { Card } from './Card'

export default function PreferencesInput({ title, emoji, questions }) {
  const [cards, setCards] = useState(questions)

  function handleResponse(index, response) {
    console.log(`Responded with ${response} to ${cards[index].title}`)

    setCards((cards) => cards.filter((_, i) => i !== index))
  }

  return (
    <div className="h-screen bg-slate-300 flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-5 font-semibold ">
        Choose the{' '}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">
          {title}
        </span>{' '}
        {emoji}
      </h1>
      <div className="relative w-[300px] h-[450px]">
        {cards.map((q, i) => (
          <Card
            key={i}
            imageSrc={q.imageSrc}
            title={q.title}
            description={q.description}
            onLike={() => handleResponse(i, 'like')}
            onDislike={() => handleResponse(i, 'dislike')}
          />
        ))}
      </div>
    </div>
  )
}

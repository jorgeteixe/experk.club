import Card from './Card'

export default function Cards({ cards, onSwipe }) {
  return (
    <div className="relative w-full h-full">
      {cards.map((card, index) => (
        <Card
          key={index}
          data={card}
          onSwipe={onSwipe}
          index={index}
          total={cards.length}
        />
      ))}
    </div>
  )
}

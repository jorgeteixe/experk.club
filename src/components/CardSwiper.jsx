import { useState } from 'react'

export default function CardSwiper() {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      onClick={() => setCount(count + 1)}
      className="p-2 border hover:bg-gray-200"
    >
      Counter is {count}
    </button>
  )
}

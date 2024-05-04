import { useEffect, useState } from 'react'
import { getMyData } from '../lib/getters'

export default function Prueba() {
  const [data, setData] = useState([])

  useEffect(() => {
    getMyData().then(setData)
  }, [])

  return (
    <div>
      <ul>
        {data.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </div>
  )
}

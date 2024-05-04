import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function Card({ data, onSwipe, index, total }) {
  const [{ x, y, scale }, api] = useSpring(() => ({
    x: 0,
    y: -10 * index, // Offset cards vertically
    scale: 1,
    config: { friction: 50 },
  }))

  // Handle drag gestures
  const bind = useDrag(
    ({ down, movement: [mx, my], direction: [xDir], velocity, cancel }) => {
      if (down) {
        api.start({ x: mx, y: my + -10 * index, scale: 1.1 }) // Maintain offset when dragging
      } else {
        const xVelocity = velocity > 0.2 ? (xDir > 0 ? 300 : -300) : 0
        api.start({ x: xVelocity, y: -10 * index, scale: 1 }) // Return to offset position

        if (xVelocity !== 0) {
          onSwipe(data, xVelocity > 0 ? 'right' : 'left')
        }
      }
    }
  )

  return (
    <animated.div
      {...bind()}
      style={{ x, y, scale, touchAction: 'none' }}
      className="absolute bg-white p-4 rounded shadow max-w-sm w-96 h-128"
    >
      <p>{data}</p>
    </animated.div>
  )
}

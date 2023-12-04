import * as React from 'react'

export default function App() {
  const [count, setCount] = React.useState(0)

  const signalList = ['-', '+']
  const changeNumber = (currentSignal) => {
    currentSignal === '-' ? setCount(count - 1) : setCount(count + 1)
  }

  return (
    <main>
      <span>{count}</span>
      <div>
        {signalList.map((signal, index) => {
          return (
            <button
              key={index}
              onClick={() => changeNumber(signal)}
            >
              {signal}
            </button>
          )
        })}
      </div>
    </main>
  )
}

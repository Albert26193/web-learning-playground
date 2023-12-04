import * as React from 'react'

export default function App() {
  const [colorMode, setColorMode] = React.useState('dark')

  const handleModeChange = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  const buttonText = () => {
    return colorMode === 'dark' ? 'Activate Light Mode' : 'Activate Dark Mode'
  }

  return (
    <main className={colorMode}>
      <button onClick={handleModeChange}>{buttonText()}</button>
    </main>
  )
}

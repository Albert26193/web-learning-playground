import * as React from 'react'

export default function App() {
  const [colorMode, setColorMode] = React.useState('dark')

  const handleDarkMode = () => {
    setColorMode('dark')
  }
  const handleLightMode = () => {
    setColorMode('light')
  }

  return (
    <main className={colorMode}>
      {colorMode === 'light' ? (
        <button onClick={handleDarkMode}>Activate Dark Mode</button>
      ) : (
        <button onClick={handleLightMode}>Activate Light Mode</button>
      )}
    </main>
  )
}

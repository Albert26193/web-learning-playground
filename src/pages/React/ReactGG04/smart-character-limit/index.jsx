import React from 'react'

function LimitedTextInput() {
  const [inputValue, setInputValue] = React.useState('')
  const characterLimit = 20
  const remainCharacter = characterLimit - inputValue.length
  const limitExceeded = inputValue.length > characterLimit

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (limitExceeded) {
      alert('The input exceeds the character limit. Please shorten your text.')
    } else {
      alert('Thanks for your submission')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className={limitExceeded ? 'error' : 'no-error'}>
          Characters remaining: {remainCharacter}
        </span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="primary"
      >
        Submit
      </button>
    </form>
  )
}

export default LimitedTextInput

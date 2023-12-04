import * as React from 'react'

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Fig',
  'Grape',
  'Honeydew',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
  'Raspberry',
  'Strawberry',
  'Watermelon'
]

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = React.useState('')
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

import * as React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    <div>
      <Header />
      <button
        className="text-2xl"
        onClick={() => {
          alert('ad asd')
        }}
        type="button"
      >
        body
      </button>
    </div>
  )
}

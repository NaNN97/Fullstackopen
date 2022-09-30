import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const persons = [
  {
    name: 'Dan',
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
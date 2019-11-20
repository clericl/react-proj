import React from 'react'
import TabNav from './TabNav'
import CatPane from './CatPane'
import DogPane from './DogPane'
import TodoPane from './TodoPane'

function App({ tabName }) {
  const paneComponent = {
    "Cats": <CatPane />,
    "Dogs": <DogPane />,
    "Todos": <TodoPane />
  }

  return (
    <div className="app-wrap">
      <TabNav />
      { paneComponent[tabName] }
    </div>
  )
}

export default App

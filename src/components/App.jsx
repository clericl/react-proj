import React from 'react'
import TabNav from './TabNav'
import CatPane from './CatPane'
import DogPane from './DogPane'
import TodoPane from './TodoPane'
import { connect } from 'react-redux'

import './app.scss'

function App({ activeTab }) {
  let component

  switch (activeTab) {
    case "Cats":
      component = <CatPane />
      break

    case "Dogs":
      component = <DogPane />
      break

    case "Todos":
      component = <TodoPane />
      break

    default:
      component = null
      break
  }

  return (
    <div className="app-wrap">
      <TabNav />
      { component }
    </div>
  )
}

const mapStateToProps = (state) => ({
  activeTab: state.tabs.activeTab
})

export default connect(mapStateToProps)(App)

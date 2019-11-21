import React from 'react'
import Tab from './Tab'

class TabNav extends React.Component {
  render() {
    return (
      <nav className="tab-nav">
        <Tab tabName="Cats" />
        <Tab tabName="Dogs" />
        <Tab tabName="Todos" />
      </nav>
    )
  }
}

export default TabNav

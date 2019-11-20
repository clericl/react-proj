import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ItemList from './ItemList'
import ItemInput from './ItemInput'
import configureStore from './redux/configureStore'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ItemList />
        <ItemInput />
      </Provider>
    )
  }
}

export default App

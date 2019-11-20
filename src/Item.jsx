import React from 'react'
import {
  deleteItem
} from './redux/itemActions'
import { connect } from 'react-redux'

class Item extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const {
      item: {
        id
      },
      deleteItem
    } = this.props

    deleteItem(id)
  }

  render() {
    const {
      item: {
        fact
      }
    } = this.props

    return (
      <li>
        {fact}
        <button onClick={this.handleClick}>delete</button>
      </li>
    )
  }
}

const mapDispatchToProps = ({
  deleteItem: (id) => deleteItem(id)
})

export default connect(null, mapDispatchToProps)(Item)

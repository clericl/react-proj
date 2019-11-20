import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'

class ItemList extends React.Component {
  constructor(props) {
    super(props)

    this.mapItemsToComponents = this.mapItemsToComponents.bind(this)
  }

  mapItemsToComponents() {
    const { items } = this.props

    return items.map((item) => {
      return <Item item={item} />
    })
  }

  render() {
    return (
      <ul>
        {this.mapItemsToComponents()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.items
  }
}

export default connect(mapStateToProps)(ItemList)

import React from 'react'
import {
  addCatFact,
  deleteCatFact
} from '../redux/actions'
import { connect } from 'react-redux'

class CatPane extends React.Component {
  handleAddClick = () => {
    const { addCatFact } = this.props

    addCatFact()
  }

  handleDeleteClick = (id) => {
    const { deleteCatFact } = this.props

    deleteCatFact(id)
  }

  render() {
    const { items } = this.props

    return (
      <div className="pane">
        <ul>
          {
            items.map((item) => (
              <li>
                {item.fact}
                <button onClick={() => this.handleDeleteClick(item.id)}>delete</button>
              </li>
            ))
          }
        </ul>
        <button className="input" onClick={this.handleAddClick}>Cat fact!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.cats.facts
})

const mapDispatchToProps = ({
  addCatFact,
  deleteCatFact
})

export default connect(mapStateToProps, mapDispatchToProps)(CatPane)

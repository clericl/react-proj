import React from 'react'
import { connect } from 'react-redux'
import {
  addDogFact,
  deleteDogFact
} from '../redux/actions'

class DogPane extends React.Component {
  handleAddClick = () => {
    const { addDogFact } = this.props

    addDogFact()
  }

  handleDeleteClick = (id) => {
    const { deleteDogFact } = this.props

    deleteDogFact(id)
  }

  render() {
    const { items } = this.props

    return (
      <div className="pane">
        <ul>
          {
            items.map((item) => (
              <li>
                {item.facts}
                <button onClick={() => this.handleDeleteClick(item.id)}>delete</button>
              </li>
            ))
          }
        </ul>
        <button className="input" onClick={this.handleAddClick}>Dog fact!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.dogs.facts
})

const mapDispatchToProps = ({
  addDogFact,
  deleteDogFact
})

export default connect(mapStateToProps, mapDispatchToProps)(DogPane)

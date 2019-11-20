import React from 'react'
import { connect } from 'react-redux'
import {
  addDogFact,
  deleteDogFact
} from '../redux/actions'

class DogPane extends React.Component {
  render() {
    const { items } = this.props

    return (
      <div className="pane">
        <ul>
          {
            items.map((item) => (
              <li>
                {item.fact}
                <button>delete</button>
              </li>
            ))
          }
        </ul>
        <button>Dog fact!</button>
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

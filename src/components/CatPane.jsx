import React from 'react'
import {
  addCatFact,
  deleteCatFact
} from '../redux/actions'
import { connect } from 'react-redux'

class CatPane extends React.Component {
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
        <button>Cat fact!</button>
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

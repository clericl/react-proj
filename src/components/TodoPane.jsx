import React from 'react'
import {
  addTodo,
  editTodo,
  deleteTodo
} from '../redux/actions'
import { connect } from 'react-redux'

class TodoPane extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render() {
    const { value } = this.state
    const { items } = this.props

    return (
      <div className="pane">
        <ul>
          {
            items.map((todo) => (
              <li>
                {todo.body}
                <button>edit</button>
                <button>delete</button>
              </li>
            ))
          }
        </ul>
        <textarea value={value} />
        <button>todo!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.todos.todos
})

const mapDispatchToProps = ({
  addTodo,
  editTodo,
  deleteTodo
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPane)

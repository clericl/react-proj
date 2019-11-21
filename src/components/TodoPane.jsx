import React from 'react'
import TodoItem from './TodoItem'
import {
  addTodo
} from '../redux/actions'
import { connect } from 'react-redux'

class TodoPane extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleAddClick = () => {
    const { addTodo } = this.props
    const { value } = this.state

    addTodo({
      body: value
    })
  }

  render() {
    const { value } = this.state
    const { items } = this.props

    return (
      <div className="pane">
        <ul>
          {
            items.map((todo) => (
              <TodoItem todo={todo} />
            ))
          }
        </ul>
        <div className="input">
          <textarea value={value} onChange={this.handleChange} />
          <button onClick={this.handleAddClick}>todo!</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.todos.todos
})

const mapDispatchToProps = ({
  addTodo
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoPane)

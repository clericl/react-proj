import React from 'react'
import { connect } from 'react-redux'
import {
  editTodo,
  deleteTodo
} from '../redux/actions'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      value: this.props.todo.body
    }
  }

  toggleEdit = () => {
    const { isEditing } = this.state

    this.setState({
      isEditing: !isEditing
    })
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleEditClick = () => {
    const {
      editTodo,
      todo
    } = this.props
    const { value } = this.state

    editTodo({
      ...todo,
      body: value
    })

    this.toggleEdit()
  }

  handleDeleteClick = (id) => {
    const { deleteTodo } = this.props

    deleteTodo(id)
  }

  render() {
    const { todo } = this.props
    const {
      isEditing,
      value
    } = this.state

    if (isEditing) {
      return (
        <li>
          <input value={value} onChange={this.handleChange} />
          <button onClick={this.handleEditClick}>save edit</button>
        </li>
      )
    } else {
      return (
        <li>
          {todo.body}
          <button onClick={this.toggleEdit}>edit</button>
          <button onClick={() => this.handleDeleteClick(todo.id)}>delete</button>
        </li>
      )
    }
  }
}

const mapDispatchToProps = ({
  editTodo,
  deleteTodo
})

export default connect(null, mapDispatchToProps)(TodoItem)

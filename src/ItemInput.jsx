import React from 'react'
import { connect } from 'react-redux'
import {
  fetchItem
} from './redux/itemActions'


class ItemInput extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    const { fetchItem } = this.props
    fetchItem()
  }

  render() {
    return (
      <button onClick={this.handleSubmit}>add cat fact!</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchItem: () => dispatch(fetchItem())
})

export default connect(null, mapDispatchToProps)(ItemInput)

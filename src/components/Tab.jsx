import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import {
  setActiveTab
} from '../redux/actions'

function Tab(props) {
  const {
    activeTab,
    setActiveTab,
    tabName
  } = props

  const klass = classNames(
    'tab',
    { 'active' : activeTab === tabName }
  )

  return (
    <div className={klass} onClick={() => setActiveTab(tabName)}>
      {tabName}
    </div>
  )
}

const mapStateToProps = (state) => ({
  activeTab: state.tabs.activeTab
})

const mapDispatchToProps = ({
  setActiveTab
})

export default connect(mapStateToProps, mapDispatchToProps)(Tab)

import React from 'react'
import ReactDom from 'react-dom'
import './home.scss'
class home extends React.Component{
  render () {
    return (
      <p className='home'>
        This is
        <span className='bold'> home</span>
      </p>
    )
  }
}
export default home

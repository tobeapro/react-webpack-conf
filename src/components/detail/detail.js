import React from 'react'
import ReactDom from 'react-dom'
import './detail.scss'
class Detail extends React.Component{
  render () {
    return (
      <p className='detail'>
        This is
        <span className='bold'> detail</span>
      </p>
    )
  }
}
export default Detail

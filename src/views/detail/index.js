import React from 'react'
import { message } from 'antd'
import './index.less'

function Detail(props) {
  const name = props.match.params.name
  if (name === ':void') {
    message.loading('没有详情名称', 1)
    window.setTimeout(() => {
      props.history.push('/')
    }, 1000)
  }
  return (
    <div className="detail">
      <h1>DETAIL PAGE</h1>
      <h2>{name && name !== ':void' ? `This is ${name} page` : ''}</h2>
    </div>
  )
}
export default Detail

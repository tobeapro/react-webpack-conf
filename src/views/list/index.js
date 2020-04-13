import React, { useState } from 'react'
import { message, Button, Popover, Input, List } from 'antd'
import { connect } from 'react-redux'
import { ADD_TODO_FN } from '@/store/action'
import './index.scss'
function todoList(props){
    const [ visible, setVisible ] = useState(false)
    const [ todo, setTodo ] = useState('')
    function addTodo(){
        if(!todo){
            return message.warning('请输入todo')
        }
        props.addTodo(todo)
        setTodo('')
        setVisible(false)
    }
    return (
        <div className="list">
            <h1>LIST PAGE</h1>
            <Popover
                content={
                    <div>
                        <Input value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
                        <Button style={{marginTop:'10px'}} type='primary' onClick={addTodo}>确定</Button>
                        <Button style={{margin:'10px 0 0 10px'}} onClick={()=>{setVisible(false)}}>取消</Button>
                    </div>
                }
                placement="right"
                title="add Todo"
                trigger="click"
                visible={visible}
                >
                <Button type="primary" onClick={()=>{setVisible(true)}} style={{marginBottom:'10px'}}>Add</Button>
            </Popover>
            <List
                size="small"
                style={{background:'#fff'}}
                bordered
                dataSource={props.todoList}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </div>
    )
}
function mapStateToProps(state){
    return {
        todoList: state.todoList||[]
    }
}
function mapDispatchToProps(dispatch){
    return {
        addTodo(val){
            const action = ADD_TODO_FN(val)
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(todoList)
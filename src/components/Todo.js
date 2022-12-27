import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, editTodo } from '../redux/action/addTodo.action'

const Todo = ({ todo, idx, deleteTodo, editTodo }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            border: "1px solid #ffffffa6",
            padding: '5px',
            cursor: 'pointer'
        }}>
            <div onClick={() => editTodo(idx)}>{todo}</div>
            <div style={{ cursor: 'pointer' }} onClick={() => deleteTodo(idx)}>X</div>
        </div>
    )
}

const mapDispachedProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key))
})

export default connect(null, mapDispachedProps)(Todo)
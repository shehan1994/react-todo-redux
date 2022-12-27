import React from 'react';
import { connect } from 'react-redux';
import { addText, addTodo, editAddTodo } from '../redux/action/addTodo.action';

class InputField extends React.Component {
    // state = {
    //     todo: '',
    // }

    // handleChange = e => this.setState({ todo: e.target.value });

    handleChange = e => this.props.addText(e.target.value);
    handleSubmit = e => {
        e.preventDefault();
        // this.props.addTodo(this.state.todo);
        if (this.props.selected || this.props.selected === 0)
            this.props.editAddTodo({ value: this.props.text, selected: this.props.selected })
        else
         
            this.props.addTodo(this.props.text);
        this.setState({ todo: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='name'
                    value={this.props.text}
                    placeholder='Enter your todo'
                    onChange={this.handleChange} />
            </form>
        );

    }
}

const mapDispachToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo)),
    addText: value => dispatch(addText(value)),
    editAddTodo: obj => dispatch(editAddTodo(obj))
})
const mapStateToProps = state => ({
    text: state.text,
    selected: state.selected
});
export default connect(
    mapStateToProps,
    mapDispachToProps
)(InputField)
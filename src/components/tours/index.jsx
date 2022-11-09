import { h } from 'preact';
import { useContext } from 'preact/hooks';
import PropTypes from 'prop-types';
import { AppState } from '../app';

const Tours = ({name}) => {
    const {todos}=useContext(AppState)
    return (
        <div>
            <p>{name}</p>
            <ul>
                {todos.value.map((todo, index)=><li key={todo.text+index}>{todo.text}</li>)}
            </ul>
        </div>
    );
};

Tours.propTypes = {
    name: PropTypes.string
};

export default Tours;
import types from 'prop-types';
import { StyledTask } from "./style";

export function Task (props){

    // props -> é um objeto que contém tudo que foi passado na chamada do componente
    // console.log(props);

    return (

        <StyledTask>
            <p>{props.title}</p>
            <button onClick={()=>props.onRemove(props.id)}>X</button>
        </StyledTask>
    )
}

Task.propTypes = {
    title: types.string.isRequired,
    id: types.number.isRequired
}

Task.defaultProps = {
    title: 'Sem título',
    id: 0
}
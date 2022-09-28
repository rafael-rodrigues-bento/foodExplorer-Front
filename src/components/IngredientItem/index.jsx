import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles'

export function IngredientItem({isNew, value, ...rest}) {

    return(
        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            {...rest}
            />

            <button
            type="button"
            className={isNew ? 'button-add' : 'button-delete' }
            >
                { isNew ? <FiPlus/> : <FiX/> }

            </button>
        </Container>
    );
}
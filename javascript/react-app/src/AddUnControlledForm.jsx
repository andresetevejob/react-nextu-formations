import {useRef} from "react";
import PropTypes from 'prop-types'

AddUnControlledForm.propTypes = {
    article : PropTypes.object,
    onNewColor:PropTypes.func,
}
function AddUnControlledForm(props){
    const txtTitle = useRef();
    const txtColor = useRef();
    const submit = e =>{
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = txtColor.current.value;
        props.onNewColor({title:title,color:color})
    }
    return(
        <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder="color title..." required />
            <input ref={txtColor} type="text" required />
            <button>ADD</button>
        </form>
    )
}
export default AddUnControlledForm
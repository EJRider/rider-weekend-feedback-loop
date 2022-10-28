import {useHistory} from 'react-router-dom'
import {useState} from 'react';
import {useDispatch} from 'react-redux';

function SupportForm(){
    const history = useHistory();

    const dispatch = useDispatch();

    const [supNum, setSupNum] = useState(0);

    const saveSup = (evt) => {
        evt.preventDefault
        dispatch({
            type:'STORE_SUPPORT',
            payload: supNum
        });
        history.push('/understanding')
    }

    return (
        <>
        <h2>How supported do you feel?</h2>
        <form onSubmit={saveSup}>
            <input 
            type='number'
            onChange={(evt)=>{setSupNum(evt.target.value)}}
            value={supNum}
            ></input>
            <br/>
            <br/>
            <button type='submit'>Next</button>
        </form>
        </>
    )
}

export default SupportForm;
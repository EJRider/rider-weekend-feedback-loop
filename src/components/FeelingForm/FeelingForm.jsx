import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';



function FeelingForm(){

    const history = useHistory();

    const dispatch = useDispatch();

    const [feelNum, setFeelNum] = useState(0);

    const saveFeel = (evt) => {
        evt.preventDefault
        dispatch({
            type:'STORE_FEELING',
            payload: feelNum
        });
        history.push('/support')
    }

    return (
        <>
        <form onSubmit={saveFeel}>
            <input 
            type='number'
            onChange={(evt)=>{setFeelNum(evt.target.value)}}
            value={feelNum}
            ></input>

            <button type='submit'>Next</button>
        </form>
        </>
    )
}

export default FeelingForm;
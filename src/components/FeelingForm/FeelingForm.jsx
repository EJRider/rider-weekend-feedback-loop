import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';



function FeelingForm(){

    const history = useHistory();

    const dispatch = useDispatch();

    const [feelNum, setFeelNum] = useState(0);

    //Sends data to the state and moves the user to the support page
    const saveFeel = (evt) => {
        evt.preventDefault
        // Sends Feeling data to feeling state
        dispatch({
            type:'STORE_FEELING',
            payload: feelNum
        });
        history.push('/support')
    }

    return (
        <>
        <h2>How are you feeling today?</h2>
        <form onSubmit={saveFeel}>
            <input 
            type='number'
            onChange={(evt)=>{setFeelNum(evt.target.value)}}
            value={feelNum}
            ></input>
            <br/>
            <br/>
            <button type='submit'>Next</button>
        </form>
        </>
    )
}

export default FeelingForm;
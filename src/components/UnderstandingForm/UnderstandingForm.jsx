import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function UnderstandingForm () {
    const history = useHistory();

    const dispatch = useDispatch();

    const [underNum, setUnder] = useState(0);

    //Sends the understanding data to the state, then moves the user to the comment page
    const saveUnder = (evt) => {
        evt.preventDefault
        dispatch({
            type:'STORE_UNDERSTANDING',
            payload: underNum
        });
        history.push('/comment')
    }

    return (
        <>
        <h2>How well do you feel you understand the material?</h2>
        <form onSubmit={saveUnder}>
            <input 
            type='number'
            onChange={(evt)=>{setUnder(evt.target.value)}}
            value={underNum}
            min='1'
            max='6'
            ></input>
            <br/>
            <br/>
            <button type='submit'>Next</button>
        </form>
        </>
    )
}

export default UnderstandingForm;


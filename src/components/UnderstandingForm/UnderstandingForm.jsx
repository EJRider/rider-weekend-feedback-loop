import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function UnderstandingForm () {
    const history = useHistory();

    const dispatch = useDispatch();

    const [underNum, setUnder] = useState(0);

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
            ></input>
            <br/>
            <br/>
            <button type='submit'>Next</button>
        </form>
        </>
    )
}

export default UnderstandingForm;


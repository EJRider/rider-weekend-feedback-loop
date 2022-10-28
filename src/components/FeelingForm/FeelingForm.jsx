import {useState} from 'react';
import {useDispatch} from 'react-redux';


function FeelingForm(){

    const dispatch = useDispatch()

    const [feelNum, setFeelNum] = useState(0)

    const saveFeel = (evt) => {
        evt.preventDefault
    }

    return (
        <>
        <form onSubmit={saveFeel}>
            <input 
            type='number'
            onChange={(evt)=>{}}
            value={feelNum}
            ></input>

            <button type='submit'>Next</button>
        </form>
        </>
    )
}

export default FeelingForm;
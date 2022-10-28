import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function ReviewDisplay(){

    const history = useHistory();

    const dispatch = useDispatch();

    const feedback = useSelector(store=>store.feedback)

    const saveFeedback = () => {
        console.log('saving feedback');
    }

    const backToTheStart = () => {
        history.push('/')
    }

    return(
        <>
        <h2>Does everything look correct?</h2>
        <ul>
            <li>Feeling: {feedback.feeling}</li>
            <li>Support: {feedback.support}</li>
            <li>Understanding: {feedback.understanding}</li>
            <li>Comments: {feedback.comment}</li>
        </ul>
        <br/>
        <br/>
        <button onClick={saveFeedback}>Yes, thank you</button>
        <button onClick={backToTheStart}>No, let me go back to the start</button>
        </>
    )
}

export default ReviewDisplay;
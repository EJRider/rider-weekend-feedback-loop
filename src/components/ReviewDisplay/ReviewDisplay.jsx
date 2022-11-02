import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function ReviewDisplay({submitReview}){

    const dispatch = useDispatch();

    const history = useHistory();


    const feedback = useSelector(store=>store.feedback)

    //Runs the axios.post, then alerts the user that the feedback is submitted before moving them to the Feeling('Home') page
    const saveFeedback = () => {
        submitReview(feedback);
        alert('Thank you for providing feedback, have a lovely day :)');
        history.push('/')
        dispatch({
            type: 'RESET'
        })
    }
    //Alerts the user that they are going back to the start of the survey, then moves the user back to the Feeling('Home') page
    const backToTheStart = () => {
        alert('Sending you back to the start');
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
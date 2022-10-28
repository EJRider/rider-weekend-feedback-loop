import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function ReviewDisplay({submitReview}){

    const history = useHistory();


    const feedback = useSelector(store=>store.feedback)

    const saveFeedback = () => {
        console.log('saving feedback');
        submitReview(feedback);
        alert('Thank you for providing feedback, have a lovely day :)');
        history.push('/')
    }

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
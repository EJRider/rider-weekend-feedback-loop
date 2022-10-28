import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function CommentForm(){
    const history = useHistory();

    const dispatch = useDispatch();

    const [comment, setComment] = useState('');

    const feeling = useSelector(state=>state.feeling);

    const support = useSelector(state=>state.support);

    const understanding = useSelector(state=>state.understanding);

    //Packages all the data to dispatch into feedback reducer
    let toFeedback = {
        feeling,
        support,
        understanding,
        comment
    }

    //On submit, sends data to state and moves the user to the review page.
    const saveComment = (evt) => {
        evt.preventDefault
        //Sends the comment data to comment state
        dispatch({
            type:'STORE_COMMENT',
            payload: comment
        });
        //Sends the toFeedback object to the feedback state
        dispatch({
            type: 'BUNDLE_FEEDBACK',
            payload: toFeedback
        });
        history.push('/review');
    }

    return (
        <>
        <h2>Any comments?</h2>
        <form onSubmit={saveComment}>
            <input 
            type='text'
            onChange={(evt)=>{setComment(evt.target.value)}}
            value={comment}
            ></input>
            <br/>
            <br/>
            <button type='submit'>Go to review</button>
        </form>
        </>
    )
}

export default CommentForm;
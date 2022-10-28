import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function CommentForm(){
    const history = useHistory();

    const dispatch = useDispatch();

    const [comment, setComment] = useState('');

    const saveComment = (evt) => {
        evt.preventDefault
        dispatch({
            type:'STORE_COMMENT',
            payload: comment
        });
        history.push('/review')
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
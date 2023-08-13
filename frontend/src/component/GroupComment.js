import { useState, useEffect } from 'react';
import FormComment from './FormComment';
import ListComment from './ListComment';

function GroupComment({ videoId }) {
  // GET
  const [comment, setComment] = useState([]);
  const getComment = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/comment/${videoId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const result = await response.json();
    setComment(result);
  };

  useEffect(() => {
    try {
      getComment();
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }, []);

  // POST and UPDATE
  const [form, setForm] = useState({
    commentId: '',
    username: '',
    comment: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEdit = (commentData) => {
    const elmUsername = document.querySelector('input[name=username]');
    const elmComment = document.querySelector('textarea[name=comment]');
    const elmCommentId = document.querySelector('input[name=commentId]');
    elmUsername.value = commentData.username;
    elmComment.value = commentData.comment;
    elmCommentId.value = commentData._id;
    setForm({
      commentId: commentData._id,
      username: commentData.username,
      comment: commentData.comment,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentId = document.querySelector('input[name=commentId]').value;
    if (commentId !== '') {
      // EDIT
      try {
        const updateComment = async (data) => {
          const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/comment/id/${commentId}`,
            {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            }
          );
          const status = await response.status;
          if (status === 200) {
            try {
              getComment();
            } catch (error) {
              console.log('Fetch error:', error);
            }
            setForm({ username: '', comment: '', commentId: '' });
          }
        };

        const data = {
          ...form,
          videoID: videoId,
        };
        updateComment(data);
      } catch (error) {
        console.log('Fetch error:', error);
      }
    } else {
      // CREATE
      try {
        const postComment = async (data) => {
          const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/comment`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            }
          );
          const status = await response.status;
          if (status === 201) {
            try {
              getComment();
            } catch (error) {
              console.log('Fetch error:', error);
            }
            setForm({ username: '', comment: '', commentId: '' });
          }
        };
        const { username, comment } = form;
        const data = {
          username: username,
          comment: comment,
          videoID: videoId,
        };
        postComment(data);
      } catch (error) {
        console.log('Fetch error:', error);
      }
    }
    //   console.log(form);
  };

  return (
    <>
      <ListComment comment={comment} handleEdit={handleEdit} />
      <hr style={{ border: '2px solid #ffffff' }} />
      <FormComment
        form={form}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default GroupComment;

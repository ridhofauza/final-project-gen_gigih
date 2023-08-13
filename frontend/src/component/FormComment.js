import { useState } from 'react';

function FormComment({ form, handleInput, handleSubmit }) {
  return (
    <>
      <form className=''>
        <input type='hidden' name='commentId' value={form.commentId} />
        <div className='mb-1'>
          <label className='d-block' htmlFor='username'>
            Username
          </label>
          <input
            className='w-100'
            type='text'
            name='username'
            value={form.username}
            placeholder='Username'
            onChange={(event) => handleInput(event)}
          />
        </div>
        <div className='mb-1'>
          <label className='d-block' htmlFor='comment'>
            Comment
          </label>
          <textarea
            className='w-100'
            name='comment'
            value={form.comment}
            placeholder='Comment'
            onChange={(event) => handleInput(event)}
          ></textarea>
        </div>
        <div className='d-flex justify-content-end mb-1'>
          <button
            className='btn btn-primary'
            type='button'
            onClick={(event) => handleSubmit(event)}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default FormComment;

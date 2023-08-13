function ItemComment({ commentData, handleEdit }) {
  const formatDate = (date) => {
    const fmtDate =  new Date(date);
   return fmtDate.toLocaleString();
  };
  return (
    <li className='card bg-secondary text-white m-2 p-3 my-2 border-0'>
      <h5 className='m-0'>{commentData.username}</h5>
      <p className='m-0'>{commentData.comment}</p>
      <p className='m-0'>
        <small>
          {commentData.updated_at == null
            ? formatDate(commentData.created_at)
            : formatDate(commentData.updated_at)}
        </small>
      </p>
      <button
        type='button'
        onClick={() => {
          handleEdit(commentData);
        }}
      >
        Edit
      </button>
    </li>
  );
}

export default ItemComment;

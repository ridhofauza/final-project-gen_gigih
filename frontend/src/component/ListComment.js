import { useState, useEffect } from 'react';
import ItemComment from './ItemComment';

function ListComment({ comment, handleEdit }) {
  // const [comment, setComment] = useState([]);
  // useEffect(() => {
  //   try {
      // const getComment = async () => {
      //   const response = await fetch(
      //     `${process.env.REACT_APP_API_BASE_URL}/comment/${videoId}`,
      //     {
      //       method: 'GET',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     }
      //   );
      //   const result = await response.json();
      //   setComment(result);
      // };
  //     getComment();
  //   } catch (error) {
  //     console.log('Fetch error:', error);
  //   }
  // }, []);
  // console.log(comment);

  return (
    <>
      <ul className='list-unstyled h-50 overflow-auto'>
        {comment.map((val) => {
          return <ItemComment key={val._id} commentData={val} handleEdit={handleEdit} />;
        })}
        {comment.length === 0 ? 'Comment Not Found' : ''}
      </ul>
    </>
  );
}

export default ListComment;

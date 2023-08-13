import { Link } from 'react-router-dom';

function Card({ video, videoId }) {
  let thumbnailId = video.split('/');
  thumbnailId = thumbnailId[4];
  console.log(thumbnailId);
  return (
    <Link
      className='card mt-3 mx-lg-1 mx-md-1 mx-auto'
      to={`/products/${videoId}`}
    >
      <iframe
        className='card-img'
        height='510'
        src={`${video}`}
        title={videoId}
      ></iframe>
      <div className='card-img-overlay text-white'>
        <div className='d-inline-block bg-danger rounded py-1 px-3'>Live</div>
        <div className='d-inline-block bg-secondary rounded py-1 ms-2 px-3'>
          1024
        </div>
        <div className='d-flex flex-column h-100'>
          <div className='align-self-start mt-auto mb-5 card-title'>
            <p className='m-0'>Product</p>
            <p className='m-0'>Good Product</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;

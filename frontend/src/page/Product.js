import { useParams } from 'react-router';
import ListProduct from '../component/ListProduct';
import ListComment from '../component/ListComment';
import FormComment from '../component/FormComment';

import VideoFrame from '../component/VideoFrame';
import GroupComment from '../component/GroupComment';

function Product() {
  // param videoID
  const params = useParams();
  const videoId = params.videoId;

  return (
    <>
      <div className='container-fluid vh-100 bg-dark pt-3 px-3 '>
        <div className='text-white row h-100'>
          {/* Products */}
          <div className='col-md-3 col-12 p-2 h-100 overflow-auto' style={{ border: '1px solid #ffffff', borderRadius: '1%' }}>
            <ListProduct videoId={videoId} />
          </div>
          {/* Video */}
          <div className='col-md-6 col-12'>
            <div className='d-flex flex-row h-100 justify-content-center align-items-center'>
              <VideoFrame videoId={videoId} />
            </div>
          </div>
          {/* Comments */}
          <div className='col-md-3 col-12 p-2 h-100' style={{ border: '1px solid #ffffff', borderRadius: '1%' }}>
            <GroupComment videoId={videoId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

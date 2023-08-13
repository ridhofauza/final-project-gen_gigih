import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Card from '../component/Card';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const videoProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/video`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log('Fetch error:', error);
      }
    };
    videoProduct();
  }, []);
  console.log(data);

  return (
    <>
      <div className='container-fluid min-vh-100 bg-dark pt-3 pb-3 px-3'>
        <div className='d-flex flex-row flex-wrap mx-0 mx-md-1 mx-lg-3'>
          { data.map((val) => {
            return <Card key={val.videoID} video={val.urlThumbnail} videoId={val.videoID} />
          }) }
        </div>
      </div>
    </>
  );
}

export default Home;

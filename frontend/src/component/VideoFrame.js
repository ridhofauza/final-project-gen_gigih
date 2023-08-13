import { useState, useEffect } from 'react';

function VideoFrame({ videoId }) {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      const videoData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/video/${videoId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const result = await response.json();
        setData(result);
      };
      videoData();
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }, []);
  //   console.log(data);

  return (
    <iframe
      width='650'
      height='420'
      src={`${data.urlThumbnail}?autoplay=1`}
      title={data.videoID}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
      style={{ border: '0px' }}
    ></iframe>
  );
}

export default VideoFrame;

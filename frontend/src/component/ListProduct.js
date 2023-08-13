import { useState, useEffect } from 'react';

import ItemProduct from './ItemProduct';

function ListProduct({ videoId }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    try {
      const getProduct = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/product/${videoId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const result = await response.json();
        setProduct(result);
      };
      getProduct();
    } catch (error) {
      console.log('Fetch error:', error);
    }
  }, []);
//   console.log(product);

  return (
    <>
      <ul className='list-unstyled'>
        {product.map((val) => {
          return (
            <ItemProduct
              key={val.productID}
              title={val.title}
              linkProduct={val.linkProduct}
              price={val.price}
            />
          );
        })}
        {product.length === 0 ? 'Product Not Found' : ''}
      </ul>
    </>
  );
}

export default ListProduct;

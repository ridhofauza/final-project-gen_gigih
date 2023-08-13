function ItemProduct({ linkProduct, title, price }) {
  return (
    <li className='card p-3 my-2 border-0'>
      <h5 className='m-0'>{title}</h5>
      <p className='m-0'>Price: {price}</p>
      <a href={linkProduct}>{linkProduct}</a>
    </li>
  );
}

export default ItemProduct;

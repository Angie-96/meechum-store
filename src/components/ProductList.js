import React, { useContext } from 'react';
import { Product } from './Product';
import { Title } from './Title';
import ProductContext from '../context';

export function ProductList() {
  const { products: contextProducts } = useContext(ProductContext);

  return (
    <>
      <div className="py-3">
        <div className="container">
          <Title name="Our" title="Products" />
          <div className="row">
            {contextProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

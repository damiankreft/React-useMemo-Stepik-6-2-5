import React, { useState, useMemo } from 'react';
import productsData from '../data/products-data.json';

export default function ProductsCatalog() {
  const [isSortedByPriceDescending, setSortByPrice] = useState(false);
  const products = useMemo(() => {
    return isSortedByPriceDescending
      ? productsData.sort((a, b) => (a.price > b.price ? 1 : -1))
      : productsData.sort((a, b) => (a.price > b.price ? -1 : 1));
  }, [isSortedByPriceDescending]);

  return (
    <>
      <h1>Katalog produktów</h1>
      <button
        onClick={() => {
          setSortByPrice(!isSortedByPriceDescending);
        }}
      >
        Sortuj {isSortedByPriceDescending ? 'malejąco' : 'rosnąco'}
      </button>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} {p.subcategory} {p.price}
        </div>
      ))}
    </>
  );
}

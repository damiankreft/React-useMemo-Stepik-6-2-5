import React from 'react';
import './style.css';
import EvenNumbersList from './components/EvenNumbersList';
import ProductsCatalog from './components/ProductsCatalog';
import UserList from './components/UserList';

export default function App() {
  return (
    <div>
      <EvenNumbersList />
      <ProductsCatalog />
      <UserList />
    </div>
  );
}

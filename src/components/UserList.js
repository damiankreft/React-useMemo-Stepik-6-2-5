import React, { useState, useEffect, useMemo } from 'react';
import usersData from '../data/users-data';
import User from './User';

export default function UserList() {
  const [firstnameVal, setFirstname] = useState('');
  const [lastnameVal, setLastname] = useState('');
  const [isSortedByAgeAscending, setSortByAge] = useState(false);
  const users = useMemo(() => usersData, []);
  const [filteredData, setFilteredData] = useState([]);
  useMemo(textFilterChanged, [
    firstnameVal,
    lastnameVal,
    isSortedByAgeAscending,
  ]);

  useEffect(() => {
    setFilteredData(users);
  }, []);

  function textFilterChanged() {
    setFilteredData(() => {
      let data = [...users];

      if (firstnameVal != '') {
        data = data.filter((u) =>
          u.firstname.toLowerCase().includes(firstnameVal.toLowerCase())
        );
      }

      if (lastnameVal != '') {
        data = data.filter((u) =>
          u.lastname.toLowerCase().includes(lastnameVal.toLowerCase())
        );
      }

      return isSortedByAgeAscending
        ? data.sort((a, b) => (a.age > b.age ? 1 : -1))
        : data.sort((a, b) => (a.age > b.age ? -1 : 1));
    });
  }

  const onFirstnameChanged = (e) => {
    e.preventDefault();
    setFirstname(e.target.value.toLowerCase());
  };

  const onLastnameChanged = (e) => {
    e.preventDefault();
    setLastname(e.target.value.toLowerCase());
  };

  return (
    <>
      <h1>Lista użytkowników</h1>
      <input
        onChange={(e) => onFirstnameChanged(e)}
        type="text"
        placeholder="imię"
      />
      <input
        onChange={(e) => onLastnameChanged(e)}
        type="text"
        placeholder="nazwisko"
      />
      <button
        onClick={() => {
          setSortByAge(!isSortedByAgeAscending);
        }}
      >
        Sortuj {isSortedByAgeAscending ? 'malejąco' : 'rosnąco'}
      </button>
      <table>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Wiek</th>
          </tr>
        </thead>

        <tbody>
          {filteredData?.map((u) => (
            <User key={u.id} {...u} />
          ))}
        </tbody>
      </table>
    </>
  );
}

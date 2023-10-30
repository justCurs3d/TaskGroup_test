import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1>Ошибка: Несуществующий URL</h1>
      <p>Извините, запрошенная страница не существует.</p>
      <Link to='/'>Перейти на главную страницу</Link>
    </div>
  );
};

export default Error;
import { useState, useEffect } from 'react';
import RepositoryItem from './RepositoryItem';
import '../styles/repositories.scss';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, []);

  return (
    <section classNmae="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        {
          repositories.map(repository => (
            <RepositoryItem key={repository.name} repository={repository} />
          ))
        }
      </ul>
    </section>
  );
}

export default RepositoryList;
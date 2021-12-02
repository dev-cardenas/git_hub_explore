import RepositoryItem from './RepositoryItem'

function RepositoryList() {
  return (
    <section classNmae="repository-list">
      <h1>Lista de Repositorios</h1>
      <ul>
        <RepositoryItem
          repository="unform2"
          description="test"
          link="https://rocketseat.com"
        />
      </ul>
    </section>
  );
}

export default RepositoryList;
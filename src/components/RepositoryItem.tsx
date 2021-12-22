interface IRepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

function RepositoryItem({
  repository
}: IRepositoryItemProps) {
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description}</p>
      <a href={repository?.html_url}></a>
    </li>
  )
}

export default RepositoryItem

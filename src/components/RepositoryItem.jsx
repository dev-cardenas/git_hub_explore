
function RepositoryItem({
  repository,
  description,
  link
}) {
  return (
    <li>
      <strong>{repository ?? 'Default'}</strong>
      <p>{description}</p>
      <a href={link}></a>
    </li>
  )
}

export default RepositoryItem

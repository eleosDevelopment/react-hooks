import { useFetch } from "../useFetch.js";

export function FetchComp({ login }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );
  if(loading) return <h1>loading...</h1>
  if(error)
    return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
    )
  return (
    <div>
      <h2>{data.login}</h2>
      <p>{data.name}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data.avatar_url} alt={data.login} />
    </div>
  )
}

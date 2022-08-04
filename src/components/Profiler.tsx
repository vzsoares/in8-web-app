import useSWR from "swr";

export default function Profiler() {
  const { data, error } = useSWR("http://localhost:3001/", (apiURL: string) =>
    fetch(apiURL).then((res) => res.json())
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <>{data.name}!</>;
}

import useSWR from "swr";

export default function Profiler() {
  const { data, error } = useSWR(
    "http://localhost:4000/api/users",
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <>{JSON.stringify(data)}</>;
}

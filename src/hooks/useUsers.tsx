import useSWR from "swr";

export default function useUsers() {
  const URL = "http://localhost:4000/api/users";
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(URL, fetcher, { refreshInterval: 1000 });

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function usePost() {
  // const [user, setUser] = useState();
  const { data, error } = useSWR("/api/posts/list", fetcher);
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      console.log(data);
    }
  }, [data, router]);

  return data;
}

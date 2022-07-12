import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useUser() {
  // const [user, setUser] = useState();
  const { data, error } = useSWR("/api/users/me", fetcher);
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/create-account");
    }
  }, [data, router]);

  return data;
}

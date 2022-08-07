import { createContext, useContext, useMemo } from "react";
import { User } from "../models/User";

const defaultValue = { postUser: async (data: User) => 0 };

const AppCtx = createContext(defaultValue);

function AppCtxProvider({ children }: { children: JSX.Element }) {
  function postUser(data: User) {
    const URL = "http://localhost:4000/api/users";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = fetch(URL, requestOptions)
      .then((r) => r.status)
      .catch(() => 400);

    return response;
  }

  const data = useMemo(() => {
    return { postUser };
  }, []);
  return <AppCtx.Provider value={data}>{children}</AppCtx.Provider>;
}

function useAppCtx() {
  return useContext(AppCtx);
}

export { AppCtxProvider, useAppCtx };

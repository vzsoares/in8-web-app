import { createContext, useContext, useMemo } from "react";
import { User } from "../models/User";

const defaultValue = { putUser: async (data: User) => {} };

const AppCtx = createContext(defaultValue);

function AppCtxProvider({ children }: { children: JSX.Element }) {
  async function putUser(data: User) {
    const URL = "http://localhost:4000/api/users";
    console.log(JSON.stringify(data));

    const response = await fetch(URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ test: 123 }),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json;charset=UTF-8",
      },
    });
    console.log(response);

    // return response.json() ?? "";
  }

  const data = useMemo(() => {
    return { putUser };
  }, []);
  return <AppCtx.Provider value={data}>{children}</AppCtx.Provider>;
}

function useAppCtx() {
  return useContext(AppCtx);
}

export { AppCtxProvider, useAppCtx };

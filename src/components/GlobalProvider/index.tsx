import React from "react"

export interface IGlobalInfoCtx<T = any> {
  globalInfo: T;
  updateGlobalInfo: (next: Partial<T> | ((prevStates: T) => Partial<T>)) => void;
}

export interface IGlobalInfoProviderProps {
  initState: Record<string, any>;
}

export const GlobalInfoCtx = React.createContext({} as IGlobalInfoCtx)

export const GlobalInfoProvider = (props: React.PropsWithChildren<IGlobalInfoProviderProps>) => {
  const { initState, children } = props;
  const [globalInfo, setGlobalInfo] = React.useState(initState || {});

  const updateGlobalInfo: IGlobalInfoCtx['updateGlobalInfo'] = next => {
    if (typeof next === 'function') {
      setGlobalInfo((prevStates: Record<string, any>) => ({
        ...prevStates,
        ...next(prevStates as any),
      }));
    } else setGlobalInfo((prevStates: Record<string, any>) => ({ ...prevStates, ...next }));
  };

  return <GlobalInfoCtx.Provider value={{ globalInfo, updateGlobalInfo }}>{children}</GlobalInfoCtx.Provider>;
};

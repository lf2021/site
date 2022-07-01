import React from "react"
import type { IGlobalInfoCtx, IGlobalInfoProviderProps, IInitState } from "./type";

export const GlobalInfoCtx = React.createContext({} as IGlobalInfoCtx)

export const GlobalInfoProvider = (props: React.PropsWithChildren<IGlobalInfoProviderProps>) => {
  const { initState, children } = props;
  const [globalInfo, setGlobalInfo] = React.useState<IInitState>(initState || {});

  const updateGlobalInfo: IGlobalInfoCtx['updateGlobalInfo'] = next => {
    if (typeof next === 'function') {
      setGlobalInfo((prevStates: IInitState) => ({
        ...prevStates,
        ...next(prevStates as any),
      }));
    } else setGlobalInfo((prevStates: IInitState) => ({ ...prevStates, ...next }));
  };

  return <GlobalInfoCtx.Provider value={{ globalInfo, updateGlobalInfo }}>{children}</GlobalInfoCtx.Provider>;
};

export interface IGlobalInfoCtx {
  globalInfo: IInitState;
  updateGlobalInfo: (next: Partial<IInitState> | ((prevStates: IInitState) => Partial<IInitState>)) => void;
}

export type IInitState = {
  navKey: string;
};
export interface IGlobalInfoProviderProps {
  initState: IInitState;
}

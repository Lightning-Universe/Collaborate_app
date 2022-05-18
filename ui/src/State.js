import { useCallback, useEffect, useState } from "react";
import apiClient from "./API";

export const useLightningState = () => {
  const [state, setState] = useState(null);

  const refreshState = useCallback(() => {
    apiClient.getState().then(setState);
  }, []);

  useEffect(() => {
    refreshState();
  }, [refreshState]);

  return { state, refreshState };
};

import React from "react";
import App from "./App";
import { useAuth } from "./hooks/use-auth";

export const AppStore = () => {
  const { state } = useAuth();

  if (state.initializing) {
    return <div>InitLoading...</div>;
  }
  return <App />;
};

import React from "react";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";
import { useAuth } from "./hooks/use-auth";

export const AppStore = () => {
  const { state } = useAuth();

  if (state.initializing) {
    return <div>InitLoading...</div>;
  }
  return (
    <ToastProvider autoDismissTimeout={3000} placement="bottom-left">
      <App />
    </ToastProvider>
  );
};

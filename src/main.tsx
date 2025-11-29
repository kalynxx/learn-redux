import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    // the App component is wrapped in a redux store provider, so that the entire
    // application has access to the global store.
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

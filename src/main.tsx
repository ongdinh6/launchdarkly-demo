import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "@/app/store.ts";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: "clientSideID"
  });

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <LDProvider>
          <App />
        </LDProvider>
      </Provider>
    </StrictMode>
  );
})();



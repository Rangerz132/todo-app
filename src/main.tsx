import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store";
import ThemeContextProvider from "./contexts/ThemeContext.tsx";
import TaskFilterContextProvider from "./contexts/TaskFilterContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <TaskFilterContextProvider>
          <App />
        </TaskFilterContextProvider>
      </ThemeContextProvider>
    </Provider>
  </StrictMode>
);

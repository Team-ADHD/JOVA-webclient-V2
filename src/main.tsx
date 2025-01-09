import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ProfilProvider } from "./context/context.tsx";
import { UserProvider } from "./context/loginContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserProvider>
      <ProfilProvider>
        <App />
      </ProfilProvider>
    </UserProvider>
  </BrowserRouter>
);

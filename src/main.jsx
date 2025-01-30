import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import AuthProvider from "./Auth/AuthProvider";
import ThemeContext from "./Components/ThemeContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeContext>
        <RouterProvider router={router}></RouterProvider>
      </ThemeContext>
    </AuthProvider>
  </StrictMode>
);

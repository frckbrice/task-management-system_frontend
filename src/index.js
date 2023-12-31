import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="406422802452-7hvk8l96vt3p0vv7o90ho5lihpgmpg34.apps.googleusercontent.com">
    {/* <React.StrictMode> */}
     <Toaster position="top-right" reverseOrder={false} />
     
        <App />
    
    {/* </React.StrictMode> */}
  </GoogleOAuthProvider>
);

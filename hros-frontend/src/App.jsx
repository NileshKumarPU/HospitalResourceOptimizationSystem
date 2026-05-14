// src/App.jsx

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { Analytics } from "@vercel/analytics/next"
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
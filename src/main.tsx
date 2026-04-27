import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { registerServiceWorker } from "./lib/registerServiceWorker";
import { initButtonTracking } from "./lib/buttonTracking";

createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for PWA support
registerServiceWorker();

// Initialize sitewide button-press tracking
initButtonTracking();

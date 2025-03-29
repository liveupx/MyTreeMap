
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react";
import App from './App.tsx'
import './index.css'

// Initialize Sentry for error tracking
// In production, use your actual Sentry DSN
Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0", // This is a placeholder DSN
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay(),
  ],
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring
  tracesSampleRate: 1.0,
  // Set replaysSessionSampleRate to 0.1 to capture 10% of sessions
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  environment: import.meta.env.MODE,
});

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <Sentry.ErrorBoundary fallback={<p>An error has occurred. Our team has been notified.</p>}>
      <App />
    </Sentry.ErrorBoundary>
  );
}

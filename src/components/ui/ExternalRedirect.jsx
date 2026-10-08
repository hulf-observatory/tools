import { useEffect } from 'react';

// Client-side redirect to another site (React Router's <Navigate> only handles in-app paths).
// replace(), so the old URL doesn't stay in the back-button history.
export default function ExternalRedirect({ to }) {
  useEffect(() => { window.location.replace(to); }, [to]);
  return (
    <main className="content-main">
      <p>Moving you to <a href={to}>{to}</a>…</p>
    </main>
  );
}

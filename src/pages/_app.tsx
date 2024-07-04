// pages/_app.tsx
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

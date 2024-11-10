import '@/styles/globals.css'
import { AuthProvider } from '@/hooks/authContext';

export default function App({ Component, pageProps }) {

  return (
    <main>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </main>
  )
}
import '@/styles/globals.scss';
import '@/styles/animation.scss';
import Auth from '@/components/auth';
import { UserProvider } from '@/contexts/user.context';
export default function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Auth>
                <Component {...pageProps} />
            </Auth>
        </UserProvider>
    );
}

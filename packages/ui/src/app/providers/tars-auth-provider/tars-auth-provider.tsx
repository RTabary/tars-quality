import { useAuth } from 'react-oauth2-pkce';

/* eslint-disable-next-line */
export interface TarsAuthProviderProps {
  children: JSX.Element;
}

export function TarsAuthProvider({
  children,
}: TarsAuthProviderProps): JSX.Element {
  const { authService } = useAuth();

  if (authService.isPending()) {
    return (
      <div>
        <div>Loading ...</div>
        <div>
          (if this page is not charging, please remove all your session storage,
          local storage, and cookies on your brower for this website and reload
          page)
        </div>
        <a
          href="https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to clean localstorage
        </a>
      </div>
    );
  }

  if (
    !authService.isAuthenticated() ||
    (authService.getAuthTokens().expires_at || 1) < new Date().getTime()
  ) {
    authService.authorize();
    return <h1>Not logged</h1>;
  }

  return children;
}

export default TarsAuthProvider;

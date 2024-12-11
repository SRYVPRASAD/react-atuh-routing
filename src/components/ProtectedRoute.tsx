import { ReactNode, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import LoginDialog from './LoginDialog';
interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuthStore();
  const [showLoginDialog, setShowLoginDialog] = useState(!isAuthenticated);
  const location = useLocation();

  // Render the protected content if authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // If not authenticated, show the dialog
  return (
    <>
      {showLoginDialog && (
        <LoginDialog
          isOpen={showLoginDialog}
          onClose={() => {
            setShowLoginDialog(false);

            // Redirect to home only if the user cancels the login
            if (!isAuthenticated) {
              window.location.href = '/'; // Redirect programmatically
            }
          }}
          redirectPath={location.pathname}
        />
      )}
    </>
  );
}

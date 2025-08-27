import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";
import Header from "./components/Header";

const StudentHome = React.lazy(() => import("./components/StudentHome"));
const SocietyPage = React.lazy(() => import("./components/SocietyPage"));
const AdminDashboard = React.lazy(() => import("./components/AdminDashboard"));

const AppContent = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Login />;

  if (user.role === "student") return <StudentHome />;
  if (user.role === "society") return <SocietyPage />;
  if (user.role === "admin") return <AdminDashboard />;

  return <Login />;
};

const App = () => (
  <AuthProvider>
    <Header />
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppContent />
    </React.Suspense>
  </AuthProvider>
);

export default App;

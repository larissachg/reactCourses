import { AuthProvider } from "./authentication";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  );
};

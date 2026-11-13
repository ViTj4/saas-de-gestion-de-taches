import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import TextLink from "@/components/TextLink";
import { ROUTES } from "@/lib/constants";

export const metadata = {
  title: "Connexion",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <AuthLayout
      title="Connexion"
      imageSrc="/images/connexion.jpg"
      footer={
        <>
          <span>Pas encore de compte ?</span>
          <TextLink href={ROUTES.signUp}>Créer un compte</TextLink>
        </>
      }
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}

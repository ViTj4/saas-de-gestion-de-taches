import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import TextLink from "@/components/TextLink";
import { ROUTES } from "@/lib/constants";

export const metadata = {
  title: "Inscription",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Inscription"
      imageSrc="/images/register.jpg"
      footer={
        <>
          <span>Déjà inscrit ?</span>
          <TextLink href={ROUTES.signIn}>Se connecter</TextLink>
        </>
      }
    >
      <AuthForm mode="register" />
    </AuthLayout>
  );
}

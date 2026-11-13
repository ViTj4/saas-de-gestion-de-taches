"use client";

import { useState } from "react";
import Button from "@/components/Button";
import FormField from "@/components/FormField";

function getFieldError(field) {
  if (field.validity.valueMissing) {
    return field.name === "email"
      ? "Renseignez votre adresse email."
      : "Renseignez votre mot de passe.";
  }

  if (field.validity.typeMismatch) {
    return "Renseignez une adresse email valide, par exemple nom@exemple.fr.";
  }

  return "";
}

export default function AuthForm({ mode }) {
  const isSignUp = mode === "register";
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  const errorSummary = Object.values(errors).filter(Boolean).join(" ");
  const formId = isSignUp ? "register" : "login";

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = [
      form.elements.namedItem("email"),
      form.elements.namedItem("password"),
    ];
    const nextErrors = Object.fromEntries(
      fields.map((field) => [field.name, getFieldError(field)]),
    );
    setErrors(nextErrors);
    setNotice("");

    const firstInvalidField = fields.find((field) => nextErrors[field.name]);
    if (firstInvalidField) {
      // Wait for React to attach the error descriptions before moving focus.
      requestAnimationFrame(() => firstInvalidField.focus());
      return;
    }

    // No credentials are saved or sent until the authentication API is connected.
    setNotice(
      isSignUp
        ? "La création de compte n’est pas encore disponible."
        : "La connexion n’est pas encore disponible.",
    );
  }

  function handleChange(event) {
    const field = event.target;
    if (notice) setNotice("");
    if (errors[field.name] && field.validity.valid) {
      setErrors((previous) => ({ ...previous, [field.name]: "" }));
    }
  }

  function handleForgotPassword() {
    setNotice(
      "La réinitialisation du mot de passe n’est pas encore disponible.",
    );
  }

  return (
    <form
      noValidate
      method="post"
      onSubmit={handleSubmit}
      onChange={handleChange}
      aria-labelledby="auth-title"
    >
      <p className="sr-only">Tous les champs sont obligatoires.</p>
      <p role="alert" aria-atomic="true" className="sr-only">
        {errorSummary}
      </p>

      <div className="flex flex-col gap-7">
        <FormField
          id={`${formId}-email`}
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          required
          error={errors.email}
        />
        <FormField
          id={`${formId}-password`}
          name="password"
          type="password"
          label="Mot de passe"
          autoComplete={isSignUp ? "new-password" : "current-password"}
          required
          error={errors.password}
        />
      </div>

      <div className="mt-7 flex justify-center">
        <Button type="submit" className="w-full max-w-[15.5rem]">
          {isSignUp ? "S’inscrire" : "Se connecter"}
        </Button>
      </div>

      {!isSignUp && (
        <div className="mt-2 flex justify-center">
          <Button variant="link" onClick={handleForgotPassword}>
            Mot de passe oublié ?
          </Button>
        </div>
      )}

      <p
        role="status"
        aria-atomic="true"
        className={notice ? "mt-4 text-center text-sm leading-6" : undefined}
      >
        {notice}
      </p>
    </form>
  );
}

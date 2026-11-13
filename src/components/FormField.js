import { cn } from "@/lib/utils";

export default function FormField({
  id,
  label,
  error,
  description,
  required = false,
  className,
  inputClassName,
  "aria-describedby": describedBy,
  ...inputProps
}) {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const relatedIds = [describedBy, descriptionId, errorId]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm leading-5 font-medium">
        {label}
        {required && (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (obligatoire)</span>
          </>
        )}
      </label>
      <input
        {...inputProps}
        id={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={relatedIds || undefined}
        className={cn(
          "min-h-[3.375rem] w-full min-w-0 rounded-sm border bg-white px-3 py-3 text-base leading-6 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:bg-gray-100",
          error ? "border-error" : "border-input-border",
          inputClassName,
        )}
      />
      {description && (
        <p id={descriptionId} className="text-sm leading-5">
          {description}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-sm leading-5 text-error">
          {error}
        </p>
      )}
    </div>
  );
}

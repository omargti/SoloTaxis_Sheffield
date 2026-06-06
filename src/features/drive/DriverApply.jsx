import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "../../shared/ui/button";
import { BRAND_NAME, DRIVER_APPLY_EMAIL, PHONE_DISPLAY, PHONE_RAW } from "../../shared/constants/brand";
import { submitDriverApplication } from "../../shared/utils/submitDriverApplication";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  phone: "",
  postcode: "",
  address: "",
  licenceNumber: "",
  vehicleMakeModel: "",
  vehicleRegistration: "",
  availability: "",
  experienceYears: "",
  message: "",
  consent: false,
  website: "",
};

const AVAILABILITY_OPTIONS = [
  { value: "", label: "Select availability" },
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Weekends", label: "Weekends only" },
  { value: "Evenings", label: "Evenings & nights" },
  { value: "Flexible", label: "Flexible / as needed" },
];

const EXPERIENCE_OPTIONS = [
  { value: "", label: "Select experience" },
  { value: "New to the trade", label: "New to the trade" },
  { value: "Less than 1 year", label: "Less than 1 year" },
  { value: "1–3 years", label: "1–3 years" },
  { value: "3–5 years", label: "3–5 years" },
  { value: "5+ years", label: "5+ years" },
];

function Field({ id, label, required, error, children }) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="form-required" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function validate(form) {
  const errors = {};

  if (!form.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!form.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.phone.trim()) errors.phone = "Enter your phone number.";
  if (!form.postcode.trim()) errors.postcode = "Enter your postcode.";
  if (!form.licenceNumber.trim()) errors.licenceNumber = "Enter your licence number.";
  if (!form.vehicleMakeModel.trim()) errors.vehicleMakeModel = "Enter your vehicle make and model.";
  if (!form.vehicleRegistration.trim()) errors.vehicleRegistration = "Enter your vehicle registration.";
  if (!form.availability) errors.availability = "Select your availability.";
  if (!form.experienceYears) errors.experienceYears = "Select your driving experience.";
  if (!form.consent) errors.consent = "You must agree before submitting.";

  return errors;
}

export default function DriverApply() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const update = (field) => (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.website) return;

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      await submitDriverApplication(form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
      setSubmitError(error.message || "Something went wrong. Please try again or call us.");
    }
  };

  if (status === "success") {
    return (
      <main className="form-page">
        <div className="form-page__inner">
          <div className="form-success card-elevated">
            <div className="form-success__icon" aria-hidden="true">
              <Icon icon="ph:check-circle-fill" width={40} />
            </div>
            <h1 className="section-heading text-2xl sm:text-3xl mb-3">Application sent</h1>
            <p className="form-page__intro mb-6">
              Thank you for applying to drive with {BRAND_NAME}. We have received your details and
              will review your application shortly. Our team will contact you at the email or phone
              number you provided.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/" className="btn-secondary inline-flex items-center justify-center gap-2 !min-h-[44px] !px-5">
                Back to home
              </Link>
              <Button
                onClick={() => setStatus("idle")}
                className="btn-primary !min-h-[44px] !px-5"
              >
                Submit another application
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="form-page">
      <div className="form-page__inner">
        <header className="form-page__header">
          <span className="section-eyebrow mb-3">
            <Icon icon="ph:steering-wheel" width={12} aria-hidden="true" />
            Join our team
          </span>
          <h1 className="section-heading text-2xl sm:text-3xl mb-2">Join our team</h1>
          <p className="form-page__intro">
            Join {BRAND_NAME} as a licensed driver partner in Sheffield. Complete the form below and
            we will email your application to our driver team at{" "}
            <a href={`mailto:${DRIVER_APPLY_EMAIL}`} className="form-page__link">
              {DRIVER_APPLY_EMAIL}
            </a>
            . You can also call{" "}
            <a href={`tel:${PHONE_RAW}`} className="form-page__link">
              {PHONE_DISPLAY}
            </a>{" "}
            if you have questions.
          </p>
        </header>

        <form className="driver-form card-elevated" onSubmit={handleSubmit} noValidate>
          <fieldset className="driver-form__section">
            <legend className="driver-form__legend">Personal details</legend>
            <div className="driver-form__grid">
              <Field id="fullName" label="Full name" required error={errors.fullName}>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  className={`form-input ${errors.fullName ? "form-input--error" : ""}`}
                  value={form.fullName}
                  onChange={update("fullName")}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
              </Field>

              <Field id="email" label="Email address" required error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`form-input ${errors.email ? "form-input--error" : ""}`}
                  value={form.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                />
              </Field>

              <Field id="phone" label="Phone number" required error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={`form-input ${errors.phone ? "form-input--error" : ""}`}
                  value={form.phone}
                  onChange={update("phone")}
                  aria-invalid={Boolean(errors.phone)}
                />
              </Field>

              <Field id="postcode" label="Postcode" required error={errors.postcode}>
                <input
                  id="postcode"
                  name="postcode"
                  type="text"
                  autoComplete="postal-code"
                  className={`form-input ${errors.postcode ? "form-input--error" : ""}`}
                  value={form.postcode}
                  onChange={update("postcode")}
                  aria-invalid={Boolean(errors.postcode)}
                />
              </Field>
            </div>

            <Field id="address" label="Home address" error={errors.address}>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                className="form-input"
                value={form.address}
                onChange={update("address")}
              />
            </Field>
          </fieldset>

          <fieldset className="driver-form__section">
            <legend className="driver-form__legend">Licence &amp; vehicle</legend>
            <div className="driver-form__grid">
              <Field id="licenceNumber" label="Private hire / taxi licence number" required error={errors.licenceNumber}>
                <input
                  id="licenceNumber"
                  name="licenceNumber"
                  type="text"
                  className={`form-input ${errors.licenceNumber ? "form-input--error" : ""}`}
                  value={form.licenceNumber}
                  onChange={update("licenceNumber")}
                  aria-invalid={Boolean(errors.licenceNumber)}
                />
              </Field>

              <Field id="vehicleRegistration" label="Vehicle registration" required error={errors.vehicleRegistration}>
                <input
                  id="vehicleRegistration"
                  name="vehicleRegistration"
                  type="text"
                  autoComplete="off"
                  className={`form-input ${errors.vehicleRegistration ? "form-input--error" : ""}`}
                  value={form.vehicleRegistration}
                  onChange={update("vehicleRegistration")}
                  aria-invalid={Boolean(errors.vehicleRegistration)}
                />
              </Field>
            </div>

            <Field id="vehicleMakeModel" label="Vehicle make &amp; model" required error={errors.vehicleMakeModel}>
              <input
                id="vehicleMakeModel"
                name="vehicleMakeModel"
                type="text"
                placeholder="e.g. Toyota Prius"
                className={`form-input ${errors.vehicleMakeModel ? "form-input--error" : ""}`}
                value={form.vehicleMakeModel}
                onChange={update("vehicleMakeModel")}
                aria-invalid={Boolean(errors.vehicleMakeModel)}
              />
            </Field>
          </fieldset>

          <fieldset className="driver-form__section">
            <legend className="driver-form__legend">Availability &amp; experience</legend>
            <div className="driver-form__grid">
              <Field id="availability" label="Availability" required error={errors.availability}>
                <select
                  id="availability"
                  name="availability"
                  className={`form-input form-select ${errors.availability ? "form-input--error" : ""}`}
                  value={form.availability}
                  onChange={update("availability")}
                  aria-invalid={Boolean(errors.availability)}
                >
                  {AVAILABILITY_OPTIONS.map((option) => (
                    <option key={option.value || "placeholder"} value={option.value} disabled={!option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field id="experienceYears" label="Driving experience" required error={errors.experienceYears}>
                <select
                  id="experienceYears"
                  name="experienceYears"
                  className={`form-input form-select ${errors.experienceYears ? "form-input--error" : ""}`}
                  value={form.experienceYears}
                  onChange={update("experienceYears")}
                  aria-invalid={Boolean(errors.experienceYears)}
                >
                  {EXPERIENCE_OPTIONS.map((option) => (
                    <option key={option.value || "placeholder"} value={option.value} disabled={!option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field id="message" label="Additional information" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="form-input form-textarea"
                placeholder="Tell us about your experience, preferred areas, or any questions."
                value={form.message}
                onChange={update("message")}
              />
            </Field>
          </fieldset>

          <div className="form-field">
            <label className="form-checkbox">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={update("consent")}
                aria-invalid={Boolean(errors.consent)}
              />
              <span>
                I agree that {BRAND_NAME} may contact me about this application and process my
                details in line with the{" "}
                <Link to="/privacy" className="form-page__link">
                  privacy policy
                </Link>
                .
              </span>
            </label>
            {errors.consent && (
              <p className="form-error" role="alert">
                {errors.consent}
              </p>
            )}
          </div>

          <input
            type="text"
            name="website"
            value={form.website}
            onChange={update("website")}
            tabIndex={-1}
            autoComplete="off"
            className="form-honeypot"
            aria-hidden="true"
          />

          {submitError && (
            <p className="form-banner form-banner--error" role="alert">
              <Icon icon="ph:warning-circle-fill" width={18} aria-hidden="true" />
              {submitError}
            </p>
          )}

          <div className="driver-form__actions">
            <Button
              type="submit"
              loading={status === "submitting"}
              disabled={status === "submitting"}
              icon="ph:paper-plane-tilt-fill"
              className="btn-primary w-full sm:w-auto !min-h-[44px] !px-8"
            >
              Submit application
            </Button>
            <p className="form-page__note">
              Applications are sent securely to {DRIVER_APPLY_EMAIL}.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

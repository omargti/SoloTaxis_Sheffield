import { Icon } from "@iconify/react";
import { AppSection } from "../landing/RideandAppSection";
import { BRAND_NAME } from "../../shared/constants/brand";

export default function App() {
  return (
    <main className="bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-2">
        <span className="section-eyebrow mb-3">
          <Icon icon="ph:device-mobile" width={12} aria-hidden="true" />
          Mobile app
        </span>
        <h1 className="section-heading text-2xl sm:text-3xl mb-2">Download app</h1>
        <p className="form-page__intro max-w-2xl">
          Get the {BRAND_NAME} app on iOS and Android. Book rides in seconds, track your driver
          in real time, and pay your way.
        </p>
      </div>
      <AppSection />
    </main>
  );
}

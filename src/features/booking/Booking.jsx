import { BRAND_NAME, PHONE_DISPLAY, PHONE_RAW } from "../../shared/constants/brand";

const BOOKING_URL =
  "https://live2.taxicaller.net/liveview.php?cid=54849&ll=-2.329255916183742%2C53.30587494799943&z=8";

export default function Booking() {
  return (
    <main className="booking-page">
      <div className="booking-page__header">
        <span className="section-eyebrow mb-3">Book a ride</span>
        <h1 className="section-heading text-2xl sm:text-3xl mb-2">Book online</h1>
        <p className="booking-page__intro">
          Enter your pickup and destination below, or call us on{" "}
          <a href={`tel:${PHONE_RAW}`} className="booking-page__phone">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>

      <div className="booking-page__frame-wrap">
        <iframe
          className="booking-page__frame"
          src={BOOKING_URL}
          title={`${BRAND_NAME} online booking`}
          loading="eager"
          allow="geolocation"
        />
      </div>
    </main>
  );
}

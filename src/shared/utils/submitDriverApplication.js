import { DRIVER_APPLY_EMAIL, DRIVER_FORM_ENDPOINT } from "../constants/brand";

export function submitDriverApplication(data) {
  const payload = {
    name: data.fullName,
    email: data.email,
    phone: data.phone,
    postcode: data.postcode,
    address: data.address || "Not provided",
    licence_number: data.licenceNumber,
    vehicle: data.vehicleMakeModel,
    vehicle_registration: data.vehicleRegistration,
    availability: data.availability,
    experience_years: data.experienceYears,
    message: data.message || "Not provided",
    _subject: `New driver application — ${data.fullName}`,
    _template: "table",
    _captcha: "false",
  };

  return fetch(DRIVER_FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  }).then(async (response) => {
    const body = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(body.message || "Unable to send your application. Please try again.");
    }

    return { to: DRIVER_APPLY_EMAIL, ...body };
  });
}

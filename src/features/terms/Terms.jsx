import { useState, useRef, useEffect } from "react";

/* ─── Data ────────────────────────────────────────────────────────────── */
const NAV_SECTIONS = [
  { id: "who-we-are",       label: "Who We Are" },
  { id: "booking-services", label: "Booking Services" },
  { id: "app-booking",      label: "App Booking" },
  { id: "payments",         label: "Payments" },
  { id: "your-journey",     label: "Your Journey" },
  { id: "liability",        label: "Liability" },
  { id: "legal-rights",     label: "Legal Rights" },
  { id: "privacy",          label: "Privacy" },
  { id: "other-terms",      label: "Other Terms" },
  { id: "law-disputes",     label: "Law & Disputes" },
  { id: "schedule",         label: "Schedule 1" },
];

const CONTENT = [
  {
    id: "who-we-are",
    heading: "Who We Are",
    clauses: [
      { num: "1", text: "These terms and conditions apply when you use our booking service in connection with a Private Hire journey. The booking service is provided to you by Solo Taxis, a licensed private-hire operator in Sheffield. Transportation will be provided by a licensed Driver Partner with whom you will have a direct contract for the journey." },
      { num: "2", text: 'Solo Taxis is registered at Unit 9 Twelve O\'Clock Court, 21 Attercliffe Road, Sheffield, England, S4 7WW and is referred to as "us", "we" and "our".' },
      { num: "3", text: "All telephone calls, including when you call to make a booking, are recorded for training, regulatory and compliance and monitoring purposes." },
      { num: "4", text: "If you have opened a corporate account with Solo, or if you take a journey using that account, separate terms and conditions will apply and you should refer to the account holder for details." },
    ],
  },
  {
    id: "booking-services",
    heading: "Our Booking Services to You",
    clauses: [
      { num: "1", text: "We provide booking services in our capacity as a licensed private-hire operator from our licensed premises in Sheffield, subject to all statutory and regulatory obligations and liabilities." },
      { num: "2", text: "These terms apply when you use our Booking Service via our booking application(s), telephone number(s), website(s), social media platform(s), or dedicated taxi booking mobile device(s)." },
      { num: "3", text: "Our Booking Service includes: (a) processing the detail of your booking; (b) seeking to source a Driver Partner; (c) introducing you to an available Driver Partner; (d) keeping records of bookings; (e) remotely monitoring journeys; (f) receiving and dealing with feedback, questions and complaints; and (g) helping you trace lost property." },
      { num: "4", text: "After a booking is placed, we will co-ordinate with a Driver Partner. If and when a Driver Partner takes up the booking, you will receive notification with confirmation of the Driver Partner's name, vehicle type and registration number." },
      { num: "5", text: "In legal terms, the contract for transportation services is made between you and the Driver Partner at pick-up. Solo acts as a disclosed introducer. Driver Partners are not employees nor workers of Solo; they are self-employed individuals." },
      { num: "6", text: "We do not provide transportation services under these T&Cs. We provide a Booking Service introducing potential passengers to available drivers. All transportation services are provided by independent, licensed Driver Partners." },
    ],
  },
  {
    id: "app-booking",
    heading: "Placing a Booking via Our App",
    clauses: [
      { num: "9", text: "Our booking application is made available to you by us. While we make every effort to ensure availability, we do not warrant its continued availability at all times or uninterrupted use. We reserve the right to suspend or cease operation of our application at our sole discretion." },
      { num: "10", text: "As a condition of use, you agree: (a) not to use our application for any unlawful purpose; (b) not to misuse our application (including by hacking, reverse engineering or 'scraping'); and (c) not to defame or disparage anybody or use our application in an obscene, derogatory or offensive manner." },
      { num: "11", text: "We reserve the right to prevent or suspend your access to our application if you do not comply with any part of these terms or any applicable law." },
    ],
  },
  {
    id: "payments",
    heading: "Payments",
    clauses: [
      { num: "12", text: "Our Booking Services are provided to you free of charge, save to the extent we may from time to time apply a Booking Fee arrangement on terms notified to you before the booking." },
      { num: "13", text: "Any fare estimates given at the time of placing your booking are estimates only. Estimates may not reflect variations due to area, time of day/night, traffic delays or other factors which may impact actual times or fares." },
      { num: "14", text: "Actual fares may vary and shall be calculated according to the applicable tariff for the journey in that area at that time of day/night. Additional costs may be payable where your journey involves car park charges, tolls, wait times or extras." },
      { num: "15", text: "Additional costs may be payable where your journey requires a specialist vehicle. If you require a specialist vehicle by reason of a registered disability, the additional charge shall not apply." },
      { num: "16", text: "Digital promotional offers or gifts are only valid for future journeys booked via our application and paid by pre-registered credit card. Such offers are non-refundable, non-transferable and must be used within the specified time period." },
      { num: "18", text: "If you pre-register your credit or debit card, a pre-authorisation transaction may result in a temporary hold of up to £1.01 by your card issuer. This is not a permanent charge and funds will be released within 3–10 working days.", highlight: true },
    ],
  },
  {
    id: "your-journey",
    heading: "Your Journey",
    clauses: [
      { num: "24", text: "Any pickup time or journey time provided to you are estimates only. We do not accept any liability for: (a) the late arrival of the private hire vehicle at the pickup location; (b) the late or non-arrival at the end destination; or (c) the non-arrival of the private hire vehicle at the pickup location.", highlight: true },
      { num: "25", text: "We strongly recommend that all bookings for journeys to time critical events are made for the arrival of the vehicle at least two hours earlier than required." },
      { num: "26", text: "Before making a journey it is your responsibility to verify the journey route and assess whether there are any known issues which may impact likely arrival or journey time. Be mindful of adverse weather, traffic, roadworks or other unplanned issues." },
      { num: "27", text: "If you require any adjustments to your travel due to a protected characteristic (e.g., disability), please provide relevant information prior to your journey. If your disability requires a specialist vehicle or an assistance dog, additional costs will not apply to you." },
      { num: "28", text: "We will use reasonable endeavours to ensure that any lost property found by Driver Partners will be handled in accordance with our lost property process. We do not accept any liability for the loss or destruction of any such property." },
    ],
  },
  {
    id: "liability",
    heading: "Our Liability to You",
    clauses: [
      { num: "30", text: "We are committed to providing an efficient Booking Service. When something goes wrong we need you to tell us about it. This will give us the opportunity to put things right and improve our service for future users." },
      { num: "32", text: "We are responsible to you for foreseeable loss and damage caused by us arising out of our performance of the Booking Services only. We are not responsible for any loss or damage that is not foreseeable." },
      { num: "33", text: "We are not liable for any losses or damage caused to you by private-hire drivers, Hackney carriage drivers, or other third parties." },
      { num: "34", text: "If Solo is liable to you in connection with the Booking Services, its liability will be limited to an amount equal to £150.00 in aggregate.", highlight: true },
      { num: "35", text: "We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, and for breach of your legal rights." },
      { num: "36", text: "We are not liable for business losses. We only supply the services for domestic and private use. If you use our services for any commercial, business or re-sale purpose we will have no liability to you for any loss of profit or business interruption." },
    ],
  },
  {
    id: "legal-rights",
    heading: "Summary of Your Key Legal Rights",
    clauses: [
      { num: "37", text: "We are under a legal duty to provide the Booking Services with reasonable care and skill. If you are not satisfied, you can ask us to repeat or fix the service. As we do not charge for our Booking Services there is no right to a refund." },
    ],
  },
  {
    id: "privacy",
    heading: "How We May Use Your Personal Information",
    clauses: [
      { num: "38", text: "We will only use your personal information as set out in our Privacy Policy." },
    ],
  },
  {
    id: "other-terms",
    heading: "Other Important Terms",
    clauses: [
      { num: "39", text: "We may transfer our rights and obligations under these terms to another organisation. We will always tell you in writing if this happens and we will ensure that the transfer will not affect your rights under the contract." },
      { num: "40", text: "This contract is between you and us. No other person shall have any rights to enforce any of its terms. We are not party to the contract that you enter into with the Driver Partner for transportation services." },
      { num: "41", text: "Each of the paragraphs of these terms operates separately. If any court or relevant authority decides that any of them are unlawful, the remaining paragraphs will remain in full force and effect." },
      { num: "42", text: "If we do not insist immediately that you do anything you are required to do under these terms, or if we delay in taking steps against you in respect of your breaking this contract, that will not prevent us taking steps against you at a later date." },
    ],
  },
  {
    id: "law-disputes",
    heading: "Law & Disputes",
    clauses: [
      { num: "43", text: "These terms are governed by English & Welsh law and you can bring legal proceedings in the English & Welsh courts. If you live in Scotland or Northern Ireland, you may also bring legal proceedings in your local courts." },
      { num: "44", text: "As a licensed private-hire operator we welcome any feedback. If something goes wrong, please contact us: Email: info@solo.co.uk — Post: Solo, Unit 9 Twelve O'Clock Court, 21 Attercliffe Road, Sheffield, England, S4 7WW.", highlight: true },
    ],
  },
  {
    id: "schedule",
    heading: "Schedule 1 — Driver Partner & Passenger Terms",
    intro: "These terms and conditions are an example of the terms that could be agreed between you and a Driver Partner in relation to a journey. They are suggested for ease of contracting and shall apply save to the extent that you and the Driver Partner agree additional and/or alternative terms.",
    clauses: [
      { num: "2", label: "Commencement", text: "The contract shall come into being at the moment the Driver Partner agrees personally with the Passenger to provide the Journey and shall terminate on completion of the Journey." },
      { num: "3", label: "Driver Partner Obligations", text: "The Driver Partner shall: (3.1) provide the journey professionally with due skill, care and diligence; (3.2) comply with Local Authority Licensing Conditions and statutory road safety obligations; (3.3) charge the applicable fare as confirmed at journey end; (3.4) accept the payment method notified on the Booking." },
      { num: "4", label: "Passenger Obligations", text: "The Passenger shall: (4.1) not endanger or threaten to endanger the Driver Partner or damage their property; (4.2) comply with applicable road safety laws; (4.3) pay the fare using the payment method specified at booking; (4.4) pay additional costs (tolls, wait times, extras); (4.7) comply with health and safety requirements as notified.", highlight: true },
      { num: "5", label: "Driver Partner Status", text: "The parties acknowledge that the Driver Partner is not an employee of the Passenger or Solo and is a licensed professional driver operating on a self-employed basis." },
      { num: "6", label: "General", text: "These General Terms and Conditions constitute the entire agreement between the parties and supersede all previous agreements relating to the Journey. Governed by English Law; the Courts of England and Wales have exclusive jurisdiction." },
    ],
  },
];

/* ─── Sub-components ──────────────────────────────────────────────────── */
function ClauseItem({ num, label, text, highlight }) {
  return (
    <div
      className={[
        "flex gap-4 py-4 border-b border-(--border) last:border-0 transition-colors",
        highlight
          ? "bg-(--surface-soft) -mx-4 px-4 rounded-md border-0 mb-px"
          : "",
      ].join(" ")}
    >
      <span
        className={[
          "shrink-0 mt-0.5 w-7 h-5.5 rounded text-[11px] font-bold flex items-center justify-center leading-none tracking-wide",
          highlight
            ? "bg-(--accent) text-white"
            : "bg-(--code-bg) text-(--accent)",
        ].join(" ")}
      >
        {num}
      </span>
      <div className="min-w-0">
        {label && (
          <span className="inline-block text-[11px] font-bold tracking-[0.08em] uppercase text-(--accent) mb-1">
            {label}
          </span>
        )}
        <p className="m-0 text-[14px] leading-[1.75] text-(--text)">{text}</p>
      </div>
    </div>
  );
}

function Section({ section }) {
  return (
    <section id={section.id} className="mb-12 scroll-mt-20">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-6 bg-(--accent) rounded-full shrink-0" />
        <h2 className="m-0 text-[17px] font-bold text-(--text-b) tracking-tight font-serif">
          {section.heading}
        </h2>
      </div>

      {section.intro && (
        <p className="text-[13.5px] text-(--text) leading-[1.7] px-4 py-3 bg-(--code-bg) rounded-md border-l-[3px] border-(--accent-border) mb-4">
          {section.intro}
        </p>
      )}

      <div className="border-t border-(--border)">
        {section.clauses.map((c) => (
          <ClauseItem key={c.num} {...c} />
        ))}
      </div>
    </section>
  );
}

/* ─── Root component ──────────────────────────────────────────────────── */
export default function SoloTaxisTerms() {
  const [activeSection, setActiveSection]   = useState("who-we-are");
  const [searchQuery,   setSearchQuery]     = useState("");
  const [accepted,      setAccepted]        = useState(false);
  const [showToast,     setShowToast]       = useState(false);
  const [mobileNavOpen, setMobileNavOpen]   = useState(false);

  /* Active-section tracking */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [searchQuery]);

  const filteredContent = searchQuery.trim()
    ? CONTENT.map((section) => ({
        ...section,
        clauses: section.clauses.filter((c) =>
          c.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (c.label && c.label.toLowerCase().includes(searchQuery.toLowerCase()))
        ),
      })).filter((s) => s.clauses.length > 0)
    : CONTENT;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileNavOpen(false);
  };

  const handleAccept = () => {
    if (accepted) return;
    setAccepted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const totalClauses = CONTENT.reduce((a, s) => a + s.clauses.length, 0);
  const acceptedDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });

  /* ── Render ─────────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-(--bg) text-(--text-b) font-sans">

      {/* Toast */}
      {showToast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-9999 bg-(--accent) text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-lg whitespace-nowrap animate-[fadeDown_0.2s_ease]">
          ✓ Terms accepted — thank you
        </div>
      )}

      {/* ── Sticky header ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-(--surface-dark) border-b border-[#1e242c]">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between gap-4">

          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 bg-(--accent) rounded-lg flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-4 9H9m9 0a4 4 0 110-8 4 4 0 010 8zm0-3v-3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] font-bold text-white leading-none">Solo Taxis</p>
              <p className="text-[11px] text-[#8b949e] mt-0.5">Terms &amp; Conditions</p>
            </div>
          </div>

          {/* Search + CTA */}
          <div className="flex items-center gap-2.5">
            {/* Search input */}
            <div className="relative hidden sm:flex items-center">
              <svg className="absolute left-2.5 text-[#8b949e] pointer-events-none" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColoar" strokeWidth="2" />
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search clauses…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-(--surface-dark) border border-[#30363d] rounded-md pl-8 pr-8 py-1.5 text-[13px] text-[#e6edf3] placeholder-[#8b949e] outline-none w-48 focus:border-[rgba(196,29,36,0.6)] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 text-[#8b949e] hover:text-white transition-colors text-xs leading-none"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Accept button */}
            <button
              onClick={handleAccept}
              disabled={accepted}
              className={[
                "text-white text-[13px] font-semibold px-4 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap",
                accepted
                  ? "bg-[#238636] opacity-80 cursor-default"
                  : "bg-(--accent) hover:bg-(--accent-hover) active:scale-95 cursor-pointer",
              ].join(" ")}
            >
              {accepted ? "✓ Accepted" : "I Accept"}
            </button>

            {/* Mobile nav toggle */}
            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              className="lg:hidden text-[#8b949e] hover:text-white p-1 transition-colors"
              aria-label="Toggle navigation"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="sm:hidden px-5 pb-3">
          <div className="relative flex items-center">
            <svg className="absolute left-3 text-[#8b949e] pointer-events-none" width="13" height="13" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search clauses…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-(--surface-dark) border border-[#30363d] rounded-md pl-8 pr-8 py-1.5 text-[13px] text-[#e6edf3] placeholder-[#8b949e] outline-none"
            />
          </div>
        </div>
      </header>

      {/* ── Hero strip ────────────────────────────────────────────────── */}
      <div className="bg-(--surface-soft) border-b border-(--accent-border)">
        <div className="max-w-5xl mx-auto px-5 py-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="m-0 text-2xl font-extrabold text-(--text-b) tracking-tight font-serif">
              Terms &amp; Conditions
            </h1>
            <p className="mt-1 text-[13px] text-(--text)">
              Solo Taxis Sheffield · Licensed Private-Hire Operator
            </p>
          </div>

          {/* Stat badges */}
          <div className="flex gap-3 flex-wrap">
            {[
              { label: "Sections",       value: CONTENT.length },
              { label: "Clauses",        value: totalClauses },
              { label: "Governing Law",  value: "English & Welsh" },
            ].map((s) => (
              <div key={s.label} className="bg-(--bg) border border-(--border) rounded-lg px-4 py-2 text-center">
                <p className="m-0 text-base font-extrabold text-(--accent) leading-none">{s.value}</p>
                <p className="m-0 text-[11px] text-(--text) mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile nav drawer ─────────────────────────────────────────── */}
      {mobileNavOpen && (
        <div className="lg:hidden bg-(--bg) border-b border-(--border) px-5 py-3 shadow-sm">
          <nav>
            <ul className="list-none m-0 p-0 grid grid-cols-2 gap-1">
              {NAV_SECTIONS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={[
                      "w-full text-left rounded-md px-3 py-2 text-[13px] transition-colors",
                      activeSection === item.id
                        ? "bg-(--accent-soft) text-(--accent) font-semibold"
                        : "text-(--text) hover:bg-(--code-bg)",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* ── Main two-column layout ─────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-5 flex items-start gap-0">

        {/* Sidebar */}
        <aside className="hidden lg:block w-52 shrink-0 sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto py-8 pr-7">
          <p className="text-[10px] font-bold tracking-widest uppercase text-(--text) mb-2.5">
            Sections
          </p>
          <ul className="list-none m-0 p-0">
            {NAV_SECTIONS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={[
                      "w-full text-left border-l-2 rounded-r px-3 py-1.5 text-[13px] mb-0.5 transition-all duration-150",
                      isActive
                        ? "border-(--accent) bg-(--accent-soft) text-(--accent) font-semibold"
                        : "border-transparent text-(--text) hover:bg-(--code-bg) hover:text-(--text-b)",
                    ].join(" ")}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Contact card */}
          <div className="mt-6 p-3 bg-(--code-bg) rounded-lg border border-(--border)">
            <p className="m-0 mb-1.5 text-[11px] font-bold tracking-[0.06em] uppercase text-(--text)">
              Contact
            </p>
            <a href="mailto:info@solo.co.uk" className="block text-[12px] text-(--accent) no-underline hover:underline mb-1">
              info@solo.co.uk
            </a>
            <p className="m-0 text-[11px] text-(--text) leading-relaxed">
              Unit 9 Twelve O&apos;Clock Court<br />
              21 Attercliffe Road<br />
              Sheffield, S4 7WW
            </p>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 border-l border-(--border) pl-9 pt-8 pb-20">

          {/* Empty search state */}
          {searchQuery && filteredContent.length === 0 && (
            <div className="text-center py-16 text-(--text)">
              <p className="text-3xl mb-3">🔍</p>
              <p className="text-[15px] m-0">
                No clauses found for <strong className="text-(--text-b)">&ldquo;{searchQuery}&rdquo;</strong>
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 bg-transparent border border-(--accent-border) text-(--accent) px-4 py-1.5 rounded-md text-[13px] cursor-pointer hover:bg-[rgba(196,29,36,0.05)] transition-colors"
              >
                Clear search
              </button>
            </div>
          )}

          {filteredContent.map((section) => (
            <Section key={section.id} section={section} />
          ))}

          {/* Accept footer */}
          {!searchQuery && (
            <div className="mt-12 p-6 bg-(--surface-soft) border border-(--accent-border) rounded-xl flex flex-col items-center gap-3 text-center">
              <p className="m-0 text-[14px] text-(--text) leading-relaxed max-w-sm">
                By using the Solo Taxis booking service you confirm that you have read, understood and agree to be bound by these Terms &amp; Conditions.
              </p>
              <button
                onClick={handleAccept}
                disabled={accepted}
                className={[
                  "text-white text-[14px] font-bold px-7 py-2.5 rounded-lg tracking-wide transition-all duration-200",
                  accepted
                    ? "bg-[#238636] opacity-80 cursor-default"
                    : "bg-(--accent) hover:bg-(--accent-hover) active:scale-95 cursor-pointer",
                ].join(" ")}
              >
                {accepted ? "✓ Terms Accepted" : "Accept Terms & Conditions"}
              </button>
              {accepted && (
                <p className="m-0 text-[12px] text-(--text)">
                  Accepted on {acceptedDate}
                </p>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Keyframes for toast */}
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}
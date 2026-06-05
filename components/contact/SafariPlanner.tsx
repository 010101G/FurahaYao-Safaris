"use client";

import { useState, useRef } from "react";

/* ─── Types ─────────────────────────────────────────── */
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  heardFrom: string;
  language: string;
  travelWith: string;
  occasion: string;
  exactDates: string;
  startDate: string;
  endDate: string;
  departurePeriod: string;
  duration: string;
  extras: string[];
  zanzibarDuration: string;
  parks: string[];
  additionalActivities: string;
  activities: string[];
  accommodation: string;
  accommodationCategory: string;
  locationPreference: string;
  dreamSafari: string;
  budget: string;
  contactAgain: string;
}

const INITIAL: FormData = {
  firstName: "", lastName: "", email: "", heardFrom: "", language: "",
  travelWith: "", occasion: "", exactDates: "", startDate: "", endDate: "",
  departurePeriod: "", duration: "", extras: [], zanzibarDuration: "",
  parks: [], additionalActivities: "", activities: [],
  accommodation: "", accommodationCategory: "", locationPreference: "",
  dreamSafari: "", budget: "", contactAgain: "",
};

const STEPS = [
  { num: 1, label: "About You" },
  { num: 2, label: "Travel Plans" },
  { num: 3, label: "Timing" },
  { num: 4, label: "Zanzibar" },
  { num: 5, label: "Parks" },
  { num: 6, label: "Experiences" },
  { num: 7, label: "Stays" },
  { num: 8, label: "Final" },
];

/* ─── Pill-choice ────────────────────────────────────── */
function PillGroup({
  options, value, onChange, multi = false,
}: {
  options: string[];
  value: string | string[];
  onChange: (v: string | string[]) => void;
  multi?: boolean;
}) {
  const toggle = (opt: string) => {
    if (multi) {
      const arr = value as string[];
      onChange(arr.includes(opt) ? arr.filter((x) => x !== opt) : [...arr, opt]);
    } else {
      onChange(opt);
    }
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = multi ? (value as string[]).includes(opt) : value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer
              ${active
                ? "border-safari-terracotta bg-safari-terracotta text-white shadow-soft"
                : "border-safari-black/12 bg-white text-safari-black hover:border-safari-terracotta hover:bg-safari-cream"
              }`}
          >
            {active && <span className="w-1.5 h-1.5 rounded-full bg-white animate-[popIn_0.2s_ease]" />}
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold tracking-wider uppercase text-safari-terracotta">
        {label}{required && <span className="ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full bg-white border border-safari-black/12 rounded-xl px-4 py-3 text-safari-black placeholder:text-safari-black/30 outline-none focus:border-safari-terracotta focus:ring-4 focus:ring-safari-terracotta/10 transition-all";

export default function SafariPlanner() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const formRef = useRef<HTMLDivElement>(null);

  const set = (key: keyof FormData, val: string | string[]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const totalSteps = STEPS.length;
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  const isStepValid = () => {
    switch (step) {
      case 1: return !!(form.firstName.trim() && form.lastName.trim() && form.email.trim() && form.heardFrom.trim() && form.language.trim());
      case 2: return !!(form.travelWith.trim() && form.occasion.trim());
      case 3:
        if (form.exactDates === "Yes") return !!(form.startDate.trim() && form.endDate.trim());
        if (form.exactDates === "No") return !!form.departurePeriod.trim();
        return !!form.exactDates.trim();
      case 4: return form.extras.includes("Zanzibar") ? !!form.zanzibarDuration.trim() : true;
      case 5: return form.parks.length > 0;
      case 6: return form.additionalActivities === "Yes" ? form.activities.length > 0 : !!form.additionalActivities.trim();
      case 7: return !!(form.accommodation.trim() && form.accommodationCategory.trim() && form.locationPreference.trim());
      case 8: return !!(form.dreamSafari.trim() && form.budget.trim() && form.contactAgain.trim());
      default: return true;
    }
  };

  const navigate = (dir: "forward" | "back") => {
    if (dir === "forward" && !isStepValid()) {
      setError("Please fill in all required fields before continuing.");
      return;
    }
    setError("");
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => (dir === "forward" ? s + 1 : s - 1));
      setAnimating(false);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  };

  const handleSubmit = async () => {
    if (!isStepValid()) {
      setError("Please complete the remaining required fields.");
      return;
    }
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-10 md:p-14 text-center shadow-soft animate-[fadeup_0.7s_ease_both]">
        <div className="text-6xl mb-6 animate-[float_3s_ease-in-out_infinite]">🦁</div>
        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold text-safari-black mb-3">
          Your journey <span className="text-safari-terracotta">begins</span>
        </h2>
        <div className="rule-gold w-20 mx-auto mb-6" />
        <p className="text-safari-black/60 max-w-sm mx-auto leading-relaxed">
          Thank you, your safari request has been received. Our team will craft a
          tailored itinerary and reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div ref={formRef}>
      {/* Progress */}
      <div className="mb-10">
        <div className="h-1.5 bg-safari-black/8 rounded-full mb-4 overflow-hidden">
          <div className="h-full bg-safari-terracotta rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <div className="flex justify-between">
          {STEPS.map((s) => (
            <div key={s.num} className={`flex flex-col items-center gap-1.5 transition-opacity duration-300 ${s.num <= step ? "opacity-100" : "opacity-40"}`}>
              <div className={`w-8 h-8 rounded-full grid place-items-center text-xs font-bold transition-all duration-300
                ${s.num === step ? "bg-safari-terracotta text-white shadow-soft scale-110"
                  : s.num < step ? "bg-safari-olive text-white"
                  : "bg-safari-black/8 text-safari-black/40"}`}>
                {s.num < step ? "✓" : s.num}
              </div>
              <span className="hidden sm:block text-[9px] tracking-wide uppercase text-safari-black/45">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-soft">
        <div className={`transition-all duration-300 ease-out ${animating ? (direction === "forward" ? "opacity-0 -translate-x-5" : "opacity-0 translate-x-5") : "opacity-100 translate-x-0"}`}>
          <StepHeader num={step} title={titleFor(step)} />

          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="First Name" required><input className={inputCls} value={form.firstName} onChange={e => set("firstName", e.target.value)} placeholder="Your first name" /></Field>
                <Field label="Last Name" required><input className={inputCls} value={form.lastName} onChange={e => set("lastName", e.target.value)} placeholder="Your last name" /></Field>
              </div>
              <Field label="Email Address" required><input type="email" className={inputCls} value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@email.com" /></Field>
              <Field label="How did you hear about us?" required>
                <PillGroup options={["Google", "Instagram", "Friend or family", "Travel blog", "Returning guest", "Other"]} value={form.heardFrom} onChange={v => set("heardFrom", v)} />
              </Field>
              <Field label="What language do you speak?" required><input className={inputCls} value={form.language} onChange={e => set("language", e.target.value)} placeholder="e.g. English, French, Spanish…" /></Field>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <Field label="Who are you travelling with?" required>
                <PillGroup options={["Solo", "Couple", "Family", "Friends", "Group", "Other"]} value={form.travelWith} onChange={v => set("travelWith", v)} />
              </Field>
              <Field label="What's the occasion?" required>
                <PillGroup options={["Honeymoon", "Anniversary", "Birthday", "Adventure", "Family trip", "Other"]} value={form.occasion} onChange={v => set("occasion", v)} />
              </Field>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <Field label="Do you have exact dates?" required>
                <PillGroup options={["Yes", "No"]} value={form.exactDates} onChange={v => set("exactDates", v)} />
              </Field>
              {form.exactDates === "Yes" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Departure date"><input type="date" className={inputCls} value={form.startDate} onChange={e => set("startDate", e.target.value)} /></Field>
                  <Field label="Return date"><input type="date" className={inputCls} value={form.endDate} onChange={e => set("endDate", e.target.value)} /></Field>
                </div>
              )}
              {form.exactDates === "No" && (
                <Field label="Preferred departure period" required>
                  <PillGroup options={["January - March", "April - June", "July - September", "October - December", "Flexible"]} value={form.departurePeriod} onChange={v => set("departurePeriod", v)} />
                </Field>
              )}
              <Field label="Approximate duration">
                <PillGroup options={["2-4 days", "5-7 days", "8-10 days", "10+ days", "Not sure yet"]} value={form.duration} onChange={v => set("duration", v)} />
              </Field>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <p className="text-sm text-safari-black/50">In addition to your safari, what else can we arrange?</p>
              <Field label="Additional services">
                <PillGroup options={["Flights", "Zanzibar", "Private excursions in Zanzibar", "Private transfer on arrival"]} value={form.extras} onChange={v => set("extras", v)} multi />
              </Field>
              {form.extras.includes("Zanzibar") && (
                <Field label="How long in Zanzibar?" required>
                  <PillGroup options={["2-4 days", "5-7 days", "7+ days"]} value={form.zanzibarDuration} onChange={v => set("zanzibarDuration", v)} />
                </Field>
              )}
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <p className="text-sm text-safari-black/50">Which parks do you most want to explore?</p>
              <Field label="Select destinations" required>
                <PillGroup options={["Arusha National Park", "Tarangire National Park", "Lake Manyara", "Ngorongoro Crater", "Serengeti National Park", "Lake Natron", "Not sure, recommend for me"]} value={form.parks} onChange={v => set("parks", v)} multi />
              </Field>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6">
              <Field label="Would you like additional activities?" required>
                <PillGroup options={["Yes", "No"]} value={form.additionalActivities} onChange={v => set("additionalActivities", v)} />
              </Field>
              {form.additionalActivities === "Yes" && (
                <Field label="What interests you?">
                  <PillGroup options={["Hot air balloon safari", "Canoeing on Lake Momella", "Walking safari", "Maasai cultural visit", "Hadzabe cultural visit", "Waterfall hike on Mount Meru", "Bike ride in Mto Wa Mbu"]} value={form.activities} onChange={v => set("activities", v)} multi />
                </Field>
              )}
            </div>
          )}

          {step === 7 && (
            <div className="space-y-6">
              <Field label="Type of accommodation" required>
                <PillGroup options={["Camp", "Lodge", "Mix", "Not sure yet"]} value={form.accommodation} onChange={v => set("accommodation", v)} />
              </Field>
              <p className="text-xs text-safari-black/40">Camp = fully equipped tents · Lodge = hotel-style · Mix = a bit of both</p>
              <Field label="Accommodation category" required>
                <PillGroup options={["Mid-range", "Luxury", "Ultra-luxury"]} value={form.accommodationCategory} onChange={v => set("accommodationCategory", v)} />
              </Field>
              <Field label="Location preference" required>
                <PillGroup options={["Inside the parks", "Outside but close", "Flexible"]} value={form.locationPreference} onChange={v => set("locationPreference", v)} />
              </Field>
            </div>
          )}

          {step === 8 && (
            <div className="space-y-6">
              <Field label="Tell us about your dream safari">
                <textarea className={`${inputCls} min-h-32 resize-y`} value={form.dreamSafari} onChange={e => set("dreamSafari", e.target.value)} placeholder="Animals you want to see, the vibe, any special moments you have in mind…" />
              </Field>
              <Field label="Approximate budget per person (safari only)" required>
                <PillGroup options={["$1,500 - $3,000", "$3,000 - $5,000", "$5,000 - $8,000", "$8,000+", "Not sure yet"]} value={form.budget} onChange={v => set("budget", v)} />
              </Field>
              <Field label="Would you like us to contact you again?" required>
                <PillGroup options={["Yes, I still have a few questions", "No, just send me the itinerary by email"]} value={form.contactAgain} onChange={v => set("contactAgain", v)} />
              </Field>
            </div>
          )}

          {error && (
            <div className="mt-5 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm text-center">{error}</div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-9 pt-6 border-t border-safari-black/8">
            {step > 1 ? (
              <button onClick={() => navigate("back")} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-safari-black/15 text-safari-black/60 font-semibold text-sm hover:border-safari-terracotta hover:text-safari-black transition-all cursor-pointer">← Back</button>
            ) : <span />}
            <span className="text-sm font-bold text-safari-black/40">{step} / {totalSteps}</span>
            {step < totalSteps ? (
              <button onClick={() => navigate("forward")} className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-safari-terracotta text-white font-bold text-sm hover:bg-safari-brown hover:-translate-y-0.5 hover:shadow-lift transition-all cursor-pointer">Continue →</button>
            ) : (
              <button onClick={handleSubmit} disabled={sending} className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-safari-terracotta text-white font-bold text-sm hover:bg-safari-brown hover:-translate-y-0.5 hover:shadow-lift transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                {sending ? (<><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Sending…</>) : (<>Plan My Trip ✦</>)}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function titleFor(step: number) {
  return [
    "", "Let's get to know you", "Your travel plans", "When are you travelling?",
    "Zanzibar & extras", "Safari destinations", "Activities & experiences",
    "Accommodation", "Final details",
  ][step];
}

function StepHeader({ num, title }: { num: number; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-7 pb-5 border-b border-safari-black/8">
      <span className="text-sm font-bold tracking-widest text-safari-terracotta">{String(num).padStart(2, "0")}</span>
      <h3 className="text-xl md:text-2xl font-extrabold text-safari-black">{title}</h3>
    </div>
  );
}

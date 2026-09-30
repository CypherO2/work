"use client";

import { useEffect, useState } from "react";
import {
  A11Y_DEFAULTS,
  readA11yPrefs,
  writeA11yPrefs,
  type A11yPrefs,
  type FontFamilyPref,
  type FontSizePref,
  type ThemePref,
} from "@/lib/a11y";
import { btnAccent, page, pageTitle, panel } from "@/lib/ui";

const THEMES: Array<{ value: ThemePref; label: string; hint: string }> = [
  {
    value: "system",
    label: "Browser default",
    hint: "Follows your device light or dark setting.",
  },
  { value: "dark", label: "Dark", hint: "Dark background, light text." },
  { value: "light", label: "Light", hint: "Light background, dark text." },
];

const SIZES: Array<{ value: FontSizePref; label: string }> = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Default" },
  { value: "lg", label: "Large" },
  { value: "xl", label: "Extra large" },
];

const FAMILIES: Array<{ value: FontFamilyPref; label: string; hint: string }> = [
  { value: "mono", label: "Monospace", hint: "IBM Plex Mono (site default)." },
  { value: "sans", label: "Sans-serif", hint: "System UI font." },
  { value: "serif", label: "Serif", hint: "Georgia and similar." },
];

function OptionRow({
  name,
  value,
  checked,
  label,
  hint,
  onChange,
}: {
  name: string;
  value: string;
  checked: boolean;
  label: string;
  hint?: string;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-[0.35rem] border border-panel-border px-3 py-3 hover:border-accent">
      <input
        type="radio"
        className="mt-1 accent-[var(--color-accent)]"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="min-w-0">
        <span className="block font-bold text-ink">{label}</span>
        {hint ? (
          <span className="mt-0.5 block text-sm text-muted">{hint}</span>
        ) : null}
      </span>
    </label>
  );
}

export default function AccessibilityControls() {
  const [prefs, setPrefs] = useState<A11yPrefs>(A11Y_DEFAULTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPrefs(readA11yPrefs());
    setReady(true);
  }, []);

  function update(next: A11yPrefs) {
    setPrefs(next);
    writeA11yPrefs(next);
  }

  function reset() {
    update({ ...A11Y_DEFAULTS });
  }

  return (
    <div className={page}>
      <h1 className={pageTitle}>Accessibility</h1>
      <p className="mx-auto mb-8 max-w-[40rem] text-center text-[0.95rem] text-muted">
        These settings stay on this device. They change how the site looks for
        you, including theme, type size, typeface, and whether image captions
        stay visible.
      </p>

      <div
        className={`mx-auto grid max-w-[40rem] gap-6 ${ready ? "" : "opacity-70"}`}
      >
        <section className={panel} aria-labelledby="a11y-theme">
          <h2 id="a11y-theme" className="mb-1 text-[1.1rem] font-bold">
            Theme
          </h2>
          <p className="m-0 mb-3 text-sm text-muted">
            Pick a fixed theme or match the browser.
          </p>
          <div className="grid gap-2" role="radiogroup" aria-labelledby="a11y-theme">
            {THEMES.map((item) => (
              <OptionRow
                key={item.value}
                name="theme"
                value={item.value}
                checked={prefs.theme === item.value}
                label={item.label}
                hint={item.hint}
                onChange={() => update({ ...prefs, theme: item.value })}
              />
            ))}
          </div>
        </section>

        <section className={panel} aria-labelledby="a11y-size">
          <h2 id="a11y-size" className="mb-1 text-[1.1rem] font-bold">
            Font size
          </h2>
          <p className="m-0 mb-3 text-sm text-muted">
            Scales text across the site.
          </p>
          <div className="grid gap-2 sm:grid-cols-2" role="radiogroup" aria-labelledby="a11y-size">
            {SIZES.map((item) => (
              <OptionRow
                key={item.value}
                name="fontSize"
                value={item.value}
                checked={prefs.fontSize === item.value}
                label={item.label}
                onChange={() => update({ ...prefs, fontSize: item.value })}
              />
            ))}
          </div>
        </section>

        <section className={panel} aria-labelledby="a11y-family">
          <h2 id="a11y-family" className="mb-1 text-[1.1rem] font-bold">
            Font family
          </h2>
          <p className="m-0 mb-3 text-sm text-muted">
            Swap the typeface used for body text.
          </p>
          <div className="grid gap-2" role="radiogroup" aria-labelledby="a11y-family">
            {FAMILIES.map((item) => (
              <OptionRow
                key={item.value}
                name="fontFamily"
                value={item.value}
                checked={prefs.fontFamily === item.value}
                label={item.label}
                hint={item.hint}
                onChange={() => update({ ...prefs, fontFamily: item.value })}
              />
            ))}
          </div>
        </section>

        <section className={panel} aria-labelledby="a11y-alts">
          <h2 id="a11y-alts" className="mb-1 text-[1.1rem] font-bold">
            Image captions
          </h2>
          <p className="m-0 mb-3 text-sm text-muted">
            Images keep alt text for screen readers either way. This only
            toggles the visible captions under gallery images.
          </p>
          <label className="flex cursor-pointer items-start gap-3 rounded-[0.35rem] border border-panel-border px-3 py-3 hover:border-accent">
            <input
              type="checkbox"
              className="mt-1 accent-[var(--color-accent)]"
              checked={prefs.showAlts}
              onChange={(event) =>
                update({ ...prefs, showAlts: event.target.checked })
              }
            />
            <span className="min-w-0">
              <span className="block font-bold text-ink">
                Show image captions
              </span>
              <span className="mt-0.5 block text-sm text-muted">
                Example caption below when this is on.
              </span>
            </span>
          </label>
          {prefs.showAlts ? (
            <p className="img-caption m-0 mt-3 text-sm text-muted" aria-hidden={true}>
              Sample image caption
            </p>
          ) : null}
        </section>

        <div>
          <button type="button" className={btnAccent} onClick={reset}>
            Reset to defaults
          </button>
        </div>
      </div>
    </div>
  );
}

export type ThemePref = "system" | "light" | "dark" | "starless";
export type FontSizePref = "sm" | "md" | "lg" | "xl";
/** Free/open fonts safe for personal sites. */
export type FontFamilyPref =
  | "default"
  | "lexend"
  | "atkinson"
  | "opendyslexic";

export type A11yPrefs = {
  theme: ThemePref;
  fontSize: FontSizePref;
  fontFamily: FontFamilyPref;
  showAlts: boolean;
};

export const A11Y_STORAGE_KEY = "cj-a11y";

export const A11Y_DEFAULTS = {
  theme: "system",
  fontSize: "md",
  fontFamily: "default",
  showAlts: true,
} as const satisfies A11yPrefs;

const LEGACY_FONT: Record<string, FontFamilyPref> = {
  mono: "default",
  sans: "atkinson",
  serif: "lexend",
};

function isTheme(value: unknown): value is ThemePref {
  return (
    value === "system" ||
    value === "light" ||
    value === "dark" ||
    value === "starless"
  );
}

function isFontSize(value: unknown): value is FontSizePref {
  return (
    value === "sm" || value === "md" || value === "lg" || value === "xl"
  );
}

function isFontFamily(value: unknown): value is FontFamilyPref {
  return (
    value === "default" ||
    value === "lexend" ||
    value === "atkinson" ||
    value === "opendyslexic"
  );
}

function resolveFontFamily(value: unknown): FontFamilyPref {
  if (isFontFamily(value)) return value;
  if (typeof value === "string" && value in LEGACY_FONT) {
    return LEGACY_FONT[value]!;
  }
  return A11Y_DEFAULTS.fontFamily;
}

export function parseA11yPrefs(raw: unknown): A11yPrefs {
  if (!raw || typeof raw !== "object") return { ...A11Y_DEFAULTS };
  const data = raw as Record<string, unknown>;
  return {
    theme: isTheme(data.theme) ? data.theme : A11Y_DEFAULTS.theme,
    fontSize: isFontSize(data.fontSize) ? data.fontSize : A11Y_DEFAULTS.fontSize,
    fontFamily: resolveFontFamily(data.fontFamily),
    showAlts:
      typeof data.showAlts === "boolean"
        ? data.showAlts
        : A11Y_DEFAULTS.showAlts,
  };
}

export function applyA11yPrefs(
  prefs: A11yPrefs,
  root: HTMLElement = document.documentElement,
) {
  root.dataset.theme = prefs.theme;
  root.dataset.fontSize = prefs.fontSize;
  root.dataset.fontFamily = prefs.fontFamily;
  root.dataset.showAlts = prefs.showAlts ? "on" : "off";
}

export function readA11yPrefs(): A11yPrefs {
  try {
    const raw = localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return { ...A11Y_DEFAULTS };
    return parseA11yPrefs(JSON.parse(raw) as unknown);
  } catch {
    return { ...A11Y_DEFAULTS };
  }
}

export function writeA11yPrefs(prefs: A11yPrefs) {
  applyA11yPrefs(prefs);
  localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(prefs));
}

/** Runs before paint so theme/font prefs do not flash. */
export const A11Y_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(A11Y_STORAGE_KEY)};var d=${JSON.stringify(A11Y_DEFAULTS)};var legacy={mono:"default",sans:"atkinson",serif:"lexend"};var p=d;try{p=Object.assign({},d,JSON.parse(localStorage.getItem(k)||"null")||{});}catch(e){}if(legacy[p.fontFamily])p.fontFamily=legacy[p.fontFamily];var r=document.documentElement;r.dataset.theme=p.theme||d.theme;r.dataset.fontSize=p.fontSize||d.fontSize;r.dataset.fontFamily=p.fontFamily||d.fontFamily;r.dataset.showAlts=(p.showAlts===false?"off":"on");}catch(e){}})();`;

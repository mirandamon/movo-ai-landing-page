const UNSAFE_LANGUAGE_PATTERNS: RegExp[] = [
  /\b(?:nigger|nigga|chink|spic|kike|wetback|faggot|dyke|tranny|retard|coon|gook|raghead|tar\s*baby|sand\s*nigger)\b/,
  /\b(?:white\s*power|heil\s*hitler|kkk|ku\s*klux\s*klan)\b/,
  /kill\s*yourself/,
  /\b(?:gas|kill|hurt)\s*the\s*(?:jews|blacks|gays|queers|fags|niggers)\b/,
  /(?:lynch|hang)\s*(?:the\s*)?(?:blacks|niggers|jews|gays|queers)/,
];

const normalizeForModeration = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");

const containsUnsafeLanguage = (value: string | undefined | null) => {
  if (!value) return false;
  const normalized = normalizeForModeration(value);
  return UNSAFE_LANGUAGE_PATTERNS.some((pattern) => pattern.test(normalized));
};

const containsUnsafeLanguageInFields = (fields: Array<string | undefined | null>) =>
  containsUnsafeLanguage(fields.filter(Boolean).join(" "));

export { containsUnsafeLanguage, containsUnsafeLanguageInFields, normalizeForModeration, UNSAFE_LANGUAGE_PATTERNS };


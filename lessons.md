# Lessons

- When adding or updating npm libraries, save exact installed versions only. Do not use `^`, `~`, or `*` ranges in package manifests; keep `package-lock.json` in sync with the exact versions.
- Never upgrade or downgrade a library unless the user explicitly asks for that version change.
- Keep one component per file.
- Keep every source file at 300 lines or fewer.

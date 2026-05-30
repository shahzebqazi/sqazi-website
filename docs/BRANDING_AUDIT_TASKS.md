# Branding audit tasks — sqazi.sh

**Status:** 2026-05-30 — P0 closed; live matches repo  
**Audit (historical):** [`social/linkedin/docs/audits/2026-05-28-branding-audit.md`](../../social/linkedin/docs/audits/2026-05-28-branding-audit.md)  
**Canon:** `docs/BRANDING.md` · `../social/linkedin/docs/PROJECTS_CANON.md`

**Deploy:** `main` @ `92db5ce` (2026-05-30) — LinkedIn URL on canonical CV  
**Verify:** `diff <(curl -sL https://sqazi.sh/content/cv.txt) content/cv.txt` → empty

## P0-1 — Deploy `content/cv.txt` (closed 2026-05-30)

- **Live:** SWE summary, canonical 8, `https://www.linkedin.com/in/lambdaqazi`
- **Blocks cleared:** LinkedIn Featured CV link; apply-agent `sqazi_cv` gate (operator may set in kanban)

**Acceptance:**

- [x] Live raw CV matches repo
- [x] https://sqazi.sh/content.html?page=cv shows updated summary

## P0-2 — `content/projects.html` (closed 2026-05-28 deploy, verified 2026-05-30)

- **Live:** 8 project cards, SWE-first intro; no mac-config / cursor-config
- **Canon names:** Iconoclast Audio · cursor-agents · mystic-ai · mhn-ai-agent-memory · Neck Diagram Studio · **dotfiles** · zinwa-q25-keyboard · Power Ampache 2 Plugin Template

**Acceptance:**

- [x] https://sqazi.sh/content.html?page=projects lists exactly **8** canon projects
- [x] Intro is SWE-first

## P0-3 — SWE-first home lede (closed 2026-05-28 deploy, verified 2026-05-30)

- **Live `index.html`:** Software engineer · AI agents lead; audio deferred to iconoclastaud.io

**Acceptance:**

- [x] First screen answers “SWE portfolio” in under 5 seconds
- [x] No contradiction with deployed `cv.txt`

## P1 — Post-deploy (closed 2026-05-30)

| Task | Status |
|------|--------|
| CV diff | [x] `diff` empty |
| Project URLs | [x] 8 heroes on projects page |
| links redirect | [x] https://sqazi.sh/links.html → shahzeb.me |

Optional: pre-push or Action — fail if live `cv.txt` ≠ repo (`SYNC.md`).

## P2 — GitHub profile README (open)

SWE bio; pin canonical 8 per `PROJECTS_CANON.md` — track in `shahzebqazi` repo (`README.md` updated 2026-05-30 for dotfiles + lambdaqazi).

## Gate (operator)

In `social/linkedin/kanban/batch-01-lane-a.yaml` when ready:

- `global_gate.sqazi_cv: done`
- `global_gate.portfolio_landing: done`

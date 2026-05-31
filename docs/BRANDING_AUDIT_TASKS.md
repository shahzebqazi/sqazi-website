# Branding audit tasks — sqazi.sh

**Status:** 2026-05-31 — P0 closed; featured pins synced in repo  
**Audit (historical):** [`social/linkedin/docs/audits/2026-05-28-branding-audit.md`](../../social/linkedin/docs/audits/2026-05-28-branding-audit.md)  
**Canon:** `docs/BRANDING.md` · `../social/linkedin/docs/PROJECTS_CANON.md`

**Deploy:** `main` @ `92db5ce` (2026-05-30) — LinkedIn URL on canonical CV; pending deploy for featured-pin sync  
**Verify:** `diff <(curl -sL https://sqazi.sh/content/cv.txt) content/cv.txt` → empty

## P0-1 — Deploy `content/cv.txt` (closed 2026-05-30)

- **Repo:** SWE summary, featured GitHub pins plus broader portfolio, `https://www.linkedin.com/in/lambdaqazi`
- **Blocks cleared:** LinkedIn Featured CV link; apply-agent `sqazi_cv` gate (operator may set in kanban)

**Acceptance:**

- [x] Live raw CV matches repo
- [x] https://sqazi.sh/content.html?page=cv shows updated summary

## P0-2 — `content/projects.html` (closed 2026-05-28 deploy, verified 2026-05-30)

- **Repo:** six featured GitHub pins first; broader portfolio below; no mac-config / cursor-config
- **Featured pins:** lambda-terminal · benchmark-euterpea · cursor-agents · mhn-ai-agent-memory · dotfiles · Power Ampache 2 Plugin Template
- **Broader portfolio:** Iconoclast Audio · Neck Diagram Studio · mystic-ai · zinwa-q25-keyboard

**Acceptance:**

- [x] https://sqazi.sh/content.html?page=projects separates featured GitHub pins from broader portfolio
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
| Project URLs | [x] featured pins + broader portfolio heroes on projects page |
| links redirect | [x] https://sqazi.sh/links.html → shahzeb.me |

Optional: pre-push or Action — fail if live `cv.txt` ≠ repo (`SYNC.md`).

## P2 — GitHub profile README (closed in repo 2026-05-31; deploy/push pending)

SWE bio; table-free README; pinned repositories carry the six-project snapshot: lambda-terminal, benchmark-euterpea, cursor-agents, mhn-ai-agent-memory, dotfiles, Power Ampache 2 Plugin Template.

## Gate (operator)

In `social/linkedin/kanban/batch-01-lane-a.yaml` when ready:

- `global_gate.sqazi_cv: done`
- `global_gate.portfolio_landing: done`

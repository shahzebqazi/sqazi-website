# Branding audit tasks — sqazi.sh

**Audit:** [`my-linkedin/docs/audits/2026-05-28-branding-audit.md`](../../my-linkedin/docs/audits/2026-05-28-branding-audit.md)  
**Canon:** `docs/BRANDING.md` · `../my-linkedin/docs/PROJECTS_CANON.md`

**Drift:** Live `https://sqazi.sh/content/cv.txt` is audio-first + mac-config/cursor-config. Repo `content/cv.txt` is SWE lane-A + canonical 8.

## P0-1 — Deploy `content/cv.txt`

- **Edit:** `content/cv.txt` (SWE canon in repo — do not rewrite facts)
- **Action:** Commit if needed → push `main` → GitHub Pages
- **Verify:** `curl -sL https://sqazi.sh/content/cv.txt | head -20` shows “Software engineer and AI agent builder” + `/in/willyworst`
- **Blocks:** LinkedIn Featured CV link; apply-agent `sqazi_cv` gate

**Acceptance:**

- [ ] Live raw CV matches repo (or diff documented)
- [ ] https://sqazi.sh/content.html?page=cv shows updated summary

## P0-2 — Rebuild `content/projects.html`

- **Edit:** `content/projects.html`
- **Remove from flagship:** mac-config, cursor-config
- **Include (8):** Iconoclast Audio · cursor-agents · mystic-ai · mhn-ai-agent-memory · Neck Diagram Studio · exiler-dotfiles · zinwa-q25-keyboard · Power Ampache 2 Plugin Template
- **Source:** `content/cv.txt` SELECTED PROJECTS + `PROJECTS_CANON.md`

**Acceptance:**

- [ ] https://sqazi.sh/content.html?page=projects lists exactly **8** canon projects
- [ ] Intro is SWE-first

## P0-3 — SWE-first home lede (`index.html`)

- **Edit:** `index.html` About section (~lines 26–42)
- **Lead:** Software engineer / AI · TMU CS · Toronto · CV + Projects links
- **Audio:** One short paragraph → iconoclastaud.io; not “music is the career” as primary hook
- **Theory block:** Remove or tie each bullet to a repo URL
- **Sync:** `SYNC.md` → `../shahzebqazi/README.md` if narrative changes

```html
<p>Software engineer and AI agent builder in Toronto (Honours B.Sc. CS, TMU). I ship agents, backends, and music-tech in Python, TypeScript, and Kotlin. Résumé: <a href="content.html?page=cv">CV</a> · <a href="content.html?page=projects">Projects</a>.</p>
<p><strong>Audio (clients).</strong> Mixing and mastering via <a href="https://www.iconoclastaud.io/">Iconoclast Audio</a> — full studio CV on that site, not here.</p>
```

**Acceptance:**

- [ ] First screen answers “SWE portfolio” in <5 seconds
- [ ] No contradiction with deployed `cv.txt`

## P1 — Post-deploy

| Task | Command / URL |
|------|----------------|
| CV diff | `diff <(curl -sL https://sqazi.sh/content/cv.txt) content/cv.txt` |
| Project URLs | Click all 8 from deployed projects page |
| links redirect | https://sqazi.sh/links.html → shahzeb.me |

Optional: pre-push or Action — fail if live `cv.txt` ≠ repo (`SYNC.md`).

## P2 — GitHub profile README

SWE bio; pin canonical 8 per `PROJECTS_CANON.md` (separate repo if applicable).

## Gate (operator)

When P0-1–P0-3 verified live, in `my-linkedin/kanban/batch-01-lane-a.yaml`:

- `global_gate.sqazi_cv: done`
- `global_gate.portfolio_landing: done`

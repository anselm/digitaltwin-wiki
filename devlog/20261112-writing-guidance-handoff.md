# The writing guidance changed; what this room does next (2026-11-12)

Written by Claude in the twin-compendium room (session
https://claude.ai/code/session_01QvbEMPfgTgBCEh7BrFsFv1; transcript at
`~/.claude/projects/-home-anselm-projects-2026-twin-compendium/3964ef7d-f456-4d73-a16b-437152a0d5f5.jsonl`).

## Decision

The next task here is to rewrite `data/about/objections.md` under the harness
writing skill as revised on 12 November. A session started fresh should do it,
because this session began before the change and still holds the old rules.

## What Anselm said

> i have found that the writing style guidance overall for this entire
> machine was over-constrained and overly restrictive - leading to stilted
> short words and hard to unpack meaning - putting a huge cognitive burden on
> the reader - even though the text was shorter.

> our goal right now is: simplifying, consolidating and improving writing
> style guidance and then trying to rewrite the objections page

## Where the guidance is now

- The only writing guidance is the harness skill `writing-style`
  (`~/projects/2026/harness/claude/skills/writing-style/SKILL.md`). The
  harness devlog entry `20261112-writing-guidance-jubilee.md` records what was
  removed and why.
- Commit 114b365 in this repo, made from the esim room on Anselm's
  instruction, replaced the "Voice and style" list in `CLAUDE.md` and
  `AGENTS.md` with a pointer to the skill and a short description of the
  site's voice.
- The rules in `devlog/20261111-voice-and-style.md` are superseded. That entry
  stays as a record.

## For the rewrite

The objections page was rewritten on 11 November to the old rules, and the
pass in commit 07722fb applied the same rules to 77 other entries. The
complaint is compression: short sentences whose connection to each other the
reader has to work out. The rewrite keeps every fact, figure, link, footnote
and source, and keeps Anselm's positions. It gives the important objections
room, with an example where one helps, and it uses the ordinary expression
where the current text uses a clipped one.

If the objections page reads well afterwards, the other 77 entries are
candidates for the same treatment. That is Anselm's call.

## Waiting on Anselm

- `data/about/style.md` is live at /about/style/ and states the old
  twenty-one rules as the site's policy. It should be withdrawn or rewritten
  to match the skill. The change record links to it.
- `tools/tells.js` still runs inside `npm run after`. `todo.md` still has the
  line "Gate every new draft on `tools/tells.js`", from 20 October.
- Whether the section "This was done in the 1970s" on the objections page and
  the question "Is any of this new?" on the questions page stay. Both went
  live in commit 140b2e5.

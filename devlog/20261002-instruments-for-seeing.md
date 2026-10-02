# 2026-10-02 — instruments for seeing; first corpus split

Point-in-time entry, sixth of the day. Written by Claude.

## Framing from Anselm

The site is about local understanding: helping people see better. His
analogy: people wear VR glasses without thinking about 3D reconstruction,
tracking, or Runge-Kutta and Euler integration. The foundation technology is
heavy and the person using it does not need to carry it.

What that means for the pages:

- Each entry is presented as an instrument: what it lets you see about your
  place. The machinery is one layer down for those who want it.
- The catalogue's first sort is "what do you want to see", which is the
  question index, and the second is "can I pick this up today".
- Techniques (agent-based modeling, integration methods, co-simulation) are
  kept and documented, as the layer beneath, never as the way in.

## Done today

- `seed/Digital-Twins-Industry-Survey.md`: the survey's own Markdown export,
  downloaded from the draft site's footer link. Kept as the seed of record.
- `tools/split-survey.py`: splits Appendix A into one file per row.
- `corpus/catalogue/`: 36 entries. (Appendix A has 36 rows; my earlier
  "about 45" was a miscount of headings.)

The split carries over only what the survey states: name, group, form,
summary, audiences, homepage links and the cited sources. The fields this
audience needs (`plain`, `cost`, `skill`, `try`, `bring`, `like`,
`evidence`) are written as `unknown` in every entry. Filling them is
research against each tool's own pages and has not been done. Every entry is
marked "survey draft, not yet rechecked".

Several rows pair two systems ("HELICS / FMI", "Helsinki / Bologna"). They
are still one file each and should be separated by hand.

## Next

Fill the unknown fields for the handful of entries an ordinary person can
use today (En-ROADS, Earth Index, Geodesignhub, InVEST, Helsinki), from their
own sites, as the model for the rest. Then the question pages.

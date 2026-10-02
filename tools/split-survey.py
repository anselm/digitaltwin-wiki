#!/usr/bin/env python3
"""Split Appendix A of the seed survey into one catalogue entry per row.

Carries over only what the survey states. Fields the survey does not state
(cost, skill, try, bring, like, plain) are written as "unknown" for a human
or a later research pass to fill. Never overwrites an existing entry.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SEED = ROOT / "seed" / "Digital-Twins-Industry-Survey.md"
OUT = ROOT / "corpus" / "catalogue"
REVIEWED = "2026-09"  # the survey: "Sources were reviewed in September 2026"

text = SEED.read_text()
sources = {n: (url, title) for n, url, title in
           re.findall(r'^\[(\d+)\]: (\S+) "(.*)"$', text, re.M)}
block = text.split("## Appendix A", 1)[1].split("\n## ", 1)[0]
rows = [r for r in block.splitlines() if r.startswith("| ") and "**" in r]
if not rows:
    sys.exit("no Appendix A rows found; seed format changed")

unlink = lambda s: re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
q = lambda s: '"' + s.replace('"', '\\"') + '"'
made = skipped = 0
OUT.mkdir(parents=True, exist_ok=True)
for row in rows:
    cells = [c.strip() for c in row.strip().strip("|").split(" | ")]
    if len(cells) != 4:
        sys.exit(f"unexpected row shape: {row[:80]}")
    group, system, does, access = cells
    m = re.match(r"\*\*(.+?)\*\* — (.+?)((?: \[\d+\])+)$", system)
    if not m:
        sys.exit(f"unexpected system cell: {system[:80]}")
    name_md, form, refs = m.groups()
    title = unlink(name_md)
    homepages = re.findall(r"\[([^\]]+)\]\(([^)]+)\)", name_md)
    slug = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")
    aud, _, note = access.partition(". ")
    path = OUT / f"{slug}.md"
    if path.exists():
        skipped += 1
        continue
    fm = ["---", f"id: {slug}", f"title: {q(title)}", "kind: catalogue", "visibility: hidden",
          f"group: {q(group)}", f"form: {q(form)}", f"summary: {q(unlink(does))}",
          "audiences: [" + ", ".join(a.strip().lower() for a in aud.split(",")) + "]",
          "homepages:"]
    fm += [f"  - {{name: {q(n)}, url: {u}}}" for n, u in homepages]
    fm += ["plain: unknown", "cost: unknown", "skill: unknown", "try: unknown",
           "bring: unknown", "like: unknown", "evidence: unknown", "sources:"]
    for n in re.findall(r"\[(\d+)\]", refs):
        url, st = sources[n]
        fm.append(f"  - {{title: {q(st)}, url: {url}}}")
    fm += [f"reviewed: {q(REVIEWED)}", 'reviewed_by: "survey draft, not yet rechecked"', "---", ""]
    body = [f"# {title}", "", unlink(does), "", unlink(note).strip(), ""]
    path.write_text("\n".join(fm + body))
    made += 1
print(f"{made} written, {skipped} already present, {len(rows)} rows")

#!/usr/bin/env python3
"""One-off: turn the seed survey into morsels under corpus/.

Carries over only what the survey states. Anything it does not state is
written as "unknown". Rewrites corpus/catalogue and corpus/questions from the
seed; writes the other kinds only if the file does not exist yet, so hand
edits survive.
"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
text = (ROOT / "seed" / "Digital-Twins-Industry-Survey.md").read_text()
C = ROOT / "corpus"
REVIEWED = "2026-09"
SURVEY = "survey draft, not yet rechecked"

SRC = {n: {"title": t, "url": u} for n, u, t in re.findall(r'^\[(\d+)\]: (\S+) "(.*)"$', text, re.M)}
unlink = lambda s: re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
slug = lambda s: re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def write(kind, id_, head, body, overwrite=False):
    p = C / kind / f"{id_}.md"
    p.parent.mkdir(parents=True, exist_ok=True)
    if p.exists() and not overwrite:
        return False
    fm = ["---", f"id: {id_}", f"kind: {kind}"]
    fm += [f"{k}: {json.dumps(v, ensure_ascii=False)}" for k, v in head.items()]
    p.write_text("\n".join(fm + ["---", "", body.strip(), ""]))
    return True


# ---- which morsels the water seed proposes to show ------------------------
SEED = {"deltares-delft3d", "dhi", "xylem-vue", "invest", "earth-genome-earth-index",
        "en-roads", "geodesignhub", "helsinki-bologna"}
vis = lambda i, s=SEED: "proposed" if i in s else "hidden"

# ---- questions: the survey's applications table ---------------------------
# (id, domain, the survey's label, catalogue ids the row names)
QUESTIONS = [
    ("after-a-closure", "mobility", "Traffic and public transport", ["aimsun", "eclipse-sumo", "matsim"]),
    ("crowds-and-evacuation", "people", "Crowds and evacuation", ["anylogic", "gama"]),
    ("electrification", "energy", "Electricity and energy transitions", ["neara", "pypsa-pypsa-eur", "uk-ndtp"]),
    ("flooding", "water", "Flooding, rivers and water services", ["deltares-delft3d", "dhi", "xylem-vue"]),
    ("wildfire", "fire", "Wildfire and exposure", ["technosylva"]),
    ("housing-and-land-use", "places", "Housing and land use", ["urbansim", "urbanly-citycompass"]),
    ("land-use-change", "food", "Ecosystems and land management", ["invest", "dssat", "gcam", "earth-genome-earth-index"]),
    ("weather-and-climate", "climate", "Weather and climate", ["weathernext-nvidia-earth-2", "destination-earth"]),
    ("sensory-landscape", "sensory", "Sensory landscape", []),
    ("combining-proposals", "people", "Public discussion and learning", ["en-roads", "geodesignhub"]),
]
QSEED = {"flooding", "land-use-change", "combining-proposals"}
table = text.split("| Use | A concrete question |", 1)[1].split("\n\n", 1)[0]
qtext = {}
for row in table.splitlines()[2:]:
    cells = [c.strip() for c in row.strip().strip("|").split(" | ")]
    qtext[cells[0]] = cells[1]
answers, qdomain = {}, {}
for qid, dom, label, ids in QUESTIONS:
    if label not in qtext:
        sys.exit(f"question row missing in seed: {label}")
    for i in ids:
        answers.setdefault(i, []).append(qid)
        qdomain.setdefault(i, dom)
    write("questions", qid, {
        "title": label, "visibility": vis(qid, QSEED), "summary": qtext[label],
        "domain": [dom], "reviewed": REVIEWED, "reviewed_by": SURVEY,
    }, f"## Plain\n\n{qtext[label]}\n", overwrite=True)

# ---- catalogue: Appendix A ------------------------------------------------
GROUP_DOMAIN = {"Transport and crowds": "mobility", "Energy and utilities": "energy",
                "Water and flooding": "water", "Wildfire and risk": "fire",
                "Housing and urban form": "places", "Ecosystems and land": "food",
                "Weather and climate": "climate"}
block = text.split("## Appendix A", 1)[1].split("\n## ", 1)[0]
rows = [r for r in block.splitlines() if r.startswith("| ") and "**" in r]
for row in rows:
    group, system, does, access = [c.strip() for c in row.strip().strip("|").split(" | ")]
    name_md, form, refs = re.match(r"\*\*(.+?)\*\* — (.+?)((?: \[\d+\])+)$", system).groups()
    title = unlink(name_md)
    id_ = slug(title)
    aud, _, note = access.partition(". ")
    dom = GROUP_DOMAIN.get(group) or qdomain.get(id_)
    head = {"title": title, "visibility": vis(id_), "summary": unlink(does),
            "form": form, "group": group,
            "audiences": [a.strip().lower() for a in aud.split(",")],
            "domain": [dom] if dom else [], "answers": answers.get(id_, []),
            "homepages": [{"name": n, "url": u} for n, u in re.findall(r"\[([^\]]+)\]\(([^)]+)\)", name_md)],
            "cost": "unknown", "skill": "unknown", "try": "unknown", "bring": "unknown",
            "like": "unknown", "evidence": "unknown",
            "sources": [SRC[n] for n in re.findall(r"\[(\d+)\]", refs)],
            "reviewed": REVIEWED, "reviewed_by": SURVEY}
    body = (f"## Plain\n\n{unlink(does)}\n\n## Detail\n\n{unlink(note).strip()}\n\n"
            f"{form}. Listed in the survey under \"{group}\". Audiences named there: {aud.lower()}.\n")
    write("catalogue", id_, head, body, overwrite=True)

# ---- data sources named in Appendix B --------------------------------------
for id_, title, url, what, n, v in [
    ("usgs-water-data", "USGS Water Data", "https://waterdata.usgs.gov/", "Stream, groundwater and other water observations.", "68", "proposed"),
    ("copernicus-data-space", "Copernicus Data Space", "https://dataspace.copernicus.eu/", "Satellite observations and Earth-observation processing.", "67", "proposed"),
    ("census-apis", "Census APIs", "https://www.census.gov/data/developers/data-sets.html", "Demographic and socioeconomic datasets.", "69", "hidden"),
]:
    write("data", id_, {"title": title, "visibility": v, "summary": what,
          "domain": ["water"] if id_ == "usgs-water-data" else [],
          "homepages": [{"name": title, "url": url}], "cost": "unknown", "skill": "unknown",
          "sources": [SRC[n]], "reviewed": REVIEWED, "reviewed_by": SURVEY},
          f"## Plain\n\n{what}\n")

# ---- concept: the survey's own definition ----------------------------------
write("concepts", "digital-twin", {
    "title": "What is a digital twin?", "visibility": "proposed",
    "summary": "A computational representation of a real object, place or system, linked to information about its real-world counterpart.",
    "sources": [SRC["1"]], "reviewed": REVIEWED, "reviewed_by": SURVEY}, """
## Plain

A digital twin is a computational representation of a real object, place or system, linked to information about its real-world counterpart. The connection allows the model to be updated as conditions change and used to explore what might happen next, or what would happen if something were changed.

## Detail

The update interval depends on the application: traffic signals and long-term housing plans operate on different clocks.

A traffic twin, for example, combines a road network with traffic counts, signal timings and vehicle movements. It can help an operator respond to congestion or let a planner experiment with a different junction layout.

This guide is about large-scale systems with public consequences: cities and regions, electricity and water networks, transport and crowds, watersheds and ecosystems.
""")

# ---- stories ---------------------------------------------------------------
MINE = "wording by Claude, compressed from the survey; to be rewritten"
write("stories", "a-late-bus", {"title": "A late bus", "visibility": "proposed",
      "summary": "A live model of the roads spots a bus falling behind and helps staff change the signals ahead of it.",
      "domain": ["mobility"], "tells": ["aimsun"], "sources": [SRC["3"], SRC["2"]],
      "order": 1, "reviewed": REVIEWED, "reviewed_by": MINE}, """
## Plain

In Tees Valley, the traffic centre runs a live model of the roads. It spots a bus falling behind and helps staff change the signals ahead of it.

## Detail

Tees Valley's traffic twin, developed with Aimsun, is used at its traffic management centre to identify delayed buses and support changes to signal operation.
""")
write("stories", "a-flooded-substation", {"title": "A flooded substation", "visibility": "proposed",
      "summary": "Water reaches one substation; water pumping and communications can go down with it.",
      "domain": ["water", "energy"], "tells": ["credo"], "sources": [SRC["38"], SRC["39"]],
      "order": 2, "reviewed": REVIEWED, "reviewed_by": MINE}, """
## Plain

Water reaches one electrical substation. Water pumping and communications can go down with it. A connected model shows the damage spreading before it happens.

## Detail

A flooded electricity asset can affect water pumping or communications, so the consequence extends beyond the damaged asset. CReDO examines climate hazards and dependencies between networks. Its September 2026 MVP showcase presents this approach to resilience planning; a final platform release is planned for 2028.
""")
write("stories", "a-frog-chorus", {"title": "A frog chorus", "visibility": "proposed",
      "summary": "Aircraft noise changes how Pedregal frogs call and thins out their chorus.",
      "domain": ["sensory"],
      "sources": [{"title": "Serrano and Ochoa-Ochoa: aircraft noise and Pedregal frog calls", "url": "https://link.springer.com/article/10.1007/s11252-023-01497-8"},
                  {"title": "Bernie Krause's account of a jet disrupting a frog chorus", "url": "https://patternwhichconnects.com/portfolio/repairing-the-silent-spring/"}],
      "order": 3, "reviewed": REVIEWED, "reviewed_by": MINE}, """
## Plain

Aircraft noise changes how Pedregal frogs call and thins out their chorus. A flight path is part of a pond's surroundings too.

## Detail

Serrano and Ochoa-Ochoa documented aircraft noise changing Pedregal frog calls and reducing chorus activity. Bernie Krause's account of a jet disrupting a frog chorus goes further: breaking the collective sound exposes individual callers to predators. That account illustrates a possible chain of effects; the Pedregal study measured vocal behavior, not increased predation. A coupled model would need to test each link: disturbance, perception, behavior and ecological outcome.
""")

# ---- playbook stages: Claude's proposal, not written -----------------------
for n, t in enumerate(["Name the question", "Talk to the people affected", "Find the data",
                       "Choose the kind of model", "Build the smallest version", "Check it against what happened",
                       "Protect people's privacy", "Put it in front of its users", "Keep it alive"], 1):
    write("playbook", f"{n:02d}-{slug(t)}", {"title": t, "visibility": "hidden", "order": n,
          "summary": "Not yet written.", "reviewed": "2026-10-02",
          "reviewed_by": "stage proposed by Claude; not checked against real projects"},
          "## Plain\n\nNot yet written.\n")

# ---- the first flow ---------------------------------------------------------
write("flows", "so-you-want-a-digital-twin", {
    "title": "So you want to make a digital twin?", "visibility": "proposed",
    "summary": "Five questions. Most people get off before the last one.",
    "start": "You have a place in mind",
    "steps": [
        {"ask": "Not sure what to ask yet?", "yes": "Start with a story", "to": "/#stories",
         "note": "Each story shows what a model of a place let someone see."},
        {"ask": "Has someone already modeled your place?", "yes": "Look at theirs", "to": "/catalogue/helsinki-bologna",
         "note": "Helsinki publishes its city model and an energy atlas that anyone can open in a browser."},
        {"ask": "Would a map or a spreadsheet answer it?", "yes": "Do that instead", "to": "",
         "note": "A model earns its keep when things interact and keep changing. A one-off question often needs less."},
        {"ask": "Is there a free tool for this kind of question?", "yes": "Use it today", "to": "/catalogue/en-roads",
         "note": "En-ROADS is free in a browser: combine climate policies and see the modeled effect."},
        {"ask": "Have data, and someone who can code a little?", "yes": "Adapt an open model", "to": "/catalogue/invest",
         "note": "InVEST is a suite of open models that can be set up for a new place."},
    ],
    "end": {"label": "Build one, or have it built", "sub": "follow the nine stages", "to": "/in-development",
            "note": "The nine stages are not written yet."},
    "reviewed": "2026-10-02",
    "reviewed_by": "questions and their order proposed by Claude; examples from the survey except the map-or-spreadsheet note"},
    "## Plain\n\nFive yes-or-no questions that send you to the least effort that answers your question.\n")

print("catalogue", len(rows), "| questions", len(QUESTIONS))

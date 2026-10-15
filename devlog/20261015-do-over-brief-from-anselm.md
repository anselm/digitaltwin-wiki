# 2026-10-15 — do-over brief, from Anselm

Pasted by Anselm into the project session on 2026-10-15, recorded verbatim
(only the heading levels are shifted down one so the entry has one title).
His own notes in it are dated oct 11 2026. This supersedes the approach in
`20261002-approach-sketch.md` and `20261002-knowledge-model-and-milestones.md`.

## Digital Twin Resource Wiki or Guide Revisted

### REVISITING THE PROBLEM STATEMENT

- right now nobody owns or advocates for 'digital twins' as a whole in a technology/solutions agnostic way
  there are many people offering digital twins such as siemens, nvidia, bentley, eu destination earth ...
  few people advocate for the approach as a whole; there are some organizations worth citing also.

 - the space is moving very fast; i think i will need software agents to aggressively keep updating any evergreen site.

 - if i can do something good it can have real value for the industry; but i can see that if it is not extensible and if it is too complex, nobody will contribute and it will be a solo effort.

### SOLUTION SPACE:

- a generic evergreen 'catch all' site aimed at diverse audiences; lay-people, city-planners etc - real tools and techniques, real resource
  explains what a digital twin is, lists organizations, tools, techniques, data sources, has a running 'recent content' log
  clearly specifies who the audience is; with example persona, their story, their challenges, the solutions here that may help them

- backed by something more real as a back end.

- my goal is a survey of the digital twin space, tools, techniques, books, people, projects
- structured as a series of independent data objects
- somewhat more wiki like; more of a resource, more evergreen
- useful for humans and for machines
- will constantly grow because i will have software agents scanning linked in and twitter - looking at what is new and organizing and curating
- there is an emphasis on being 'evergreen'; a series of somewhat independent articles, articles can be revised, maybe we can allow insitu comments even?
-  not entirely dissimilar from cyborganthropology.com

- things i want to answer for visitors
	- intro
	- what is a digital twin
	- what good is it
	- example tools
	- example data
	- whole systems - our focus on it
	- accessibility - civic access not just professionals
	- moving beyond intuition - possible articles on why our current tools are not good enough; limits of human reasoning

#### A DO OVER: BUILD A SOCIAL KNOWLEDGE SERVICE BACK END AND DATASET

I think we should largely throw away or archive the current essay/approach you built. It's not structured in quite the way I want. I want to build something more evergreen, more extensible.

The approach instead is that I want to build a revised social knowledge service that can be used for many projects, but I want to first exercise it for a digital twins wiki or resource. I want to create a generic knowledge management service, that could be useful for a variety of knowledge management projects, with one use case to start. In the past I had built a social knowledge service before but it was too feature-rich so this is a speed run of the same ideas but in a more granular way.

I see a core back end focus for a knowledge management service aimed with an initial digital twins use case.

1) at the bottom is a concept of how i want to structure data to be as future proof as possible
	- we have an issue of needing to define data types to represent things
	- i feel like this is a folder by itself like /meta or /data-design, talking about best practices?
	- i like ecs as a pattern as i mention often
	- we're going to have a large collection of 'data blobs' - because we want to paint useful information to users
	- probably different flavors of blobs, most are just posts, some may be a description of a person, or a project, or a data source (for a digital twins use case)
	- i've been using an ecs model for describing blobs - see ontology-monster.exe.xyz and https://github.com/anselm/social-knowledge-service
	- for the most details on ecs pattern see: https://github.com/anselm/social-knowledge-service/blob/main/packages/knowledge/DESIGN.md
	- but generally each blob having at least basic features like a unique id, a label, a description, provenance, tags, a depiction
	- i have a project at https://ontology-monster.exe.xyz that is attempting to search for canonical entity and component types
	- i feel like it may be necessary to better write up the design at this level
	- this layer is separate from storage as say mongo and or .md files with front matter or whatever

2) i see a concept of a knowledge store api
	- if we used a packages structure like i did for the social-knowledge-service this could be in packages/knowledge ? i don't know the best way to structure these
	- the domain specific schemas and even examples can go here too - under a theory
	- it exposes a directly imported local javascript api, you can ask it questions
	- i am thinking of storing the actual data just in a folder tree hierarchy, as .yaml or .md or even .json files
	- every object in the datastore has a unique id which should correspond to the folder it is in
	- we would want to try figure out some good tags as in [engine, data, concept, resource, book, website, organization, article, guide, pinned] ?

3) the data is really our focus

	- we have a lot of different artifacts, and we have both tags, and also a directed acyclic path for each artifact, the artifacts use the ecs schema pattern
	- i see topics or areas like people, books, use-cases, guides, terminology, organizations, our-visual-grammar, engines, platforms
	- i see many artifacts as having a geolocation, and provenance and so on
	- there is also probably a public/ or knowledge/ folder for the artifacts if data is stored on disk as ordinary files, i somewhat like disk because lets humans edit the info easily as well and it is esier to have a static site without any database back end, also some assets are too big for a database, in general a digital twin database would be a slice of an extremely large pool of human knowledge; it may not readily fit into a filesystem since filesystems have directed acyclic graphs and each asset has to be at a fixed location - another option is mongo of course

#### UX Foundations

1) I have a lot of opinions about fastify, es6, tailwind, svelte that are already mentioned in global context

2) custom views per page; i am a big fan of an idea where a url refers to a specific artifact, and in this pattern each page or viewed artifact can also have a hint about the kind of view it wants to present. most routers such as in svelte or react are static, they look at the url itself, but in this case the artifact has to be fetched, and then the view associated with that artifact is used to compose the body of the display. this means that elements like a header or sidebar have to be floating and minimizable. the pattern is used on several of my projects and allows some pages to have maps, or to have timelines or just ordinary prose - it works quite well. for example a recent/ page can be custom, can do a database query, find recent posts and enumerate them. there are just so many reasons to have dynamic pages - except routing on how the database specifies the page type rather than on how the url specifies the page type.

#### User Interface Thoughts:

I an thinking of a moderately sober or dry site like cyborganthropology.com - the home page especially as a launching off point has a lot to share immediately:

"""
- Some kind of header
Digital Twins Wiki
Cities, infrastructure, populations and ecosystems

- some kind of very brief top main body area on home page could have an intro - because the topic is overwhelming

Advances in computation, geographic data and AI are expanding what we can simulate, model and predict at the macro scale. Transport planners can test road closures. Utilities can examine how electric vehicles and heat pumps will change civic demands. Fire agencies can estimate where a wildfire will spread. Communities can explore competing proposals and trade-offs for the places they live.

The digital-twin industry is growing around these use cases. Models of real places and systems, supplied with data from the world they represent, accessible not just to city planners but to everybody. Here we compile users and use cases, which engines and platforms underpin them, what they can do today, and how far they have progressed toward whole systems modeling. A further frontier is coming into view: using models to discover ways of living and producing within ecological systems whose interactions exceed our unaided ability to reason about them.

- we may need a table of contents below this?
- we may want pinned entries ? some entries are special... most of the site is just a pile of entries
	[what is a digital twin?]
	[are there whole systems models yet?]
	[the limits of reason: ecological frontiers]
	[so you want to make a digital twin?]
	[the ecological frontier - 2026/06/03]

- there will be a lot of new entries/posts every day in a stream - do we show some here and send people to a /recent page for more?

- we may want to link off to other items - i wonder if this should be a floating navbar?
	[tools]
	[books]
	[people]
	[sites]
	[use-cases]
	[guides]
	[organizations]
	[visual grammar for use cases]
	[engines and platforms]
	[data]
	[terminology]
	[upcoming events]

- i can see other views, map views, calendars and so on

### OTHER NOTES

I do note some things that may be worth mentioning - maybe these are just notes or measurements that we use to test if the site is 'good':

- macro-twins : we're not focused on all digital twins, but mostly on macro economic, social, political, environmental twins, especially whole systems
- visual-grammar: i like the visual grammar we have refined; i think there can be an article about it
- actionable: i think this site is more about helping people as in 'so you want to make a digital twin' - not just a passive knowledge repo
- i suspect there can be extremely rich views; maps, actual simulations
- i think we will have conversational interfaces
- i can even see very pretty 3js views showing real data layers in 3d for example
- we should always try invent and own language as in "bioregional twin"
- tagline?: decision models for watersheds, cities, and bioregions ? Cities, infrastructure, populations and ecosystems?
- somewhere discreet -> a link to tips for ais: llms.txt etc

#### Other resources oct 11 2026

- steve coy and others want to contribute; it is best if we do not add to much to start so they don't feel locked out
- i don't know how to let them edit - should i use attest.monster to have them sign up and then grant them edit perms? this is a bit more work
- in my own reading list on chrome i have a lot of recent posts to organize - lots of good new projects
- in my linked in i have a ton of more recent activity and thinking as well
- i wrote two earlier essays that may not be readable here: https://digital-twins-survey.anselm52491.chatgpt.site/ <- was excellent
- this previous effort: https://twinguide.exe.xyz/ <- not happy with it and hence revision
- i have an extensive interview with steve coy to add to this
- https://anselm.substack.com/p/what-if-time-machines-looking-closer <- may add to this also or link to it

---
about:
  label: Remotion
  description: >-
    Framework for making videos and motion graphics in code with React, fed
    by data and rendered in bulk or played live in a web page, under a
    source-available licence.
  tags:
    - video
    - motion graphics
    - react
    - javascript
    - data-driven video
tool:
  form: source-available JavaScript framework, with a studio, player and cloud rendering
  group: Showing
  homepage: 'https://www.remotion.dev/'
  licence: 'Remotion License: source-available; free for individuals, for-profit organizations with up to 3 employees, non-profits, and anyone evaluating it before commercial use; every other organization needs a paid Company License'
  cost: 'free under the Free License; Company License priced by use (on 2026-10-23, $25 a month per seat for creators, or $0.01 per render with a $100 monthly minimum for automation)'
open:
  source: partly
  data: unknown
  api: 'yes'
  participation: partly
  licence: Remotion License (source-available, not open source)
  note: >-
    The code is public on GitHub and may be modified for one's own use, but
    not sold, rented or relicensed as a derivative of Remotion. The licence
    file says it will change slightly in Remotion 5.0.
relations:
  - predicate: alternative_to
    target: communication/manim
    note: both make video from code; Remotion in React, Manim in Python
provenance:
  origin: agent
  sources:
    - title: Remotion | Make videos programmatically
      url: 'https://www.remotion.dev/'
    - title: 'Remotion License (LICENSE.md, linked from remotion.dev/license)'
      url: 'https://github.com/remotion-dev/remotion/blob/main/LICENSE.md'
    - title: 'GitHub - remotion-dev/remotion'
      url: 'https://github.com/remotion-dev/remotion'
    - title: The core idea | Remotion
      url: 'https://www.remotion.dev/docs/idea'
    - title: Parameterized videos | Remotion
      url: 'https://www.remotion.dev/docs/parameterized-rendering'
    - title: '@remotion/player | Remotion'
      url: 'https://www.remotion.dev/docs/player'
    - title: About us | Remotion
      url: 'https://www.remotion.dev/about'
    - title: Remotion Company Licensing
      url: 'https://www.remotion.pro/license'
  created: '2026-10-23'
  reviewed: '2026-10-23'
  reviewed_by: 'Claude, from the sources listed'
  status: draft
---
Remotion makes videos out of web code. Its idea, in its own documentation, is to give the author a frame number and a blank canvas on which to draw anything with React, the JavaScript library for building web pages. A video is a set of pictures over time; if what is drawn changes with each frame, the result is an animation. A video has a width and height in pixels, a length in frames and a frame rate, and Remotion supplies components for text, images, video, audio and shapes.

Because a video is code, it can take data. The author sets default values and designs the video in Remotion Studio, where those values can also be changed by hand. At render time new values replace them. Data can be fetched first, from a web address for instance, and the length of the video worked out from it. The same template can then be rendered many times with different data, on the author's own machines or in the cloud. The Remotion Player embeds a video in a React web page and changes its content as the viewer interacts, without rendering a file at all. The project now also offers drag-and-drop editing that saves back to code, and instructions for coding agents to write videos.

It is made by Remotion AG of Zurich, Switzerland. Its about page says Remotion started as a side project in 2021 and is founder-owned and profitable; the GitHub repository was created in June 2020. Jonny Burger is listed on the team as Chief Hacker.

Remotion is source-available, not open source. Individuals, for-profit organizations with up to three employees and non-profits may use Remotion free, including commercially, to make videos and images, and may modify it for their own use or to contribute fixes back. Anyone may also use it free while evaluating it, before using it commercially. Other organizations need a paid Company License, which covers the same uses and adds prioritized support. On 2026-10-23 it cost $25 a month per seat for people making videos by hand, or $0.01 per render with a $100 monthly minimum for automated rendering, with an Enterprise License from $500 a month. No one may copy or modify the code to sell, rent or relicense their own version of Remotion.

With the Player, the same component that renders a fixed video can run live in a page, so one piece of work can be both a clip to post and a graphic the reader changes.

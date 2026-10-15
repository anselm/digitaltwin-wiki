<script>
  // Draws any flow morsel: questions down a spine, "no" continues, "yes" exits right.
  let { flow } = $props()
  let picked = $state(null)
  const two = (s, max = 22) => {
    if (s.length <= max) return [s]
    const mid = s.length / 2, sp = [...s.matchAll(/ /g)].map((x) => x.index)
    const cut = sp.reduce((a, b) => (Math.abs(b - mid) < Math.abs(a - mid) ? b : a))
    return [s.slice(0, cut), s.slice(cut + 1)]
  }
  const steps = flow.steps.map((s, i) => ({ ...s, y: 70 + i * 90, ask2: two(s.ask), yes2: two(s.yes, 12) }))
  const endY = 70 + steps.length * 90 + 6
  const H = endY + 64
  const pick = (x) => (picked = x)
  const key = (e, x) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(x) } }
</script>

<svg class="flow" viewBox="0 0 362 {H}" role="img" aria-label="{flow.title} A flow of {steps.length} yes or no questions.">
  <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ahp" d="M0 0L10 5L0 10z" /></marker></defs>
  <rect class="st" x="10" y="6" width="196" height="38" rx="19" /><text class="tb" x="108" y="30" text-anchor="middle">{flow.start}</text>
  <line class="a" x1="108" y1="44" x2="108" y2="68" marker-end="url(#ah)" />
  {#each steps as s}
    <rect class="d" x="10" y={s.y} width="196" height="58" rx="3" />
    {#each s.ask2 as line, i}<text class="t" x="108" y={s.y + (s.ask2.length === 1 ? 34 : 25 + i * 18)} text-anchor="middle">{line}</text>{/each}
    <line class="a" x1="206" y1={s.y + 29} x2="234" y2={s.y + 29} marker-end="url(#ah)" /><text class="s" x="220" y={s.y + 23} text-anchor="middle">yes</text>
    <g class="go" class:on={picked === s} role="button" tabindex="0" onclick={() => pick(s)} onkeydown={(e) => key(e, s)}>
      <rect class="o" x="240" y={s.y + 5} width="112" height="48" rx="3" />
      {#each s.yes2 as line, i}<text class="tb" x="296" y={s.y + (s.yes2.length === 1 ? 34 : 26 + i * 17)} text-anchor="middle">{line}</text>{/each}
    </g>
    <line class="a" x1="108" y1={s.y + 58} x2="108" y2={s.y + 84 + (s === steps.at(-1) ? 6 : 0)} marker-end="url(#ah)" /><text class="s" x="118" y={s.y + 76}>no</text>
  {/each}
  <g class="go" class:on={picked === flow.end} role="button" tabindex="0" onclick={() => pick(flow.end)} onkeydown={(e) => key(e, flow.end)}>
    <rect class="o" x="10" y={endY} width="196" height="54" rx="3" />
    <text class="tb" x="108" y={endY + 23} text-anchor="middle">{flow.end.label}</text><text class="s2" x="108" y={endY + 42} text-anchor="middle">{flow.end.sub}</text>
  </g>
</svg>
<p class="flow-out" aria-live="polite">
  {#if picked}{picked.yes || picked.label}. {picked.note} {#if picked.to}<a href={picked.to}>Go there</a>{/if}
  {:else}Tap a box to see where it leads.{/if}
</p>

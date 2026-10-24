<script>
  let { data } = $props()
  const { W, H, P } = data.dims
  const sign = (n) => (n > 0 ? '+' : '') + n
  const citations = [...new Set(data.vitals.map((v) => v.citation))]
</script>

<h1 class="text-3xl mt-6">{data.label}</h1>
{#if data.description}<p class="text-muted mt-1">{data.description}</p>{/if}
{#if data.content}<div class="prose mt-4 max-w-prose">{@html data.content}</div>{/if}

{#if data.single}<p class="text-sm mt-2"><a href="/vitals/">All vitals</a> · <a href="/cards/vitals/{data.vitals[0].id}.png">card image</a></p>{/if}

<div class="mt-8 grid gap-x-8 gap-y-10 {data.single ? '' : 'lg:grid-cols-2'}">
  {#each data.vitals as v}
    <section id={v.id} class={v.kind === 'thresholds' ? 'lg:col-span-2' : ''}>
      <div class="flex items-baseline justify-between gap-3 flex-wrap">
        <h2 class="text-xl">{#if data.single}{v.title}{:else}<a href="/vitals/{v.id}/" class="text-ink hover:text-accent">{v.title}</a>{/if}</h2>
        {#if v.latest}<p class="text-sm tabular"><span class="text-ink">{v.latest.value} {v.unit}</span><span class="text-muted">{' · '}{v.latest.date}</span>{#if v.latest.anomaly != null}<span class="text-accent">{' · '}{sign(v.latest.anomaly)} {v.unit}</span><span class="text-muted">{' vs '}{v.baselineName}</span>{/if}</p>{/if}
      </div>
      {#if v.preliminary}<p class="text-xs text-muted tabular">preliminary {v.preliminary.date}: {v.preliminary.value} {v.unit}{#if v.preliminary.anomaly != null}, {sign(v.preliminary.anomaly)} {v.unit} vs {v.baselineName}{/if}</p>{/if}
      {#if v.kind === 'thresholds'}
      <svg viewBox="0 0 {W} {v.H}" class="w-full mt-2" role="img" aria-label="{v.title}">{@html v.svg}</svg>
      <p class="text-xs text-muted mt-1">Bars run from the minimum to the maximum estimated threshold, the dot at the central estimate; highlighted bars have their minimum already passed, the vertical line is today's warming from the <a href="/vitals/gmst/">global temperature series</a>. {v.source} · read from <a href={v.url} rel="noopener">this copy</a> · <a href="/vitals/{v.id}.json">json</a> · {v.licence} · {v.note}</p>
      {:else}
      <svg viewBox="0 0 {W} {H}" class="w-full mt-2" role="img" aria-label="{v.title}, {v.firstYear} to {v.curYear}{v.kind === 'timeline' ? '' : ', by day of year'}">
        {#each v.ticksY as t}<line x1={P.l} x2={W - P.r} y1={t.y} y2={t.y} stroke="var(--line)" stroke-width=".6" /><text x={P.l - 5} y={t.y + 3} text-anchor="end" font-size="15" fill="var(--muted)">{t.label}</text>{/each}
        {#each v.ticksX as t}<text x={t.x} y={H - 5} text-anchor="middle" font-size="15" fill="var(--muted)">{t.label}</text>{/each}
        {#if v.kind === 'timeline'}
        {#if v.paths.context}<path d={v.paths.context} fill="none" stroke="var(--muted)" stroke-width="1.4" opacity=".45" />{/if}
        {#if v.paths.baseline}<path d={v.paths.baseline} fill="none" stroke="var(--ink)" stroke-width="1" />{/if}
        <path d={v.paths.current} fill="none" stroke="var(--accent)" stroke-width="1.6" />
        {:else}
        {#each v.paths.past as p}<path d={p.d} fill="none" stroke="var(--muted)" stroke-width=".7" opacity={p.alpha}><title>{p.year}</title></path>{/each}
        <path d={v.paths.baseline} fill="none" stroke="var(--ink)" stroke-width="1.6" />
        <path d={v.paths.current} fill="none" stroke="var(--accent)" stroke-width="2" />
        {#if v.paths.prelim}<path d={v.paths.prelim} fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="3 3" />{/if}
        {/if}
      </svg>
      <p class="text-xs text-muted mt-1">{v.firstYear}–{v.curYear}{#if v.baselineName} · baseline {v.baselineName}{/if} · {v.source} · <a href={v.url} rel="noopener">data</a> · <a href="/vitals/{v.id}.json">json</a> · {v.licence} · fetched {v.fetched}{#if v.note} · {v.note}{/if}</p>
      {/if}
    </section>
  {/each}
</div>

<p class="text-xs text-muted mt-10 max-w-prose">Citations: {#each citations as c, i}{c}{i < citations.length - 1 ? ' · ' : ''}{/each}</p>

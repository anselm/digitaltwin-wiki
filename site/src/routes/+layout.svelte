<script>
  import '../app.css'
  let { data, children } = $props()
  let open = $state(false)
</script>

<a class="mark" href="/">{data.site.name}{#if data.staging}<span> · staging</span>{/if}</a>

<div class="menu">
  <button aria-label="Menu" aria-expanded={open} onclick={() => (open = !open)}><span></span></button>
  {#if open}
    <nav onclick={() => (open = false)}>
      <a href="/flows/so-you-want-a-digital-twin/">So you want a digital twin?</a>
      <a href="/#questions">Questions</a>
      <a href="/#instruments">Instruments</a>
      <a href="/concepts/digital-twin/">What is a digital twin?</a>
      <a href="/in-development/">In development</a>
      <a href="/about/audience-and-goals/">Who this is for</a>
      <a href="/llms.txt">For AI assistants</a>
    </nav>
  {/if}
</div>

<main class="page">
  {@render children()}
  <footer class="colophon">
    <p>Free to read, free to reuse, open to correction. Kept by people who build these tools and people who use them. <a href="/about/audience-and-goals/">Who this is for, and what it is trying to do</a>.</p>
    <p>Symbols from the Noun Project, CC BY 3.0, recoloured: city block by Savannah Vize; train junction by Worakamon Saykajarn; Transmission Tower by Masha Eizner; river by Creative Mahira; farm crops by Made; biodiversity by Ali Khamdan; atmosphere by rendicon; Meeting by Creative Stall; Fire by Gregor Cresnar; sensory by mangunkarsa.</p>
  </footer>
</main>

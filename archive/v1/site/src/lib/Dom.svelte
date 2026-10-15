<script>
  // A domain label: the survey's symbol, its pastel as a rule under dark text.
  let { d, text = d.name, href = `/domain/${d.id}/` } = $props()
</script>

<a class="dom" style="--theme:{d.colour}" {href}><img src="/themes/{d.id}.svg" alt="" />{text}</a>

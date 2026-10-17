import { store, show, card } from '$lib/store.server.js'
export const prerender = true
export const trailingSlash = 'always'
export const load = () => ({
  site: store.get('')?.about || { label: 'Knowledge', description: '' },
  sections: store.children('').filter((e) => e.section && e.section.nav !== false).sort((a, b) => a.section.order - b.section.order).map((e) => ({ ...card(e), count: store.descendants(e.id).length })),
  staging: show.length > 1
})

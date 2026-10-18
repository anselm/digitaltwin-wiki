import { store, show, card } from '$lib/store.server.js'
export const prerender = true
export const trailingSlash = 'always'
export const load = () => ({
  site: store.get('')?.about || { label: 'Knowledge', description: '' },
  sections: store.children('').filter((e) => e.section && e.section.nav !== false).sort((a, b) => a.section.order - b.section.order).map((e) => ({ ...card(e), area: e.section.area || 'resources', count: store.descendants(e.id).length })),
  // The sidebar is read in areas: what is new, then practice, the technologies, the theory, and the rest as resources.
  areas: [['new', 'New'], ['practice', 'Practice'], ['technologies', 'Technologies'], ['theory', 'Theory'], ['resources', 'Resources']],
  staging: show.length > 1
})

import { corpus, show } from '$lib/corpus.server.js'
export const load = () => ({ site: corpus.site, staging: show.includes('proposed') })

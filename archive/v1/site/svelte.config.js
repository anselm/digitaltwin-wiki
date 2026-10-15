import adapter from '@sveltejs/adapter-static'
export default {
  kit: { adapter: adapter({ pages: 'dist', assets: 'dist' }), prerender: { handleHttpError: 'fail' } }
}



/**
 * 使用方式
 */

export default {
  fetch () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          title: 'mm-ssr',
          keyword: 'react, ssr, javascript',
          description: ''
        }) 
      })   
    })
  },

  head (state) {
    return {
      title: state.title,
      keyword: state.keyword,
      description: state.description,
      link: [
        { rel: 'stylesheet', href: '/css/index.css' },
        { rel: 'favicon', href: 'favicon.ico' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', async: true, defer: true },
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            unsafe: '<p>hello</p>'
          }
        }
      ]
    }
  }

  render (state) {
    return <div>
      <h1>{ state.title }</h1>
      <h2> {state.description }</h2>
      <h2> { state.keyword } </h2>
    </div>
  } 
}
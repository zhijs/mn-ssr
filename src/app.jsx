
import React from 'react'; 


/**
 * 使用方式
 */
export default {
  /**
   * 
   * @param {Object} param.req 请求部分信息
   * @param {function} param.redirect 重定向跳转，用于请求出错时做重定向其他页面操作
   */
  fetch ({ req, redirect }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          title: 'mm-ssr',
          keyword: 'react, ssr, javascript',
          description: 'react ssr'
        }) 
      }, 1000)   
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
  },

  render (state) {
    return () => {
      return (<div>
        <h1>{ state.title }</h1>
        <h2> {state.description }</h2>
        <h2> { state.keyword } </h2>
      </div>)
    }
  } 
}
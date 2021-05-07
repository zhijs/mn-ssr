/**
 * 导出一个中间件
 */
import app from '../src/app'
import jsdom from 'jsdom'
import generatorHead from '../share/head'
import ReactDOMServer from 'react-dom/server'

const { JSDOM } = jsdom;

const renderHtml = async (ctx) => {
  const { fetch, head, render }   = app
  let state = {}
  let heads
  let components
  try {
      // fetch 方法存在的情况下
    if (fetch && typeof fetch === 'function') {
      state = await fetch(ctx)
    }

    // head 方法存在的情况下
    if (head && typeof head === 'function') {
      heads = head(state)
    }

    // 加载模板
    const dom = await JSDOM.fromFile('./index.html')
    const document = dom.window.document

    // 填充自定义的 head
    if (heads) {
      generatorHead(document, head)
    }

    // 填充服务端渲染的数据
    generatorHead(document, {
      {
        script: [
          {
            innerHTML: `window.__ssrFirstPageData__=${JSON.stringify(state)}`   
          }  
        ]
      }
    })
   
    component = render(state)

    // 渲染成字符串
    const content = ReactDOMServer.renderToString(components);

   document.querySelector('#app').innerHTML = content
   
   ctx.body = content

  } catch (e) {
    ctx.body = JSON.stringify(e)
  }
  
}

export default renderHtml
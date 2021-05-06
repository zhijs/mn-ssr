/**
 * 导出一个中间件
 */
import app from '../src/app'
import jsdom from 'jsdom'
const renderHtml = async (ctx) => {
  const { fetch, head, render }   = app
  let state = {}
  let heads = {}
  let components

  // fetch 方法存在的情况下
  if (fetch && typeof fetch === 'function') {
    state = await fetch(ctx)
  }

  // head 方法存在的情况下
  if (head && typeof head === 'function') {
    heads = head(state)
  }

  components = render(state)
    
  
  
  
}

export default renderHtml
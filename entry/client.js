import app from '../src/app'
import generatorHead from '../share/head'
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'

const {fetch, head, render} = app

const firstPageDataStr = window['__ssrFirstPageData__'] || '{}'
const firstPageData = JSON.parse(firstPageDataStr)

let Com

const MainApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  if (!Object.keys(firstPageData).length) {
    useEffect(() => {
      fetch({}).then((state) => {
        generatorHead(document, head(state)) // 构建 head
        Com = render(state)
        setIsLoading(false)
      })
    }, [])
  } else {
    setIsLoading(false)
  }
  
  // 后续可以支持自定义 loading
  if (isLoading) {
    return <div>正在加载中</div>
  } else {
    return <Com/>
  }
}

if (Object.keys(firstPageData).length) {
  ReactDOM.hydrate(<MainApp/>, document.querySelector('#app'))  
} else {
  ReactDOM.render(<MainApp/>, document.querySelector('#app'))
}




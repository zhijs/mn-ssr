/***
 * @description head 中标签的处理
 */

 const generatorTags = (document) => {
    const head =  document.getElementsByTagName('head')[0]
    return {
      tittle: (tittle) => {
        document.tittle = tittle  
      },
      keywords: (keywords) => {
        keywordDom = document.querySelector("meta[name=keywords]");
        if (keywordDom) { // 修改内容
          keywordDom.setAttribute('content', keywords)
        } else {
          const keywordTag = document.createElement('meta');
          keywordTag.name = 'keywords'
          keywordTag.setAttribute('content', keywords)
          head.appendChild(keywordTag);
        }
      },
      description: (description) => {
        desDom = document.querySelector("meta[name=description]");
        if (desDom) { // 修改内容
          desDom.setAttribute('content', description)
        } else {
          const desTag = document.createElement('meta');
          desTag.name = 'description'
          desTag.setAttribute('content', description)
          head.appendChild(desTag);
        }
      },
      link: (links) => {
        const fragment = document.createDocumentFragment();
        for(let i = 0; i < links.length; i++) {
          const link = document.createElement('link')
          Object.keys(links[i]).map((key) => {
            link.setAttribute(key, link[i][key])  
          })
          fragment.appendChild(link)
        }
        links && links。length && head.appendChild(fragment)
      },
      script: (scripts) => {
        const fragment = document.createDocumentFragment();
        for(let i = 0; i < scripts.length; i++) {
          const script = document.createElement('script')
          if (scripts[i].type === 'application/ld+json') {
            script.setAttribute(type, scripts[i].type)
            script.innerText = scripts[i].json
          } else {
            Object.keys(scripts[i]).map((key) => {
              if (key === 'innerHTML'){
                script.innerHTML = scripts[i][key]
              } else {
                script.setAttribute(key, scripts[i][key]) 
              }
               
            })
          }
          fragment.appendChild(script)
        }
      }

    }  
 }
 export default generatorTags
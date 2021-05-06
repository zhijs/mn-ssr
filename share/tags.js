/***
 * @description head 中标签的处理
 */

 const generatorTags = (document) => {
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
          document.getElementsByTagName('head')[0].appendChild(keywordTag);
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
          document.getElementsByTagName('head')[0].appendChild(desTag);
        }
      }
    }  
 }
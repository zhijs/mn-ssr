

import generatorTags from './tags'
/**
 * @description 处理 head 节点，服务端和客户端共用
 * 客户端利用原生 dom 节点修改/插入
 * 服务端利用 jsdom 节点修改/插入
 * 
 * @param document 在服务端就是 jsdom.winwo.document, 客户端就是 document
 * @param headsObj head 对象
 */
 
 const generatorHead = (document, headsObj) => {
   const generatorHeadFnMap = generatorTags(document)
   return Object.keys(headsObj).forEach((tag) => {
     console.log('tag', tag)
     generatorHeadFnMap[tag](headsObj[tag])    
   })
 }

 export default generatorHead


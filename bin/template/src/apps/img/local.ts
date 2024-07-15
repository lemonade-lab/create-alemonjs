import { Messages } from 'alemonjs'
import { imgae } from '../../image'
const mesasge = new Messages()
mesasge.response(/^(#|\/)?柠檬帮助$/, async e => {
  const img = await imgae.createHelp({
    data: [
      {
        id: 1,
        group: '指令示范效果',
        list: [
          {
            id: 1,
            name: '/百度一下',
            doc: '二维码'
          },
          {
            id: 2,
            name: '/你好呀',
            doc: '上下文机制'
          },
          {
            id: 2,
            name: '/原神黄历',
            doc: '网络图片'
          }
        ]
      }
    ]
  })
  if (typeof img != 'boolean') e.reply(img)
})
mesasge.response(/^(#|\/)?柠檬图标$/, async e => {
  const segment = e.segment
  const img = segment.img('public/img/help/icon.jpg')
  if (typeof img != 'boolean') e.reply(img)
})
export const TestLocal = mesasge.ok

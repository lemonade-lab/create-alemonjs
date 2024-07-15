import { Messages } from 'alemonjs'
const mesasge = new Messages()
mesasge.response(/^(#|\/)?百度一下$/, async e => {
  const segment = e.segment
  const img = await segment.qrcode('https://www.baidu.com/')
  if (typeof img != 'boolean') e.reply(['百度一下,你就知道', img])
})
export const TestQrcode = mesasge.ok

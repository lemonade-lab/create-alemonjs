import { Messages } from 'alemonjs'
const mesasge = new Messages()
mesasge.response(/^(#|\/)?数组消息$/, async e => {
  e.reply(['123\n', '456', '789'])
})
export const TestMessage = mesasge.ok

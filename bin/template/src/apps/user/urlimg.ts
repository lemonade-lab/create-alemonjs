import { Messages } from 'alemonjs'
const mesasge = new Messages()
mesasge.response(/^(#|\/)?原神黄历$/, async e => {
  const segment = e.segment
  e.reply(segment.http('https://api.xingzhige.com/API/yshl/'))
})
mesasge.response(/^(#|\/)?个人头像$/, async e => {
  const segment = e.segment
  e.reply(segment.http(e.user_avatar))
})
export const TestUrl = mesasge.ok

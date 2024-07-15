import { Messages } from 'alemonjs'
const mesasge = new Messages()
mesasge.response(/^(#|\/)?艾特一下$/, async e => {
  const segment = e.segment
  e.reply([segment.at(e.user_id), '艾特一下'])
  if (segment.atChannel && e.channel_id) {
    e.reply(segment.atChannel(e.channel_id))
  }
  if (segment.link) {
    e.reply(segment.link('阿柠檬', 'https://alemonjs.com'))
  }
})
export const TestAt = mesasge.ok

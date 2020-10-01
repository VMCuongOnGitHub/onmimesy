const ChatModule = {
  state: {
    chats: {}
  },
  mutations: {
    setChats (state, payload) {
      payload["0"] = {name: "Default"}
      state.chats = payload
    }
  },
  actions: {
    sendMessage (context, payload) {
      let chatID = payload.chatID
      const message = {
        user: payload.username,
        content: payload.content,
        date: payload.date
      }
    },
    getters: {
      chats (state) {
        return state.chats
      }
    }
``}
}

export default ChatModule

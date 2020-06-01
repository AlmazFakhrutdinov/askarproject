export const state = () => ({
  chatItems: null,
  currentUserId: 1,
  currentUserAvatar: 'https://picsum.photos/id/237/50/50'
})

export const mutations = {
  setChatItems(state, data) {
    state.chatItems = data
  },
  addMessage(state, [userId, avatar, chatIndex, message]) {
    state.chatItems[chatIndex].chatList.push({
      avatar,
      userId,
      message
    })
  },
  resetUnreadMessageNumber(state, chatIndex) {
    state.chatItems[chatIndex].unreadMessages = 0
  }
}

export const actions = {
  fetchChatItems({ commit }) {
    commit('setChatItems', data)
  },
  fetchMessage({ commit }, [userId, userAvatar, chatIndex, message]) {
    commit('addMessage', [userId, userAvatar, chatIndex, message])
  }
}

const data = [
  {
    firstName: 'Елена',
    lastName: 'Александровна',
    online: false,
    unreadMessages: 4,
    avatar: 'https://picsum.photos/id/231/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/231/50/50',
        userId: 2,
        autor: 'Елена',
        message: 'Ты домашку сделал?'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '1нет еще а ты?'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message:
          '        2Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum temporibus veritatis numquam modi consectetur amet facere, assumenda molestias non optio ad delectus illo itaque hic, velit reprehenderit corrupti ex! Sapiente voluptate, incidunt sint explicabo saepe iste aliquid officia quam'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message:
          '        3Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum temporibus veritatis numquam modi consectetur amet facere, assumenda molestias non optio ad delectus illo itaque hic, velit reprehenderit corrupti ex! Sapiente voluptate, incidunt sint explicabo saepe iste aliquid officia quam'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message:
          '        4Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum temporibus veritatis numquam modi consectetur amet facere, assumenda molestias non optio ad delectus illo itaque hic, velit reprehenderit corrupti ex! Sapiente voluptate, incidunt sint explicabo saepe iste aliquid officia quam'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message:
          '        5Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rerum temporibus veritatis numquam modi consectetur amet facere, assumenda molestias non optio ad delectus illo itaque hic, velit reprehenderit corrupti ex! Sapiente voluptate, incidunt sint explicabo saepe iste aliquid officia quam'
      }
    ]
  },
  {
    firstName: 'Денис',
    lastName: 'Леонидович',
    online: false,
    unreadMessages: 1,
    avatar: 'https://picsum.photos/id/232/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/232/50/50',
        userId: 3,
        autor: 'Денис',
        message: 'Пошли на компы'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Го'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Родичи не отпускают'
      },
      {
        avatar: 'https://picsum.photos/id/232/50/50',
        userId: 3,
        autor: 'Денис',
        message: 'Лол'
      }
    ]
  },

  {
    firstName: 'Федор',
    lastName: 'Бедросович',
    online: true,
    unreadMessages: 0,
    avatar: 'https://picsum.photos/id/239/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/23/50/50',
        userId: 4,
        autor: 'Федор',
        message: 'Я не сдал'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      }
    ]
  },
  {
    firstName: 'Федор',
    lastName: 'Бедросович',
    online: true,
    unreadMessages: 15,
    avatar: 'https://picsum.photos/id/239/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/23/50/50',
        userId: 4,
        autor: 'Федор',
        message: 'Я не сдал'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '1Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '2Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '3Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '4Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '5Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '6Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '7Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '8Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '9Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '10Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '11Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '12Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '13Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '14Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '15Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '16Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '17Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '18Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '19Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '20Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '21Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: '22Ну ты лошара, я все сдал! А ты лошааааааааараааааа'
      }
    ]
  },
  {
    firstName: 'Денис',
    lastName: 'Леонидович',
    online: false,
    unreadMessages: 1,
    avatar: 'https://picsum.photos/id/232/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/232/50/50',
        userId: 3,
        autor: 'Денис',
        message: 'Пошли на компы'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Го'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Бля родичи не отпускают'
      }
    ]
  },
  {
    firstName: 'Денис',
    lastName: 'Леонидович',
    online: false,
    unreadMessages: 1,
    avatar: 'https://picsum.photos/id/232/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/232/50/50',
        userId: 3,
        autor: 'Денис',
        message: 'Пошли на компы'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Го'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Бля родичи не отпускают'
      }
    ]
  },
  {
    firstName: 'Денис',
    lastName: 'Леонидович',
    online: false,
    unreadMessages: 1,
    avatar: 'https://picsum.photos/id/232/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/232/50/50',
        userId: 3,
        autor: 'Денис',
        message: 'Пошли на компы'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Го'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Бля родичи не отпускают'
      }
    ]
  },
  {
    firstName: 'Денис',
    lastName: 'Леонидович',
    online: false,
    unreadMessages: 1,
    avatar: 'https://picsum.photos/id/232/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/232/50/50',
        userId: 3,
        autor: 'Денис',
        message: 'Пошли на компы'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Го'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Бля родичи не отпускают'
      }
    ]
  },
  {
    firstName: 'Денис',
    lastName: 'Леонидович',
    online: false,
    unreadMessages: 1,
    avatar: 'https://picsum.photos/id/232/50/50',
    chatList: [
      {
        avatar: 'https://picsum.photos/id/232/50/50',
        userId: 3,
        autor: 'Денис',
        message: 'Пошли на компы'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Го'
      },
      {
        avatar: 'https://picsum.photos/id/237/50/50',
        userId: 1,
        autor: 'Борис',
        message: 'Бля родичи не отпускают'
      }
    ]
  }
]

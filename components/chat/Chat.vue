<template>
  <div class="container">
    <div class="menu">
      <input
        v-model="targetChatName"
        class="menu__input"
        type="text"
        placeholder="Поиск"
      />
      <div class="menu__users-container">
        <menu-list
          :active-chat-index="activeChatIndex"
          :menu-list-indexes="menuListIndexes"
          :chat-items="chatItems"
          @setActiveChatIndex="setActiveChatIndex"
        />
      </div>
    </div>
    <div class="chat">
      <p class="chat__user-name">
        Алена Александровна
      </p>
      <div class="chat__title">
        <img
          src="@/assets/icons/book.svg"
          class="chat__title-icon"
          alt="book"
        />
        <p class="chat__lesson-topik">
          математический анализ
        </p>
      </div>
      <div id="chat-container" class="chat__container">
        <messages-list
          :current-chat="currentChat"
          :current-user-id="currentUserId"
        />
      </div>
      <controls @addMessage="addMessage" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import MenuList from '@/components/chat/chat-items/MenuList'
import MessagesList from '@/components/chat/chat-items/MessagesList'
import Controls from '@/components/chat/chat-items/Controls'

export default {
  components: {
    MenuList,
    MessagesList,
    Controls
  },
  data() {
    return {
      targetChatName: '',
      activeChatIndex: null,
      menuListIndexes: []
    }
  },
  mounted() {
    this.fetch()
  },
  computed: {
    ...mapState('chat', ['chatItems', 'currentUserId', 'currentUserAvatar']),
    currentChat() {
      if (this.chatItems && this.chatItems[this.activeChatIndex]) {
        return this.chatItems[this.activeChatIndex].chatList
      } else {
        return []
      }
    }
  },
  methods: {
    ...mapMutations('chat', ['setActiveChatIndex', 'resetUnreadMessageNumber']),
    ...mapActions('chat', ['fetchChatItems', 'fetchMessage']),
    async fetch() {
      await this.fetchChatItems()
      for (let i = 0; i <= this.chatItems.length - 1; i++) {
        this.menuListIndexes.push(i)
      }
      this.activeChatIndex = 0
    },
    async addMessage() {
      if (!this.message) return

      await this.fetchMessage([
        this.currentUserId,
        this.currentUserAvatar,
        this.activeChatIndex,
        this.message
      ])
      this.message = ''
      this.scrollToMessage()
    },
    scrollToMessage() {
      const currentMessage = this.$el.querySelector('#chat-container')
      currentMessage.scrollTop = currentMessage.scrollHeight
    },
    scrollToUnreadMessage() {
      if (this.chatItems) {
        const chatLength = this.chatItems[this.activeChatIndex].chatList.length
        const unreadMessageIndex =
          this.chatItems[this.activeChatIndex].unreadMessages || 0
        const targetMessageIndex = chatLength - 1 - unreadMessageIndex
        const messages = this.$el.querySelectorAll('#chat-item')
        messages[targetMessageIndex].scrollIntoView()
        this.resetUnreadMessageNumber(this.activeChatIndex)
      }
    },
    setActiveChatIndex(menuItemIndex) {
      this.activeChatIndex = menuItemIndex
    }
  },
  watch: {
    activeChatIndex() {
      setTimeout(() => {
        this.scrollToUnreadMessage()
      }, 0)
    },
    targetChatName() {
      if (this.chatItems) {
        const targetChatName = this.targetChatName.toLowerCase()
        this.menuListIndexes = this.chatItems.map((item, index) => {
          if (
            item.firstName.toLowerCase().includes(targetChatName) ||
            item.lastName.toLowerCase().includes(targetChatName)
          ) {
            return index
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 700px;
  width: 875px;
  margin-left: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: $white;
  border-radius: 3px;
}

.menu {
  height: 100%;
  border-right: 1px solid $pattens-blue;
  .active {
    background-color: $zircon;
  }
  &__input {
    width: 205px;
    height: 50px;
    margin: 30px 30px 0px 30px;
    padding-left: 50px;
    border-radius: 3px;
    border: 1px solid $blue-haze;
    background-color: $zircon;
    background-image: url('../../assets/icons/search.svg');
    background-repeat: no-repeat;
    background-position-x: 22px;
    background-position-y: 18px;
    &::placeholder {
      color: $cadet-blue;
    }
  }
  &__users-container {
    overflow-y: scroll;
    height: 616px;
    &::-webkit-scrollbar {
      width: 5px;
      border-radius: 3px;
      background-color: $white;
    }
    &::-webkit-scrollbar-thumb {
      width: 1px;
      border-radius: 3px;
      background-color: $pattens-blue;
    }
    &::-webkit-scrollbar-track {
      background: $zircon;
    }
  }
}

.chat {
  width: 100%;
  &__user-name {
    margin-top: 20px;
    margin-left: 30px;
    line-height: 20px;
    color: $deep-cove;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  &__title {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 16px;
    margin-left: 30px;
    font-size: 14px;
    line-height: 18px;
    color: $cadet-blue;
  }
  &__lesson-topik {
    margin-left: 10px;
  }
  &__container {
    height: 522px;
    padding: 0 30px 10px 30px;
    overflow-y: scroll;
    border-top: 1px solid $pattens-blue;
    border-bottom: 1px solid $pattens-blue;
    border-right: 1px solid $pattens-blue;
    &::-webkit-scrollbar {
      width: 5px;
      border-radius: 3px;
      background-color: $white;
    }
    &::-webkit-scrollbar-thumb {
      width: 1px;
      border-radius: 3px;
      background-color: $pattens-blue;
    }
    &::-webkit-scrollbar-track {
      background: $zircon;
    }
  }
}
</style>

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
        <div
          v-for="(item, index) in chatItems"
          :key="index"
          :class="{ active: activeChatIndex === index }"
          class="menu__list"
          @click="activeChatIndex = index"
        >
          <div
            v-show="menuListIndexes.includes(index)"
            class="menu__hiding-wrapper"
          >
            <div class="menu__item">
              <img class="menu__img" :src="item.avatar" alt="avatar" />
              <span
                :style="{
                  backgroundColor: item.online ? '#5ECBA1' : '#C9D2E1'
                }"
                class="menu__online-status"
              ></span>
              <div class="menu__user-full-name">
                <p>{{ item.firstName }}</p>
                <p>{{ item.lastName }}</p>
              </div>
              <span
                v-if="item.unreadMessages"
                class="menu__unread-message-number"
              >
                {{ item.unreadMessages }}
              </span>
            </div>
            <p class="menu__last-message">
              {{ item.chatList[item.chatList.length - 1].message }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="chat">
      <p class="chat__user-name">
        Алена Александровна
      </p>
      <div class="chat__title">
        <img
          src="../../assets/icons/book.svg"
          class="chat__title-icon"
          alt="book"
        />
        <p class="chat__lesson-topik">
          математический анализ
        </p>
      </div>
      <div id="chat-container" class="chat__container">
        <div
          v-for="(item, index) in currentChat"
          id="chat-item"
          :key="index"
          class="chat__item"
          :style="{
            flexDirection: item.userId === currentUserId ? 'row-reverse' : 'row'
          }"
        >
          <img
            v-if="isHiddenImg(index)"
            :style="{
              margin:
                item.userId === currentUserId
                  ? '0px 0px 0px 20px'
                  : '0px 20px 0px 0px'
            }"
            class="chat__img"
            :src="item.avatar"
            alt="message"
          />
          <span
            v-else
            :style="{
              margin:
                item.userId === currentUserId
                  ? '0px 0px 0px 20px'
                  : '0px 20px 0px 0px'
            }"
            class="chat__img"
          >
          </span>
          <p
            :style="{
              backgroundColor:
                item.userId === currentUserId ? '#DFEDFF' : '#F9FAFF'
            }"
            class="chat__message"
          >
            {{ item.message }}
          </p>
        </div>
      </div>

      <div class="chat__controls">
        <input
          v-model="message"
          class="chat__input"
          type="text"
          placeholder="Написать сообщение"
        />
        <img
          class="chat__emoji-icon"
          src="../../assets/icons/emoji.svg"
          alt="emoji"
          @mouseenter="isEmoji = true"
          @mouseleave="closeEmoji"
        />
        <div
          class="chat__emoji-container"
          @mouseleave="closeEmoji"
          @mousemove="removeTimerIndex"
        >
          <transition name="fade">
            <emoji
              v-show="isEmoji"
              class="chat__emoji"
              :is-hidden-emoji="isHiddenEmoji"
              @addEmoji="addEmoji"
            />
          </transition>
        </div>
        <svg
          class="chat__message-btn"
          viewBox="0 0 100 150"
          xmlns="http://www.w3.org/2000/svg"
          @click="addMessage"
        >
          <line
            x1="-43"
            y1="12"
            x2="110"
            y2="73"
            stroke="#2286ef"
            stroke-width="15"
            stroke-linecap="round"
          />
          <line
            x1="-43"
            y1="138"
            x2="110"
            y2="73"
            stroke="#2286ef"
            stroke-width="15"
            stroke-linecap="round"
          />
          <line
            x1="-13"
            y1="73"
            x2="110"
            y2="73"
            stroke="#2286ef"
            stroke-width="15"
            stroke-linecap="round"
          />
          <line
            x1="-13"
            y1="73"
            x2="-43"
            y2="12"
            stroke="#2286ef"
            stroke-width="15"
            stroke-linecap="round"
          />
          <line
            x1="-13"
            y1="73"
            x2="-43"
            y2="138"
            stroke="#2286ef"
            stroke-width="15"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Emoji from '@/components/chat/Emoji'

export default {
  components: {
    Emoji
  },
  data() {
    return {
      targetChatName: '',
      message: '',
      activeChatIndex: null,
      isEmoji: false,
      isHiddenEmoji: false,
      emojiTimerIndex: null,
      menuListIndexes: []
    }
  },
  mounted() {
    this.fetch()
    this.isHiddenEmoji = true
  },
  computed: {
    ...mapState('chat', ['chatItems', 'currentUserId', 'currentUserAvatar']),
    currentChat() {
      if (this.chatItems && this.chatItems[this.activeChatIndex]) {
        return this.chatItems[this.activeChatIndex].chatList
      } else {
        return false
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
    isHiddenImg(index) {
      const currentChat = this.currentChat
      if (index === currentChat.length - 1) {
        return true
      } else if (currentChat[index].userId === currentChat[index + 1].userId) {
        return false
      } else {
        return true
      }
    },
    addEmoji(emoji) {
      this.message = this.message + emoji
    },
    closeEmoji() {
      this.emojiTimerIndex = setTimeout(() => {
        this.isEmoji = false
      }, 400)
    },
    removeTimerIndex() {
      clearTimeout(this.emojiTimerIndex)
    },
    addMessage() {
      if (!this.message) return

      this.fetchMessage([
        this.currentUserId,
        this.currentUserAvatar,
        this.activeChatIndex,
        this.message
      ])
      this.message = ''
      setTimeout(() => {
        this.scrollToMessage()
      }, 0)
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

<style lang="scss">
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
  &__list {
    cursor: pointer;
  }
  &__hiding-wrapper {
    padding-top: 20px;
    border-bottom: 1px solid $pattens-blue;
  }
  &__item {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 30px;
  }
  &__img {
    height: 50px;
    width: 50px;
    border-radius: 3px;
  }
  &__online-status {
    position: absolute;
    top: 39px;
    left: 43px;
    width: 10px;
    height: 10px;
    border: 2px solid $white;
    border-radius: 50%;
  }
  &__user-full-name {
    margin-left: 20px;
    line-height: 20px;
    font-weight: 600;
    color: $deep-cove;
    letter-spacing: 0.02em;
  }
  &__unread-message-number {
    position: absolute;
    top: 0px;
    right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    padding: 0 5px;
    height: 20px;
    font-size: 14px;
    border-radius: 3px;
    background-color: $coral-red;
    color: $white;
  }
  &__last-message {
    margin: 10px 0px 22px 30px;
    width: 255px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: $cadet-blue;
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
  &__item {
    display: flex;
    align-items: flex-end;
  }
  &__img {
    height: 30px;
    width: 30px;
    border-radius: 3px;
  }
  &__message {
    max-width: 390px;
    margin-top: 22px;
    padding: 20px 20px 32px 20px;
    border-radius: 3px;
    letter-spacing: 0.01em;
  }
  &__controls {
    display: flex;
    align-items: center;
    position: relative;
    height: 80px;
    border-bottom: 1px solid $pattens-blue;
    border-right: 1px solid $pattens-blue;
  }
  &__message-btn {
    margin-left: 48px;
    width: 36px;
    height: 26px;
    cursor: pointer;
  }
  &__emoji-icon {
    margin-left: -55px;
  }
  &__input {
    height: 50px;
    width: 365px;
    margin: 13px;
    padding: 0 65px 0 25px;
    border-radius: 3px;
    border: 1px solid $blue-haze;
    background-color: $zircon;
    &::placeholder {
      color: $cadet-blue;
    }
  }
  &__emoji {
    position: absolute;
    top: -438px;
    left: 206px;
    cursor: pointer;
  }
}

font-awesome-icon {
  position: absolute;
  display: block;
  left: 417px;
  top: 29px;
  height: 25px;
  width: 25px;
  color: $cadet-blue;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

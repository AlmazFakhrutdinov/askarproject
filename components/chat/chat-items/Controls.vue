<template>
  <div class="chat">
    <div class="chat__controls">
      <input
        v-model="message"
        class="chat__input"
        type="text"
        placeholder="Написать сообщение"
      />
      <img
        class="chat__emoji-icon"
        src="@/assets/icons/emoji.svg"
        alt="emoji"
        @mousemove="isEmoji = true"
        @mouseenter="removeTimerIndex"
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
        @click="$emit('addMessage', message)"
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
</template>

<script>
import Emoji from '@/components/chat/chat-items/Emoji'

export default {
  components: {
    Emoji
  },
  data() {
    return {
      message: '',
      isEmoji: false,
      isHiddenEmoji: false,
      emojiTimerIndex: null
    }
  },
  mounted() {
    this.isHiddenEmoji = true
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  &__input {
    height: 50px;
    width: 365px;
    margin: 13px;
    padding: 0 65px 0 25px;
    border-radius: 3px;
    border: 1px solid $blue-haze;
    background-color: $white;
    &::placeholder {
      color: $cadet-blue;
    }
  }
  &__controls {
    display: flex;
    align-items: center;
    position: relative;
    height: 80px;
    background-color: $zircon;
    border-bottom: 1px solid $pattens-blue;
    border-right: 1px solid $pattens-blue;
  }
  &__emoji-icon {
    margin-left: -55px;
  }
  &__emoji {
    position: absolute;
    top: -438px;
    left: 206px;
    cursor: pointer;
  }
  &__message-btn {
    margin-left: 48px;
    width: 36px;
    height: 26px;
    cursor: pointer;
  }
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

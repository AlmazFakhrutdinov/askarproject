<template>
  <div class="chat">
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
          backgroundColor: item.userId === currentUserId ? '#DFEDFF' : '#F9FAFF'
        }"
        class="chat__message"
      >
        {{ item.message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentChat: {
      type: Array
    },
    currentUserId: {
      type: Number
    }
  },
  methods: {
    isHiddenImg(index) {
      const currentChat = this.currentChat
      if (index === currentChat.length - 1) {
        return true
      } else if (currentChat[index].userId === currentChat[index + 1].userId) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
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
    font-size: 14px;
    letter-spacing: 0.01em;
  }
}
</style>

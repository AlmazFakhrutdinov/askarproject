<template>
  <div class="menu">
    <div
      v-for="(item, index) in chatItems"
      :key="index"
      :class="{ active: activeChatIndex === index }"
      class="menu__list"
      @click="$emit('setActiveChatIndex', index)"
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
          <span v-if="item.unreadMessages" class="menu__unread-message-number">
            {{ item.unreadMessages }}
          </span>
        </div>
        <p class="menu__last-message">
          {{ item.chatList[item.chatList.length - 1].message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeChatIndex: {
      type: Number
    },
    menuListIndexes: {
      type: Array
    },
    chatItems: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
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
</style>

<template>
  <div class="chat-container">
    <!-- <div class="menu"></div> -->
    <chat />
  </div>
</template>

<script>
import Chat from '@/components/chat/Chat'

export default {
  components: {
    Chat
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 305px;
  outline: 1px solid black;
  height: 700px;
}

.chat-container {
  width: 1215px;
  margin: 0 auto;
  display: flex;
}
</style>

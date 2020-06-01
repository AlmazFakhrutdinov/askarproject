<template>
  <div class="chat-container">
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
.chat-container {
  width: 1215px;
  margin: 0 auto;
  display: flex;
}
</style>

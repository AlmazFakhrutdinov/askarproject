<template>
  <div>
    <VEmojiPicker v-if="isHiddenEmoji" @select="selectEmoji" />
  </div>
</template>

<script>
import VEmojiPicker from 'v-emoji-picker'

export default {
  components: {
    VEmojiPicker
  },
  props: ['isHiddenEmoji'],
  data: () => ({}),
  methods: {
    selectEmoji({ data }) {
      this.$emit('addEmoji', data)
    }
  }
}
</script>

<style lang="scss" scoped>
#EmojiPicker {
  flex-direction: column-reverse;
  width: 260px;
  background-color: $white !important;
}

#Categories {
  background: $white !important;
}

#Emojis {
  .container-emoji {
    height: 235px;
  }
}
</style>

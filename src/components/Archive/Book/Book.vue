<template>
  <router-link
    :to="{
      name: 'AboutBook',
      params: { id: $route.params.id, id_2: book.ID },
    }"
  >
    <div
      class="part"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ hovered: hover }"
    >
      <div
        :style="{
          backgroundImage:
            'url(' +
            require(`@/assets/images/books/bg/${book.Tag.main}.jpg`) +
            ')',
        }"
        class="thumb"
      />

      <div class="abs" v-html="`${book.Title} ${romanize(book.Part)}`" />

      <div class="text">
        <div class="text-abs">
          <div class="t" v-html="book.Title" />
          <div
            class="v"
            v-html="`${$t('sciences.vol')} ${romanize(book.Part)}`"
          />
          <div
            class="s"
            v-html="
              `${book.Subtitles[0] ? book.Subtitles[0] : ''} ${
                book.Subtitles[1] ? book.Subtitles[1] : ''
              }`
            "
          />
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { romanize } from '@/scripts/canvas/canvas'

export default defineComponent({
  props: {
    book: Object,
  },
  methods: { romanize },
  data() {
    return { hover: false }
  },
})
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.part {
  width: 400px;
  height: 225px;
  max-width: 90vw;
  border-radius: 10px;
  background: #e3e3e3;
  overflow: hidden;
  margin: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 200px;
  }
}

.thumb {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  transition: all 0.4s ease-in;
}

.abs {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 83%;
  font-weight: 500;
  background: #28353ab0;
  color: theme(light);
  text-align: center;
  border-top-left-radius: 10px;
  padding: 10px;
  font-size: 20px;
  backdrop-filter: blur(5px);
  transition: 0.3s all ease-in;
}

.text {
  text-align: center;
  flex-grow: 1;
  .text-abs {
    position: absolute;
    padding: 15px;

    width: 315px;
    height: 100%;
  }
  .t {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 400;
    @media (max-width: 1000px) {
      font-size: 22px;
    }
  }

  .v {
    text-transform: uppercase;
    margin-bottom: 10px;
    font-size: 20px;
    @media (max-width: 1000px) {
      font-size: 18px;
      margin-bottom: 5px;
    }
  }

  .s {
    font-size: 16px;
    @media (max-width: 1000px) {
      font-size: 15px;
    }
  }
}

.hovered {
  .abs {
    transform: translateY(100%);
  }

  .thumb {
    width: 85px;
  }
}
</style>

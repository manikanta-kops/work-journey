<template>
  <div class="intrests--3">
    <div class="content">
      <div class="primary_text">
        Books
      </div>
      <div class="secondary_text">
        One habit that changed everything in my life is reading books. Mostly non-fiction,
        spirituality, and self-development are my goto shelf.
      </div>
      <a
        target="_blank"
        class="anchor_tag"
        href="https://www.goodreads.com/review/list/94505367?ref=nav_mybooks"
        >Peek into my library</a
      >
    </div>
    <div class="svg_container">
      <transition name="svg_animator">
        <SkillsIllustration v-if="showIllustration"></SkillsIllustration>
      </transition>
    </div>
  </div>
</template>

<script>
import SkillsIllustration from '../../assets/SVGs/illustrations/intrests/reading.svg';
export default {
  data() {
    return {
      showIllustration: false,
    };
  },
  components: {
    SkillsIllustration,
  },
  mounted() {
    this.showIllustration = true;
  },
};
</script>

<style lang="scss" scoped>
.intrests--3 {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  .content {
    margin-top: 20px;
    .secondary_text {
      margin-top: 20px;
    }
  }
  .svg_container {
    width: 70%;
    max-height: 70%;
    svg {
      width: 100%;
      height: 100%;
      /deep/ {
        #circle {
          transform-origin: center;
          animation: rotateMe 7s cubic-bezier(0.98, 0.26, 0.02, 1.46) infinite;
        }
      }
    }
  }
  @keyframes rotateMe {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>

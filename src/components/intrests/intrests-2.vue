<template>
  <div class="intrests--2">
    <div class="content">
      <div class="primary_text">
        Tiding
      </div>
      <div class="secondary_text">
        Yep cleaning/tiding that's an art to me. Every time I try to organize my things it gives me
        more peace and freedom and respect over my belongings
      </div>
    </div>
    <div class="svg_container">
      <transition name="svg_animator">
        <SkillsIllustration v-if="showIllustration"></SkillsIllustration>
      </transition>
    </div>
  </div>
</template>

<script>
import SkillsIllustration from '../../assets/SVGs/illustrations/intrests/tiding.svg';
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
.intrests--2 {
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
        #right_hand {
          transform-origin: left;
          animation: clean 2s ease-in-out infinite;
        }
      }
    }
  }
  @keyframes clean {
    0% {
      transform: rotateX(-4deg) rotateY(-5deg);
    }
    50% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-4deg) rotateY(-5deg);
    }
  }
}
</style>

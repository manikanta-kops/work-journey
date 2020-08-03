<template>
  <div class="intrests--4">
    <div class="content">
      <div class="primary_text">
        Fitness
      </div>
      <div class="secondary_text">
        I believe my body is not just a means to me but a kind of temple(a sacred place). So I'll
        give the utmost importance to take care of it.
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
import SkillsIllustration from '../../assets/SVGs/illustrations/intrests/exercise.svg';
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
.intrests--4 {
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
        #upper-body {
          transform-origin: right bottom;
          // transform: rotate(-10deg);
          animation: pushup 7s cubic-bezier(0.98, 0.26, 0.02, 1.46) infinite;
        }
        #Vector_89,
        #Vector_24,
        #Vector_23 {
          animation: pushupHand 7s cubic-bezier(0.98, 0.26, 0.02, 1.46) infinite;
          transform-box: fill-box;
          transform-origin: bottom;
        }
      }
    }
  }
  @keyframes pushup {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes pushupHand {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(0.5) rotate(-21deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
}
</style>

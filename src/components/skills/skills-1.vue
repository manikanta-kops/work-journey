<template>
  <div class="skills--1">
    <div class="secondary_text content">
      With a burning enthusiasm, I started designing websites using HTML and CSS.
    </div>
    <div class="svg_container">
      <transition name="svg_animator">
        <SkillsIllustration v-if="showIllustration"></SkillsIllustration>
      </transition>
    </div>
  </div>
</template>

<script>
import SkillsIllustration from '../../assets/SVGs/illustrations/skills/skill.svg';
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
.skills--1 {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  .content {
    margin-top: 20px;
  }
  .svg_container {
    width: 71%;
    svg {
      width: 100%;
      height: 100%;
      /deep/ {
        #website {
        }
      }
    }
    /deep/ {
      svg {
        &.svg_animator {
          &-enter-active {
            transition: all 13s;
            #HTML,
            #CSS {
              animation: floatUp 2s cubic-bezier(0.98, 0.26, 0.02, 1.46) forwards;
            }
            #website {
              opacity: 0;
              animation: dropIt 2s 1.5s cubic-bezier(1, 0, 0.51, 1.32) forwards;
            }
          }
        }
      }
    }
  }

  @keyframes floatUp {
    0% {
      opacity: 0;
      transform: translateY(90px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes dropIt {
    0% {
      transform: rotate(-16deg) translateY(-342px);
      transform-origin: center;
    }
    60% {
      transform: rotate(-16deg) translateY(0px);
      opacity: 1;
    }
    80% {
      transform: rotate(-16deg) translateY(0px);
      opacity: 1;
    }

    100% {
      transform: rotate(0deg) translateY(0px);
      opacity: 1;
    }
  }
}
</style>

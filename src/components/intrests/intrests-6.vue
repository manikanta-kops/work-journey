<template>
  <div class="intrests--6">
    <div class="content">
      <div class="secondary_text">
        &amp; So on... Some journeys won't end.
      </div>
      <a @click="goHome" class="anchor_tag" href="javascript:void(0)">Go Home</a>
    </div>
    <div class="svg_container">
      <transition name="svg_animator">
        <SkillsIllustration v-if="showIllustration"></SkillsIllustration>
      </transition>
    </div>
  </div>
</template>

<script>
import SkillsIllustration from '../../assets/SVGs/illustrations/intrests/journey.svg';
import { publishEvent } from '../../helpers/Observer';
import { KEYWORDS } from '../../helpers/Constants';
export default {
  data() {
    return {
      showIllustration: false,
    };
  },
  components: {
    SkillsIllustration,
  },
  methods: {
    goHome() {
      publishEvent(KEYWORDS.GO_HOME);
    },
  },
  mounted() {
    this.showIllustration = true;
  },
};
</script>

<style lang="scss" scoped>
.intrests--6 {
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
        #car {
          opacity: 0;
          // transform: translateX(-556px);
          animation: movecar 20s linear infinite;
          transform-origin: center;
          transform-box: fill-box;
        }
      }
    }
  }
  @keyframes movecar {
    0% {
      opacity: 1;
      transform: translateX(0px) rotateY(0deg);
    }
    30% {
      opacity: 1;
      transform: translateX(-556px) rotateY(0deg);
    }
    40% {
      opacity: 1;
      transform: translateX(-556px) rotateY(180deg) translateY(-104px);
    }
    70% {
      opacity: 1;
      transform: translateX(60px) rotateY(180deg) translateY(-104px);
    }
    80% {
      opacity: 1;
      transform: translateX(60px) rotateY(0deg) translateY(-204px);
    }
    95% {
      opacity: 1;
      transform: translateX(-556px) rotateY(0deg) translateY(-204px);
    }
    100% {
      opacity: 0;
      transform: translateX(-756px) rotateY(0deg) translateY(-204px);
    }
  }
}
</style>

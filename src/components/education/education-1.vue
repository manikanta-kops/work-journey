<template>
  <div class="intrests--5">
    <div class="content">
      <div class="secondary_text">
        Under construction
        <br />
        Wait for it, it's gonna be LEGENDARY!
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
import SkillsIllustration from '../../assets/SVGs/illustrations/construction.svg';
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
.intrests--5 {
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
        #hooker {
          transform-origin: left;
          transform-box: fill-box;
          animation: moveRod 14s ease-in-out;
        }
        #blocks {
          transform-origin: left;
          transform-box: fill-box;
          animation: moveBlocks 14s ease-in-out;
        }
        #hanging_rod {
          transform-origin: top;
          transform-box: fill-box;
          // transform: scaleY(2.2);
          animation: putDown 3s 3s ease-in-out;
        }
      }
    }
  }
  @keyframes moveRod {
    0% {
      transform: scaleX(1);
    }
    20% {
      transform: scaleX(2);
    }
    40% {
      transform: scaleX(2);
    }
  }
  @keyframes moveBlocks {
    0% {
      transform: translateX(0px);
    }
    20% {
      transform: translateX(230px);
    }
    40% {
      // transform: translateX(230px);
      transform: translateX(230px) translateY(112px);
    }
    100% {
      // transform: translateX(230px);
      transform: translateX(230px) translateY(112px);
    }
  }
  @keyframes putDown {
    0% {
      transform: scaleY(1);
    }
    100% {
      transform: scaleY(2.2);
    }
  }
}
</style>

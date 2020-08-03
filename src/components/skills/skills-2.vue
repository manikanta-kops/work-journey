<template>
  <div class="skills--2">
    <div class="top_content">
      <div class="secondary_text content">
        Then I thought to add some interactivity to my web sites, so I learned Javascript, Vue and
        many frameworks and libraries.
      </div>
      <div class="frameworks_wrapper">
        <angular></angular>
        <javascript></javascript>
        <jQuery></jQuery>
        <react></react>
        <typescript></typescript>
        <vue></vue>
      </div>
    </div>
    <!-- <div class="bottom_content"> -->
    <div class="svg_container">
      <SkillsIllustration></SkillsIllustration>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import SkillsIllustration from '../../assets/SVGs/illustrations/skills/skill-2.svg';

import angular from '../../assets/SVGs/skills/angularjs.svg';
import javascript from '../../assets/SVGs/skills/javascript.svg';
import jQuery from '../../assets/SVGs/skills/jquery.svg';
import react from '../../assets/SVGs/skills/react.svg';
import typescript from '../../assets/SVGs/skills/typescript.svg';
import vue from '../../assets/SVGs/skills/vue-js.svg';
export default {
  data() {
    return {};
  },
  components: {
    SkillsIllustration,
    angular,
    javascript,
    jQuery,
    react,
    typescript,
    vue,
  },
};
</script>

<style lang="scss" scoped>
.skills--2 {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
  .top_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    .content {
      margin-top: 20px;
    }
    .frameworks_wrapper {
      margin-top: 20px;
      svg {
        margin-right: 10px;
        width: 90px;
        height: 90px;
      }
    }
  }

  .svg_container {
    width: 50%;
    svg {
      width: 100%;
      height: 100%;
      /deep/ {
        .blinker {
          @for $i from 1 through 65 {
            &:nth-child(#{$i}) {
              animation: blinker 2s cubic-bezier(0.98, 0.26, 0.02, 1.46) infinite;
              animation-delay: 1s * random(30);
            }
          }
        }
      }
    }
  }

  @keyframes blinker {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>

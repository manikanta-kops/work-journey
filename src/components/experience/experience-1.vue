<template>
  <div class="experience--1">
    <div class="content">
      <div class="primary_text">Agile Labs <sup>(2016 APR - 2018 DEC)</sup></div>
      <div class="secondary_text">
        With the passion of FrontEnd Development, the universe landed me on my first job as
        <br />
        <i> web designer/developer. </i>
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
import SkillsIllustration from '../../assets/SVGs/illustrations/experience/exp-1.svg';
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
.experience--1 {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  .content {
    margin-top: 20px;
    sup {
      vertical-align: super;
      font-size: 16px;
    }
    .secondary_text {
      margin-top: 20px;
      i {
        font-style: italic;
      }
    }
  }
  .svg_container {
    width: 70%;
    max-height: 70%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

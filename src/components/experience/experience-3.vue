<template>
  <div class="experience--3">
    <div class="content">
      <div class="primary_text">ZETA(DirectI) <sup>(2019 - *)</sup></div>
      <div class="secondary_text">
        After fulfilling my duties in the past company, I moved here as a
        <br />
        <i> frontEnd Developer, SD II </i>
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
import SkillsIllustration from '../../assets/SVGs/illustrations/experience/zeta.svg';
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
.experience--3 {
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

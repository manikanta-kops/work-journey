<template>
  <div class="intrests--5">
    <div class="content">
      <div class="primary_text">
        Writing
      </div>
      <div class="secondary_text">
        When some time is there (especially my mornings), I'll write mostly about my life lessons
        and things I learned. Writing gives me more clarity and vision of my life
      </div>
      <a target="_blank" class="anchor_tag" href="https://medium.com/@manikanta.koppala7"
        >All my articles are here.</a
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
import SkillsIllustration from '../../assets/SVGs/illustrations/intrests/writing.svg';
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
    }
  }
}
</style>

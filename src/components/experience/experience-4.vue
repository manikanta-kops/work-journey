<template>
  <div class="experience--2">
    <div class="content">
      <div class="secondary_text">
        In ZETA I met incredibly talented people where I am fulfilling my duties as,
      </div>
      <div class="list_items">
        <ul class="secondary_text">
          <li>
            Mentoring and guiding my co-workers (friends)
          </li>
          <li>Responsible for front end progress in my team.</li>
          <li>Manage to distribute the work every day.</li>
          <li>Initiated &amp; Developed <a href="https://medium.com/js-dojo/vue-plugin-based-development-b121ffb4921e" target="_blank">VUE plugin-based system</a> to solve our multi-country serving.</li>
          <li>Won <b>outstanding performer award</b> for two consecutive years</li>
        </ul>
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
import SkillsIllustration from '../../assets/SVGs/illustrations/experience/good_team.svg';
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
.experience--2 {
  text-align: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  .content {
    margin-top: 20px;
    text-align: left;
    .secondary_text {
      margin-top: 20px;
      b{
        font-weight: bold;
      }
    }
    .list_items {
      ul {
        list-style: persian;
        margin-left: 17px;
        li {
          font-family: IBMPlexSans-Light;
          font-size: 16px;
          margin: 10px 0;
        }
      }
    }
  }
  .svg_container {
    width: 50%;
    max-height: 70%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

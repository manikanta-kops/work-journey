<template>
  <div class="experience--2">
    <div class="content">
      <div class="secondary_text">
        Here I met an incredible team who is like family to me, and they taught me so many things in
        terms of my skills and work. Where I am,
      </div>
      <div class="list_items">
        <ul class="secondary_text">
          <li>
            Promoted to evaluate the code(code review) before committing code into the source
            repository
          </li>
          <li>Mentoring others in writing the code in a better way.</li>
          <li>Manage to distribute the work every day.</li>
          <li>Leading the team in the development process.</li>
          <li>
            Earned to have a close discussion with management in the matter of application
            development.
          </li>
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
import SkillsIllustration from '../../assets/SVGs/illustrations/experience/team.svg';
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
    width: 70%;
    max-height: 70%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

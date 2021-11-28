<template>
  <div class="experience--2">
    <div class="content">
      <div class="secondary_text">
        In LivSpace i am given a huge responsilibities and challanges.
      </div>
      <div class="list_items">
        <ul class="secondary_text">
          <li>Promoted to lead the team of 7 members.</li>
          <li>Responsible for driving the team in terms of tech and product delivery.</li>
          <li>Worked on building Mirco Front-end Applications</li>
          <li>
            Initiated the process for unit testing &amp; stream lined in our application and build
            process
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
      b {
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

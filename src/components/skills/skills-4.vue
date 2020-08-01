<template>
  <div class="skills--4">
    <div class="top_content">
      <div class="secondary_text content">
        Along the journey, two things that resonated with me are javascript and CSS. I don't know
        why I'll find something new about them every day, which will challenge me never to stop
        learning.
      </div>
    </div>

    <div class="svg_container">
      <SkillsIllustration></SkillsIllustration>
    </div>
  </div>
</template>

<script>
import SkillsIllustration from '../../assets/SVGs/illustrations/skills/htmlNcss.svg';

import php from '../../assets/SVGs/skills/php.svg';
import nodejs from '../../assets/SVGs/skills/nodejs.svg';
import mysql from '../../assets/SVGs/skills/mysql.svg';
import mongodb from '../../assets/SVGs/skills/mongodb.svg';
export default {
  data() {
    return {};
  },
  components: {
    SkillsIllustration,
    php,
    nodejs,
    mysql,
    mongodb,
  },
};
</script>

<style lang="scss" scoped>
.skills--4 {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  .top_content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    .content {
      margin-top: 20px;
    }
  }

  .svg_container {
    width: 50%;

    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

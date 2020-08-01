<template>
  <div class="skills--3">
    <div class="top_content">
      <div class="secondary_text content">
        Then I realized that I have to upload my data and save it. so I learned PHP, nodeJS, MySQL
      </div>
      <div class="frameworks_wrapper">
        <php></php>
        <nodejs></nodejs>
        <mysql></mysql>
        <mongodb></mongodb>
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
import SkillsIllustration from '../../assets/SVGs/illustrations/skills/skill-3.svg';

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
.skills--3 {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
  .top_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    .content {
      margin-top: 20px;
    }
    .frameworks_wrapper {
      margin-top: 20px;
      svg {
        margin-right: 30px;
        width: 90px;
        height: 90px;
        .add_width {
          width: 135px;
          height: 90px;
        }
      }
    }
  }

  .svg_container {
    width: 50%;

    position: fixed;
    right: 0;
    bottom: 0;

    svg {
      width: 100%;
      height: 100%;
      /deep/ {
        .left_part {
          animation: floatLeft 2s cubic-bezier(0.98, 0.26, 0.02, 1.46) forwards;
        }
        .right_part {
          animation: floatRight 2s cubic-bezier(0.98, 0.26, 0.02, 1.46) forwards;
        }
        .main_sheild {
          transform-origin: center;
          animation: zoomIn 2s cubic-bezier(0.98, 0.26, 0.02, 1.46) forwards;
        }
        .tick_mark {
          transform: scale(0.2);
          opacity: 0;
          transform-origin: center;
          animation: zoomInNrotate 2s 2s cubic-bezier(0.98, 0.26, 0.02, 1.46) forwards;
        }
      }
    }
  }
  @keyframes floatLeft {
    0% {
      opacity: 0;
      transform: translateX(120px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes floatRight {
    0% {
      opacity: 0;
      transform: translateX(-120px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes zoomIn {
    0% {
      transform: scale(0.2);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes zoomInNrotate {
    0% {
      transform: scale(0.2) rotate(0deg);
    }

    100% {
      opacity: 1;
      transform: scale(1) rotate(720deg);
    }
  }
}
</style>

<template>
  <div class="skills--5">
    <div class="top_content">
      <div class="secondary_text content">
        Finally here are all the skills, tools, frameworks I interacted in my journey.
      </div>
    </div>

    <div class="all_skills_container">
      <div v-for="(category, index) in categories" :key="index" class="__category">
        <h2 class="__title">{{ category }}</h2>
        <section v-for="(skill, index) in allSkills[category]" :key="index" class="__skill">
          <svg
            class="circle-chart"
            viewBox="0 0 33.83098862 33.83098862"
            width="100"
            height="100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              class="circle-chart__background"
              stroke="#efefef"
              stroke-width="2"
              fill="none"
              cx="16.91549431"
              cy="16.91549431"
              r="15.91549431"
            ></circle>
            <circle
              class="circle-chart__circle"
              stroke="#00acc1"
              stroke-width="2"
              :stroke-dasharray="skill.percentage + ' 100'"
              stroke-linecap="round"
              fill="none"
              cx="16.91549431"
              cy="16.91549431"
              r="15.91549431"
            ></circle>
          </svg>
          <div class="__content">
            <img :src="skill.icon" alt />
            <div class="__skillName">{{ skill.skill }}</div>
          </div>
        </section>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import AllSkills from './all-skills';
export default {
  data() {
    return {
      allSkills: [],
      categories: [
        'front end',
        'preprocessor',
        'backend',
        'database',
        'server',
        'Version control',
        'API',
        'unit testing',
        'OS',
        'tools',
      ],
    };
  },
  components: {},
  methods: {
    processTheSkills(skills) {
      skills.map((skill) => {
        let { category } = skill;
        if (this.categories.indexOf(category) === -1) {
          this.categories.push(category);
        }
        if (!this.allSkills[category]) this.allSkills[category] = [];
        this.allSkills[category].push(skill);
      });
    },
  },
  created() {
    this.processTheSkills(AllSkills);
  },
};
</script>

<style lang="scss" scoped>
.skills--5 {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  .all_skills_container {
    height: calc(100vh - 135px);
    overflow: auto;
    .clear {
      clear: both;
    }
    .circle-chart__circle {
      animation: circle-chart-fill 2s reverse; /* 1 */
      transform: rotate(-90deg); /* 2, 3 */
      transform-origin: center; /* 4 */
    }

    .circle-chart__info {
      animation: circle-chart-appear 2s forwards;
      opacity: 0;
      transform: translateY(0.3em);
    }

    @keyframes circle-chart-fill {
      to {
        stroke-dasharray: 0 100;
      }
    }

    @keyframes circle-chart-appear {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .__category {
      .__title {
        text-transform: capitalize;
        color: #585858;
        padding-bottom: 10px;
        border-bottom: 1px dashed #ddd;
        margin-bottom: 0px;
        font-weight: 700;
        text-align: left;
        margin-left: 10px;
        margin: 35px 10px 0px 10px;
        font-size: 22px;
      }
      .__skill {
        float: left;
        position: relative;
        margin: 23px 10px;
        .__content {
          position: absolute;
          top: 7px;
          left: 7px;
          width: calc(100% - 14px);
          height: calc(100% - 20px);
          img {
            width: calc(100% - 10px);
            height: calc(100% - 10px);
            border-radius: 50%;
            position: relative;
            top: 7px;
            padding: 5px;
          }
          .__skillName {
            color: black;
            font-size: 16px;
            font-family: IBMPlexSans-Medium;
            margin-top: 30px;
          }
        }
      }
    }
  }
}
</style>

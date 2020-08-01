import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Main_Page.vue';

import { ROUTER_CONFIG } from '../helpers/Constants';

Vue.use(VueRouter);
let finalRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

for (var category in ROUTER_CONFIG) {
  let currentCategory = ROUTER_CONFIG[category];
  let frames = currentCategory.frames;

  for (let i = 1; i <= frames; i++) {
    const categoryToAdd = category;
    finalRoutes.push({
      path: `/${categoryToAdd}/${i}`,
      name: `${categoryToAdd}-${i}`,
      component() {
        return getTheComponent(categoryToAdd, i);
      },
    });
  }
}

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//   },
//   {
//     path: '/skills/1',
//     name: 'skills-1',
//     component() {
//       return getTheComponent('skills', 1);
//     },
//   },
//   {
//     path: '/skills/2',
//     name: 'skills-2',
//     component() {
//       return getTheComponent('skills', 2);
//     },
//   },
//   {
//     path: '/skills/3',
//     name: 'skills-3',
//     component() {
//       return getTheComponent('skills', 3);
//     },
//   },
//   {
//     path: '/skills/4',
//     name: 'skills-4',
//     component() {
//       return getTheComponent('skills', 4);
//     },
//   },
//   {
//     path: '/skills/5',
//     name: 'skills-5',
//     component() {
//       return getTheComponent('skills', 5);
//     },
//   },
//   {
//     path: '/education/:frame',
//     name: 'education',
//     component(abc) {
//       let hash = window.location.hash;
//       let frameNumber = hash.substr(hash.lastIndexOf('/') + 1) || 1;
//       return import(
//         /* webpackChunkName: "education" */ `../components/education/education-${frameNumber}.vue`
//       );
//     },
//   },
//   // {
//   //   path: '/experience/:frame',
//   //   name: 'experience',
//   //   component(abc) {
//   //     let hash = window.location.hash;
//   //     let frameNumber = hash.substr(hash.lastIndexOf('/') + 1) || 1;
//   //     return import(
//   //       /* webpackChunkName: "experience" */ `../components/experience/experience-${frameNumber}.vue`
//   //     );
//   //   },
//   // },
//   {
//     path: '/intrests/:frame',
//     name: 'intrests',
//     component(abc) {
//       let hash = window.location.hash;
//       let frameNumber = hash.substr(hash.lastIndexOf('/') + 1) || 1;
//       return import(
//         /* webpackChunkName: "intrests" */ `../components/intrests/intrests-${frameNumber}.vue`
//       );
//     },
//   },
// ];

function getTheComponent(cat, frameNumber) {
  return import(`../components/${cat}/${cat}-${frameNumber}.vue`);
}

const router = new VueRouter({
  routes: finalRoutes,
});

export default router;

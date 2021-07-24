import random from '../images/random-user-cdn.png';
import task from '../images/task-tracker.png';
import vuex from '../images/vuex-todo-manager.png';

export default [
  {
    id: 1,
    img: random,
    title: 'Get Random User Vue CDN',
    description:
      'Implementasi Vue.js dengan menambahkan link CDN pada tag html untuk membuat aplikasi yang sederhana.',
    web: 'https://fajariadi-random-user.netlify.app/',
    repo:
      'https://github.com/fajariadi-id/learn-vue/tree/master/random-user-generator-cdn',
  },
  {
    id: 2,
    img: task,
    title: 'Task Tracker Vue CLI',
    description:
      'Implementasi Vue CLI dan router untuk membangun mini aplikasi pengingat tugas dengan bantuan json-server sebagai tempat untuk menyimpan data tugas yang di-input.',
    web: 'https://fajariadi-task-tracker.netlify.app/',
    repo: 'https://github.com/fajariadi-id/learn-vue/tree/master/task-tracker',
  },
  {
    id: 3,
    img: vuex,
    title: 'Todo Manager Vuex',
    description:
      'Implementasi Vuex sebagai state management dari mini aplikasi to-do-list dengan bantuan json-server sebagai tempat untuk menyimpan data to-do yang di-input.',
    web: 'https://fajariadi-vuex-todos.netlify.app/',
    repo:
      'https://github.com/fajariadi-id/learn-vue/tree/master/vuex-todo-manager',
  },
];

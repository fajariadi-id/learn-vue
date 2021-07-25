import random from '../images/random-user-cdn.png';
import task from '../images/task-tracker.png';
import vuex from '../images/vuex-todo-manager.png';

export default [
  {
    id: 1,
    img: random,
    title: 'Get Random User',
    tags: ['vue cdn', 'html', 'css', 'js'],
    description:
      'Random user generator sederhana yang dibangun menggunakan html, css, js dan Vue CDN. Random user didapat dengan memanggil API dari https://randomuser.me/api.',
    web: 'https://fajariadi-random-user.netlify.app/',
    repo:
      'https://github.com/fajariadi-id/learn-vue/tree/master/random-user-generator-cdn',
  },
  {
    id: 2,
    img: task,
    title: 'Task Tracker',
    tags: ['vue cli', 'router', 'json-server'],
    description:
      'Pengingat tugas sederhana yang dibangun menggunakan Vue CLI dan implementasi router untuk aplikasi Vue serta local state sebagai tempat penampung data yang akan ditampilkan pada website. Menggunakan json-server untuk menyimpan perubahan data pada local state.',
    web: 'https://fajariadi-task-tracker.netlify.app/',
    repo: 'https://github.com/fajariadi-id/learn-vue/tree/master/task-tracker',
  },
  {
    id: 3,
    img: vuex,
    title: 'Todo Manager',
    tags: ['vue cli', 'vuex', 'json-server'],
    description:
      'Aplikasi to-do-list sederhana yang dibangun menggunakan Vue CLI dan implementasi Vuex sebagai state management untuk menampung data disatu tempat dengan tujuan untuk kemudahan dalam mengakses data. Menggunakan json-server untuk menyimpan perubahan data pada store.',
    web: 'https://fajariadi-vuex-todos.netlify.app/',
    repo:
      'https://github.com/fajariadi-id/learn-vue/tree/master/vuex-todo-manager',
  },
];

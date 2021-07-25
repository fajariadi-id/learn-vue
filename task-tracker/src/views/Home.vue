<template>
  <AddTask v-show="showAdd" @add-task="addTask" />

  <p style="text-align: center">Double click to toggle reminder</p>
  <Tasks
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';

export default {
  name: 'Home',
  props: {
    showAdd: Boolean,
  },
  components: {
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    async addTask(task) {
      const res = await fetch('https://db-tasks.herokuapp.com/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();

      this.tasks = [data, ...this.tasks];
    },
    async deleteTask(id) {
      if (confirm('Kamu yakin mau menghapus?')) {
        const res = await fetch(`https://db-tasks.herokuapp.com/tasks/${id}`, {
          method: 'DELETE',
        });

        res.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('Tidak bisa menghapus task');
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`https://db-tasks.herokuapp.com/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateTask),
      });

      const data = await res.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTasks() {
      const res = await fetch('https://db-tasks.herokuapp.com/tasks');
      const data = await res.json();

      return data.reverse();
    },
    async fetchTask(id) {
      const res = await fetch(`https://db-tasks.herokuapp.com/tasks/${id}`);
      const data = res.json();

      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>

<template>
  <Task
    v-for="task in tasks"
    :key="task.id"
    @toggle-reminder="$emit('toggle-reminder', task.id)"
    @delete-task="$emit('delete-task', task.id)"
    :task="task"
  />
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'Tasks',
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
  emits: ['delete-task', 'toggle-reminder'],
};
</script>

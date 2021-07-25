import axios from 'axios';

const state = {
  todos: [],
};

const getters = {
  getTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get('https://db-todos.herokuapp.com/todos');

    commit('setTodos', res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post('https://db-todos.herokuapp.com/todos', {
      title,
      completed: false,
    });

    commit('newTodo', res.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://db-todos.herokuapp.com/todos/${id}`);

    commit('removeTodo', id);
  },
  async filterTodo({ commit }, e) {
    const limit = +e.target.value;

    const res = await axios.get(
      `https://db-todos.herokuapp.com/todos?_limit=${limit}`
    );

    commit('setTodos', res.data);
  },
  async updateTodo({ commit }, todo) {
    const res = await axios.put(
      `https://db-todos.herokuapp.com/todos/${todo.id}`,
      todo
    );

    console.log('updTodo', res.data);

    commit('updateTodo', res.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos.reverse()),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
    if (index !== -1) state.todos.splice(index, 1, updTodo);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

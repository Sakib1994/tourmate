import { computed, signal } from "@preact/signals";

export default function createAppState() {
  const todos = signal([
    { text: "Buy groceries", completed: true },
    { text: "Walk the dog", completed: false },
  ]);

  const completed = computed(() => {
    return todos.value.filter(todo => todo.completed).length
  });


  return { todos, completed }
}
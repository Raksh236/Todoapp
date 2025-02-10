import styles from "./todolist.module.css";
import Todoitem from "./Todoitem";
export default function Todolist({ todos, setTodos }) {
  const sortedtodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedtodos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

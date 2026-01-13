import { useState, useEffect } from "react";
import { Trash2, Plus, Check } from "lucide-react";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

interface TodoListProps {
  storageKey?: string;
  title?: string;
  placeholder?: string;
  maxItems?: number;
}

export default function TodoList({
  storageKey = "topgear-todos",
  title = "My Tasks",
  placeholder = "Add a new task...",
  maxItems = 50,
}: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Load todos from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setTodos(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Error loading todos:", error);
    } finally {
      setIsLoading(false);
    }
  }, [storageKey]);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(todos));
      } catch (error) {
        console.error("Error saving todos:", error);
      }
    }
  }, [todos, storageKey, isLoading]);

  const addTodo = () => {
    if (input.trim() === "") return;
    if (todos.length >= maxItems) return;

    const newTodo: Todo = {
      id: Date.now().toString(),
      text: input.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTodos([newTodo, ...todos]);
    setInput("");
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="text-center text-muted-foreground">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 w-full max-w-2xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
        {totalCount > 0 && (
          <p className="text-sm text-muted-foreground">
            {completedCount} of {totalCount} completed
          </p>
        )}
      </div>

      {/* Progress Bar */}
      {totalCount > 0 && (
        <div className="mb-6 bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
      )}

      {/* Input Section */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={todos.length >= maxItems}
          className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        />
        <button
          onClick={addTodo}
          disabled={input.trim() === "" || todos.length >= maxItems}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Max Items Warning */}
      {todos.length >= maxItems && (
        <div className="mb-4 p-3 bg-destructive/10 border border-destructive rounded-lg">
          <p className="text-sm text-destructive">
            Maximum {maxItems} tasks reached. Delete some tasks to add more.
          </p>
        </div>
      )}

      {/* Todo List */}
      <div className="space-y-2 mb-6 max-h-96 overflow-y-auto">
        {todos.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No tasks yet. Add one to get started!</p>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-background/80 transition-colors group"
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  todo.completed
                    ? "bg-primary border-primary"
                    : "border-border hover:border-primary"
                }`}
              >
                {todo.completed && <Check className="w-3 h-3 text-primary-foreground" />}
              </button>

              <span
                className={`flex-1 text-sm ${
                  todo.completed
                    ? "text-muted-foreground line-through"
                    : "text-foreground"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="flex-shrink-0 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Actions */}
      {completedCount > 0 && (
        <div className="pt-4 border-t border-border">
          <button
            onClick={clearCompleted}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Clear completed ({completedCount})
          </button>
        </div>
      )}
    </div>
  );
}

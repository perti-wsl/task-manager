import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editingTitle, setEditingTitle] = useState('')

  const loadTasks = async () => {
    try {
      const response = await axios.get(`${API_URL}/tasks`)
      setTasks(response.data)
    } catch (error) {
      console.error('Error loading tasks:', error)
    }
  }

  const addTask = async (e) => {
    e.preventDefault()

    if (!title.trim()) return

    try {
      await axios.post(`${API_URL}/tasks`, { title })
      setTitle('')
      loadTasks()
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/tasks/${id}`)
      loadTasks()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  const startEdit = (task) => {
    setEditingId(task.id)
    setEditingTitle(task.title)
  }

  const saveEdit = async (id) => {
    if (!editingTitle.trim()) return

    try {
      await axios.put(`${API_URL}/tasks/${id}`, {
        title: editingTitle
      })
      setEditingId(null)
      setEditingTitle('')
      loadTasks()
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditingTitle('')
  }

  const toggleDone = async (task) => {
    try {
      await axios.put(`${API_URL}/tasks/${task.id}`, {
        done: !task.done
      })
      loadTasks()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  useEffect(() => {
  const fetchTasks = async () => {
    await loadTasks()
  }

  fetchTasks()
}, [])

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Task Manager</h1>

      <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 16px' }}>
          Add Task
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              padding: '10px',
              borderRadius: '8px'
            }}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task)}
            />

            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  style={{ flex: 1, padding: '8px' }}
                />
                <button type="button" onClick={() => saveEdit(task.id)}>
                  Save
                </button>
                <button type="button" onClick={cancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    flex: 1,
                    textDecoration: task.done ? 'line-through' : 'none'
                  }}
                >
                  {task.title} - {task.done ? 'Done' : 'Pending'}
                </span>

                <button type="button" onClick={() => startEdit(task)}>
                  Edit
                </button>

                <button type="button" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
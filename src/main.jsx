import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { makeAutoObservable } from 'mobx'

function createCounter() {
  const store = makeAutoObservable({
    count: 0,
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
  })

  return store
}

const counterStore = createCounter()

createRoot(document.getElementById('root')).render(
  <App counter={counterStore} />
)

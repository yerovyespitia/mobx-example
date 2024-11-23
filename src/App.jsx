import { observer } from 'mobx-react-lite'

const App = observer(({ counter }) => {

  // prop counter viene de main.jsx

  return (
    <div>
      <h1>Conteo: {counter.count}</h1>
      <button onClick={() => counter.increment()}>Incrementar</button>
      <button onClick={() => counter.decrement()}>Restar</button>
    </div>
  )
})

export default App

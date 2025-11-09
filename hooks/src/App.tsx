import './App.css'
import UseDebouncedState from './useDebouncedState'
import UsePrevious from './usePrevious'
import UseTypeWriter from './useTypeWriter'

function App() {
  

  return (
    <div>
      <h1>Use Previous</h1>
      <UsePrevious />
      <h1>Use Debounced State</h1>
      <UseDebouncedState />
      <h1>Use Typewriter</h1>
      <UseTypeWriter />
    </div>
  )
}

export default App

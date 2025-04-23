import './App.css'
import { RemoveDuplicatesDisplay } from './remove-duplicates-display'

function App() {

  return (
    <div>
      <RemoveDuplicatesDisplay numberList={[1,1,1,1,2,2,3,4,5,5]} />
      <RemoveDuplicatesDisplay numberList={[6,6,6,2,3,5]} />
      <RemoveDuplicatesDisplay numberList={[1,1,1,1,2,2,3,4,5,5]} />
    </div>
  )
}

export default App

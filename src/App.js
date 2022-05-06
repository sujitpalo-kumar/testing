import User from './User';

import Counter from './Counter';

function App() {
  const data = {
    userDetails: [
      { name: 'John', age: 24, id: 1234 },
      { name: 'Mary', age: 29, id: 1289 },
      { name: 'Joel', age: 27, id: 1567 }
    ]
  }
  return (
    <div className="App">
      <Counter/>
      <User data={data}/>
    </div>
  );
}

export default App;

import './App.css';
import Profile from './profile/profile.js';


function App() {
  const data = {
   fullName: "Bruno",
   bio: "Bruno's bio",
   profession: "Teacher"
 };
  const handleName = name => alert(`${name}`);
  return (
    <div className="App">
      <header className="App-header">
        <Profile /*data={data}*/ handleName={handleName}/>
      </header>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import UserInfo from './UserInfo/UserInfo';

const users = [
  {
    id:1,
    name: "John",
    surname: "Doe",
    date: "1947-05-06",
    email: "john@mail.com",
  },
  {
    id:2,
    name: "Jane",
    surname: "Doe",
    date: "1972-08-14",
    email: "jane@mail.com",
  },
  {
    id:3,
    name: "Bob",
    surname: "Smith",
    date: "1964-02-21",
    email: "smith@mail.com",
  }
];

function App() {
  return (
    <div>
    <h1> User Information </h1>
        <UserInfo users={users}/>
    </div>
    
  );
}

export default App;


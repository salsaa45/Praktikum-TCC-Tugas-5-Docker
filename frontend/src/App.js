import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./AddUser";
import EditNote from "./components/EditNote";
import DeleteNote from "./components/DeleteNote";

function App() 
{
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<UserList/>}/>
            <Route path="add" element = {<AddUser/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;

import { BrowserRouter,Outlet ,Route, Routes } from "react-router-dom";
import "./App.css";
import FileUploaders from "./components/pages/FileUploader";
import Navbar from "./components/header";
// import { Home } from "lucide-react";
// import Uploader from "./components/pages/Uploader";
import TasksForm from "./components/pages/TasksForm";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import GitHubUserProfile from "./components/pages/api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Outlet />
        <Routes>
          <Route path="/" element={<FileUploaders />} />
          <Route path="/taskTraker" element={<TasksForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/api" element={<GitHubUserProfile/>} />
        </Routes>
      </BrowserRouter>
       <ToastContainer />

      {/* <FileUploaders /> */}
      {/* <div className=" mt-34 bg-amber-400"> */}
      {/* <TasksForm /> */}
      {/* </div> */}
      {/* <Uploader /> */}
    </div>
  );
}

export default App;

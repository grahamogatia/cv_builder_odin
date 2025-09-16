import './App.css'
import DisplayForm from './components/page/DisplayForm';
import EditForm from './components/page/EditForm';

function App() {

  return (
    <div className="flex flex-row gap-10">
      <EditForm />
      <DisplayForm/>
    </div>
  );
}

export default App

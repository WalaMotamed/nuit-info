import SauvetageForm from "./Components/SauvetageForm/Index";
import 'antd/dist/antd.css'; 
import {Toaster} from 'react-hot-toast'


function App() {
  return (
    <div className="App">
     <Toaster/>
     <SauvetageForm/>
    </div>
  );
}

export default App;

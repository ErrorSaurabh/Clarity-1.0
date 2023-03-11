import "./App.css";
import '.'
// importing components from react-router-dom package
import { BrowserRouter as Router, 
Route, Routes,} from "react-router-dom";

import Login from "./Components/Login";
import Create from "./Components/Create";
import Forgot from "./Components/Forgot";
function App() {
return (
	<>
	{/* This is the alias of BrowserRouter i.e. Router */}
	<Router>
		<Routes>
		<Route exact path='/' element={<Login/>} />
		
		<Route  path='/create' element={<Create/>} />
		
		<Route  path='/forgot' element={<Forgot/>} />
			
		
		</Routes>
	</Router>
	</>
);
}

export default App;
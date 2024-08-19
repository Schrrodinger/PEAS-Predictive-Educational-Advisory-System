// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
//
// export default App
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page0 from './Frontend/Page0.jsx';
import Page1 from './Frontend/Page1.jsx';
import Page2 from './Frontend/Page2.jsx';
import Page3 from './Frontend/Page3.jsx';
import Page4 from './Frontend/Page4.jsx';
import Page5 from './Frontend/Page5.jsx';
import './Frontend/Decorator.css';

function App() {
    return (
        <Router>
            <div className="navigation">
                {/*<nav>*/}
                {/*    /!*<Link to="/">Page0</Link> |*!/*/}
                {/*    /!*<Link to="/page1">Page1</Link> |*!/*/}
                {/*    /!*<Link to="/page2">Page2</Link> |*!/*/}
                {/*    /!*<Link to="/page3">Page3</Link> |*!/*/}
                {/*    <Link to="/page4">Page4</Link> |*/}
                {/*    <Link to="/page5">Page5</Link>*/}
                {/*</nav>*/}
                <Routes>
                    <Route path="/" element={<Page0 />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/page5" element={<Page5 />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;

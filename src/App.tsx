import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Product"));

function App() {
  return (
    <div className="dark:bg-gray-800 w-screen h-screen">
     <Suspense fallback={Loader}>
     <Router>
        <Route exact path="/p/:id" component={Product} />
        <Route exact path="/" component={Home} />
      </Router>
     </Suspense>
    </div>
  );
}

function Loader(): JSX.Element {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full border-blue-500 border-t animate-spin">
        <div className="w-20 h-20 rounded-full border-green-500 border-b"></div>
      </div>
    </div>
  );
}

export default App;

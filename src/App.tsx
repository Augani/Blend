import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Product"));

function App() {
  return (
    <div className="dark:bg-gray-800 dark:text-gray-50 text-gray-800 w-full h-full font-sans">
     <Suspense fallback={<Loader/>}>
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
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full border-purple-800 border-t animate-spin">
        <div className="w-20 h-20 rounded-full border-green-500 border-b"></div>
      </div>
    </div>
  );
}

export default App;

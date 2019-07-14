import React from "react";
import Header from './components/main-page/header/Header';
import Author from './components/author-page/Author';
import MainPage from './components/main-page/MainPage';
import Contact from './components/contact-page/Contact';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  home = () => {
    return <h2>Home</h2>;
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={MainPage} />
          <Route path="/author" component={Author} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}


export default App;
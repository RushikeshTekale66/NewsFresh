import './App.css';
import React, { useState } from 'react'
import NewsItem from './Component/NewsItem';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 9;
  // const apikey = process.env.NEWS_API;
  const apikey = "3ee68bd625954559a1b3fd1189015abe";

  const [progress, setProgress] = useState(0);

  return (
    <div>

      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />

        {/* <Switch> */}
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          {/* </Switch> */}
        </Routes>
      </Router>

    </div>
  )
}

export default App;
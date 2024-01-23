import React, {useEffect, useState} from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import PropTypes from 'prop-types'

const  News=(props)=>{
    const [articles, setArticles]= useState([]);
    const [loading, setLoading]= useState([true]);
    const [page, setPage]= useState(1);
    const [totalResults, setTotalResult]= useState(0);

const capitalizeFirst = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
 
  const updateNews = async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedata = await data.json();
    setArticles(parsedata.articles);
    setTotalResult(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect (()=>{
     document.title = `${capitalizeFirst(props.category)} - News Fresh`;
   updateNews();
  },[])

const handlePreviousClick = async()=>{
      console.log("Previous");
      //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3ee68bd625954559a1b3fd1189015abe&page=${this.state.page -1}&pageSize=${props.pageSize}`;
      //     this.setState({loading:true});
      //     let data = await fetch(url);
      //     let parsedata = await data.json();
      //     this.setState({
      //     page : this.state.page - 1,
      //     articles : parsedata.articles,
      //     loading:false
      // })
      setPage(page-1)
      updateNews()
  }

  const handleNextClick = async()=>{
      console.log("Next");
    //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3ee68bd625954559a1b3fd1189015abe&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    //     this.setState({loading:true});
    //     let data = await fetch(url);
    //     let parsedata = await data.json();
    //     this.setState({
    //     page : this.state.page + 1,
    //     articles : parsedata.articles,
    //     loading : false
    // })
    setPage(page+1)
    updateNews()
  }   
      
    return (
      <>
        <div className='container my-3'>
          <h1 className='text-center' style={{margin:'30px 0px', marginTop:'80px'}}>This is your todays top {capitalizeFirst(props.category)} News Adinath</h1>
          {loading && <Spinner/>}
          <div className='row'>
          {!loading && articles.map((element)=>{
                return <div className='col-md-4'  key = {element.url}>
                      <NewsItem title={element.title?element.title:""} description={element.description ? element.description: ""} image={element.urlToImage?element.urlToImage:"//images.wsj.net/im-824191/social"} author={element.author} date={element.publishedAt} source={element.source.name} url = {element.url}/>
                </div>
                })}
          </div>  

          <div className="container d-flex justify-content-between">
            <button disabled={page<=1} type="button" className="btn btn-danger" onClick={handlePreviousClick} style={{marginTop:'30px'}}>&larr; Previous</button>
            <button disabled ={page + 1 > Math.ceil(totalResults/props.pageSize)}type="button" className="btn btn-success" onClick={handleNextClick} style={{marginTop:'30px'}}>Next &rarr;</button>
          </div>              
  
        </div>
    </>
    )
}

News.defaultProps = {
    
  pageSize:6,
  country:"in",
  category:"business",
}

News.propTypes ={
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
}

export default News;
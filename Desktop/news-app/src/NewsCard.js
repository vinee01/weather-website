import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";

const NewsCard = (props) => {

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = "https://newsapi.org/v2/top-headlines?q=";

  const [search, setSearch] = useState("India");
  const [submitted, setSubmitted] = useState(null);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState();
  var [page, setPage] = useState("1");

  const apiData = async () => {
    try {
      const res = await axios.get(
        `${url}${search}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=15`
      );
      setArticles(res.data.articles);
      setTotalResults(res.data.totalResults);
    } catch (error) {
      console.log("Error fetching the data");
    }
  };

  useEffect(() => {
    apiData();
  }, [submitted]);

  const handlePrevClick = async () => {
    page--;
    setPage(page);
    apiData();
  };

  const handleNextClick = async () => {
    page++;
    setPage(page);
    apiData();
  };

  const handleClick = (event) => {
    event.preventDefault();
    setSubmitted(search);
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return articles ? ( 
    <section className="news-section d-flex justify-content-center align-items-start row">
    <div className="news-heading">
    <h1 className="text-center">Breaking News from Your Searches</h1>
    <h3 className="text-center">Stay Updated</h3>
    <form className="d-flex search-box mx-auto" role="search">
              <input
                className="form-control"
                type="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary search-button" type="submit" onClick={handleClick}>
                <SearchIcon />
              </button>
            </form>
    </div>

    <p className='search-results'>Search Results: {totalResults}</p>

    {
      articles.map((article, index) => (

        <div
          key={index}
          className="card col-3 news-card"
        >

          <img src={!article.urlToImage?"default-pic.jpeg":article.urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="news-date">{article.source.name} {article.publishedAt}</p>
            <p className="card-text">{article.description}</p>
            <p className='read-more-link'><a href={article.url}>Read more</a></p>
          </div>
        </div>
      )) }
      <div className="page-div d-flex align-items-center justify-content-center">
        <button disabled={page <= 1} onClick={handlePrevClick} className="btn btn-primary">
          <KeyboardArrowLeftIcon />
        </button>
        <p className='pageNumber'>Page: {page}</p>
        <button disabled={page > Math.ceil(totalResults / 15)} onClick={handleNextClick} className="btn btn-primary">
          <KeyboardArrowRightIcon />
        </button>
      </div>
      <button onClick={scrollToTop} className="btn btn-primary upward-button">
      <ArrowUpwardIcon />
      </button>
    </section>
    ) : (
      <div className="d-flex justify-content-center align-items-center loading-div">
        <h1>Loading...</h1>
      </div>
    );
};

export default NewsCard;

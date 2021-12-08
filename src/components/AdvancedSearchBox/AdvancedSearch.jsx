import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("SRK");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [term]);

  useEffect(() => {
    const SearchData = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResult(data.query.search);
    };
    SearchData();
  }, [debouncedTerm]);

  const renderedResults = result.map((res) => {
    return (
      <div className="item" key={res.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{res.title}</div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
}

export default Search;

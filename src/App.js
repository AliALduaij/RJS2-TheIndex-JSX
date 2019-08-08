import React from "react";
import authors from "./data";

function App() {
  let cards = authors.map(point => (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={point.imageUrl}
            alt="J.K. Rowling"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>
              {point.first_name}
              {point.last_name}
            </span>
          </h5>
          <small className="card-text">{point.books.length} books</small>
        </div>
      </div>
    </div>
  ));
  return (
    <dev>
      <div>
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div id="sidebar">
                <img src="theindex.svg" className="logo" alt="the index logo" />
                <section>
                  <h4 className="menu-item active">
                    <button>AUTHORS</button>
                  </h4>
                </section>
              </div>
            </div>
            <div className="content col-10">
              <div className="authors">
                <h3>Authors</h3>
              </div>
              <div className="row">{cards}</div>
            </div>
          </div>
        </div>
      </div>
    </dev>
  );
}

export default App;

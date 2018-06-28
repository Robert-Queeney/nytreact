import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="jumbotron jumbo-style">
            <h1><i className="fa fa-newspaper"></i> New York Times Search</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-style">
                <div className="panel-heading panel-header-style">
                  <h2><i className="fas fa-columns"></i> Search Parameters</h2>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label for="search">Search Term:</label>
                    <input type="text" className="form-control" name="search" id="search-input" />
                            </div>
                    <div className="form-group">
                      <label for="numberOfRecords">Number of Records to Retrieve:</label>
                      <select className="form-control" name="numberOfRecords" id="num-records">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="startYear">Start Year (Optional)</label>
                      <input type="text" className="form-control" name="startYear" id="start-year" />
                            </div>
                      <div className="form-group">
                        <label for="endYear">End Year (Optional)</label>
                        <input type="text" className="form-control" name="endYear" id="end-year" />
                            </div>
                        <button className="btn btn-primary btn-lg" id="search-button"><i className="fas fa-search"></i> Search</button>
                        <button className="btn btn-primary btn-lg" id="clear-button"><i className="fas fa-trash-alt"></i> Clear Results</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="panel panel-style">
                      <div className="panel-heading panel-header-style">
                        <h2><i className="fas fa-th"></i> Top Articles</h2>
                      </div>
                      <div className="panel-body results">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          }
        }
        
        export default App;

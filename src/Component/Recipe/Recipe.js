import React, { Component } from "react";
import axios from "axios";

import classes from "./Recipe.module.css";

import Topbar from "../Topbar/Topbar";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

class Recipes extends Component {
  state = {
    CardGridData: [],
    LoadingStatus: true
  };
  componentDidMount() {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
      .then(response => {
        this.setState({ CardGridData: response.data, LoadingStatus: false });
      })
      .catch(err => {
        alert("Failed to load data from backend");
      });
  }
  render() {
    const CardGrid = this.state.CardGridData.map(item => {
      return (
        <Card
          key={item.id}
          id={item.id}
          thumbnail={item.thumbnail}
          title={item.title}
        />
      );
    });
    return (
      <div>
        <Topbar />
        {this.state.LoadingStatus ? (
          <Loader />
        ) : (
          <div className={classes.GridWrapper}>{CardGrid}</div>
        )}

        <Footer />
      </div>
    );
  }
}
export default Recipes;

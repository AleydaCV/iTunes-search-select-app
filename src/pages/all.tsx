import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import GetAll from "../components/viewAll/getAll";

const All = () => {
  const { kind, search } = useParams();
  const location = useLocation();
  const text = location.state?.text;
  return (
    <>
      <Header />
      <GetAll kind={kind as string} search={search as string} text={text}/>
    </>
  );
};

export default All;

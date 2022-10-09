import React, { useEffect, useState } from "react";
import { data, IData } from "../../mocked/data";
import CardPage from "../CardPage/CardPage";
import style from "./mainpage.module.css";

const MainPage = () => {
  const [state, setState] = useState<IData[] | null>(null);
  useEffect(() => {
    setState(data);
  }, []);

  return (
    <div className={style.wrapper}>
      <h1 className={style.page_title}>Наушники</h1>
      <div className='main_content'>{state ? <CardPage data={state} /> : "Loading"}</div>
    </div>
  );
};

export default MainPage;

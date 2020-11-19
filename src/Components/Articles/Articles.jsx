import React from 'react';
import { Link } from 'react-router-dom'
import './Articles.css';
import { useEffect } from 'react'

function Articles() {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className="Total_Article">
      <article>
        <div className="box-article">
          <div className="box">
            <div className="box_img alcohol"></div>
            <h2 className="box-title">ALCOHOLS</h2>
            <p className="button-article Btn_Alcohol"><Link className="Link" to='/Alcohol'>PRODUCT LIST</Link></p>
          </div>
          <div className="box">
            <div className="box_img weapon"></div>
            <h2 className="box-title">WEAPONS</h2>
            <p className="button-article Btn_Weapons"><Link className="Link" to='/Weapons'>PRODUCT LIST</Link></p>
          </div>
          <div class="box">
            <div className="box_img drug"></div>
            <h2 className="box-title">DRUGS</h2>
            <p className="button-article Btn_Drugs"><Link className="Link" to='/Drugs'>PRODUCT LIST</Link></p>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Articles;

import React from 'react';

import './Articles.css';

function Articles() {
  const [user, setUser] = React.useState('');

  const handleLogin = (userName) => {
    setUser(userName);
  };

  React.useEffect(() => {
    console.log(`User has changed`);
  }, [user]);

  return (
    <div className="Total_Article">
      <article>
        <div className="box-article">
          <div className="box">
            <div className="box_img alcohol"></div>
            <h2 className="box-title">ALCOHOLS</h2>
            <button  className="button-article Btn_Alcohol" onClick={handleLogin}  >PRODUCT LIST</button> 

          </div>
          <div className="box">
            <div className="box_img weapon"></div>
            <h2 className="box-title">WEAPONS</h2>
            <button onClick={handleLogin}  className="button-article Btn_Weapons">PRODUCT LIST</button>
          </div>
          <div class="box">
            <div className="box_img drug"></div>
            <h2 className="box-title">DRUGS</h2>
            <button onClick={handleLogin} className="button-article Btn_Drugs">
              PRODUCT LIST
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Articles;

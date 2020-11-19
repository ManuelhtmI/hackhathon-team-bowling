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
    <div>
      <article>
        <div class="box-article">
          <div class="box">
            <div className="box_img alcohol"></div>
            <h2 className="box-title">Alcohol</h2>
            <button onClick={handleLogin}  className="button-article">product list</button>
          </div>
          <div class="box">
            <div className="box_img weapon"></div>
            <h2 className="box-title">Weapon</h2>
            <button onClick={handleLogin}  className="button-article">product list</button>
          </div>
          <div class="box">
            <div className="box_img drug"></div>
            <h2 className="box-title">Drug</h2>
            <button onClick={handleLogin} className="button-article">
              product list
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
export default Articles;

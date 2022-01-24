// import React from 'react';
import classNames from 'classnames';

import style from './style.module.css';

const Layout = (props) => {
  // console.log(props);
  const { id, title, urlBg, colorBg, children } = props;
  // console.log('children', children);
  
  // const styleRoot = {}
  // if (urlBg) {
  //   styleRoot.backgroundImage = `url(${urlBg})`
  // }

  // if (colorBg) {
  //   styleRoot.backgroundColor = colorBg
  // }

  const styleRoot = urlBg ? {backgroundImage: `url(${urlBg})`} : { backgroundColor: colorBg}

  return (
    <section 
      className={style.root} 
      style={styleRoot}
      id={id}
    >
      <div className={style.wrapper}>
        <article>

          <div className={style.title}>
            { title && (<h3>{title}</h3>)}
            <span className={style.separator}></span>
          </div>

          <div className={classNames(style.desc, style.full)}>
            {/* { descr && (<p>{descr}</p>) } */}
            {children}
          </div>
          
        </article>
      </div>
    </section>
  )
};

export default Layout;
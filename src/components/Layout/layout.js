// import React from 'react';
import classNames from 'classnames';

import s from './style.module.css';

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
      className={s.root} 
      style={styleRoot}
      id={id}
    >
      <div className={s.wrapper}>
        <article>

          <div className={s.title}>
            { title && (<h3>{title}</h3>)}
            <span className={s.separator}></span>
          </div>

          <div className={classNames(s.desc, s.full)}>
            {/* { descr && (<p>{descr}</p>) } */}
            {children}
          </div>
          
        </article>
      </div>
    </section>
  )
};

export default Layout;
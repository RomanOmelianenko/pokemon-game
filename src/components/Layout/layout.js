import style from './style.module.css';

const Layout = (props) => {
  // console.log(props);
  const { title, descr, urlBg, colorBg } = props;

  const styleRoot = urlBg ? {backgroundImage: `url(${urlBg})`} : { backgroundColor: colorBg}

  return (
    <section className={style.root} style={styleRoot}>
      <div className={style.wrapper}>
        <article 
          // style={{display: 'block'}}
        >

          <div className={style.title}>
            { title && (<h3>{title}</h3>)}
            <span className={style.separator}></span>
          </div>

          <div className={`${style.desc} ${style.full}`}>
            { descr && 
              (
              <p 
                // style={{textAlign: 'center'}}
              >
                {descr}
              </p>
              )
            }
          </div>
          
        </article>
      </div>
    </section>
  )
};

export default Layout;
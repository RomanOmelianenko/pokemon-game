import style from './style.module.css';

const Header = (props) => {
  console.log(props);
  const { title, descr } = props;
  return (
    <header className={style.root}>
      <div className={style.forest}></div>
      <div className={style.container}>
        {
          title && (<h1>{title}</h1>) 
        }
        {
          descr && (<p style={{textAlign: 'center'}}>{descr}</p>)
        }
      </div>
    </header>
  )
};

export default Header;
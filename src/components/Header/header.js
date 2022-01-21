import style from './style.module.css';

const Header = (props) => {
  const { title, descr } = props;

  // let count = 1;
  // setInterval(() => {
  //   count++;
  //   console.log('Count', count);
  // }, 1000);

  return (
    <header className={style.root}>
      <div className={style.forest}></div>
      <div className={style.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
      </div>
    </header>
  )
};

export default Header;
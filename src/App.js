import Header from "./components/Header/header";
import Layout from "./components/Layout/layout";
import Footer from "./components/Footer/footer";

import BgImg from './assets/bg2.jpg';

function App() {
  return (
    <>
      <Header 
        title='This is title' 
        descr='This is Description!'
      />
      <Layout 
        title='This is title' 
        descr='This is Description!' 
        urlBg={BgImg} 
        colorBg={false} 
      />
      <Layout 
        title='This is title' 
        descr='This is Description!' 
        urlBg={false}
        colorBg='#f4c0b3' 
      />
      <Layout 
        title='This is title' 
        descr='This is Description!' 
        urlBg={BgImg} 
        colorBg={false} 
      />
      <Footer />
    </>
  );
}

export default App;

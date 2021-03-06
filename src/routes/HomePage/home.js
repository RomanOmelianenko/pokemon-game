import Header from "../../components/Header/header";
import Layout from "../../components/Layout/layout";
import Footer from "../../components/Footer/footer";
import PokemonCard from "../../components/PokemonCard/pokemon";
import MenuHeader from '../../components/MenuHeader/menuheader';

import POKEMONS from '../../db/db.json'

import Bg1Img from '../../assets/bg1.jpg';
import Bg3Img from '../../assets/bg3.jpg';

import s from './style.module.css';

const HomePage = ({onChangePage}) => {
  


  const handleClickButton = (page) => {
    // console.log('####: <HomePage />');

    onChangePage && onChangePage(page);
  };

  return (
    <>
      <MenuHeader />
      <Header 
        title='Pockemon Game' 
        descr='This is simple triple triad card game'
        onClickButton={handleClickButton}
      />
      <Layout
        id='rules' 
        title='Rules' 
        urlBg={Bg3Img} 
      >
        <p>In the game two players face off against one another, one side playing as "blue", 
           the other as "red" on a 3x3 grid.
        </p>
        <p>Each player has five cards in a hand and the aim is to capture the
           opponent's cards by turning them into the player's own color of red or
           blue.
           To win, a majority of the total ten cards played (including the one card
           that is not placed on the board) must be of the player's card color. To
           do this, the player must capture cards by placing a card adjacent to
           an opponent's card whereupon the 'ranks' of the sides where the two
           cards touch will be compared. If the rank of the opponent's card is
           higher than the player's card, the player's card will be captured and
           turned into the opponent's color. If the player's rank is higher, the
           opponent's card will be captured and changed into the player's color
           instead.
        </p>
      </Layout>

      <Layout 
        id='cards'
        title='Cards' 
        colorBg='#202736'
      >
        {/* Выводим покемонов */}
        <div className={s.flex}>
          {
            POKEMONS.map( (item, index) => 
              <PokemonCard 
              // В качестве ключа надо использовать id, а не index
                // key={index}
                key={item.id}
                name={item.name} 
                img={item.img}
                id={item.id}
                type={item.type}
                values={item.values}
              />)
          }
        </div>
      </Layout>

      <Layout 
        id='about'
        title='About' 
        urlBg={Bg1Img} 
      >
        <p>In the game two players face off against one another, one side playing as "blue", 
           the other as "red" on a 3x3 grid.
        </p>
        <p>Each player has five cards in a hand and the aim is to capture the
           opponent's cards by turning them into the player's own color of red or
           blue.
           To win, a majority of the total ten cards played (including the one card
           that is not placed on the board) must be of the player's card color. To
           do this, the player must capture cards by placing a card adjacent to
           an opponent's card whereupon the 'ranks' of the sides where the two
           cards touch will be compared. If the rank of the opponent's card is
           higher than the player's card, the player's card will be captured and
           turned into the opponent's color. If the player's rank is higher, the
           opponent's card will be captured and changed into the player's color
           instead.
        </p>
      </Layout>

      <Footer />
    </>
  );
}

export default HomePage;

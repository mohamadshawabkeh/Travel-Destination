import Header from '../header/header';

import Footer from '../footer/Footer';
import Tours from '../tours/Tours';
const data = require ('../../data/db.json')


function Home() {
    return(
       <>
       <Header/>
       <Tours arrayData = {data}/>
       <Footer/>
       
       </>
    );
}


export default Home;







import Tour from './tour/Tour';
const data = require ('../../data/db.json')


function Tours() {
    
  return (
    
    <>
      <Tour arrayData = {data}/>

    </>

  );
}

export default Tours;

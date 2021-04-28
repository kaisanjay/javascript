import React, { useContext } from 'react';
import {useTrellContext,} from '../../context/TrellContext';

const TrelloBody = () => {

    let conte = useTrellContext()
    console.log(conte, 'contest')
   return (
      <div>
         hello
      </div>
   )

}

export default TrelloBody;

import React, { useContext } from 'react';
import {TrellContextProvide,} from '../../context/TrellContext';
import TrelloBody from './TrelloBody'

const TrelloNew = () => {

   return (
      <div>
         <TrellContextProvide>
            <TrelloBody />
         </TrellContextProvide>
      </div>
   )

}

export default TrelloNew;
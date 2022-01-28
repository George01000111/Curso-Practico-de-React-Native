
import React from 'react';
import  Icon  from 'react-native-vector-icons/FontAwesome5';
import {addPokemonFavoriteApi} from "../../api/favorite"


export default function Favorite(props) {

    const {id} = props;
    


    const addFavorite = async () => {
        console.log("id:",id)
        await addPokemonFavoriteApi(id)
        
    }

    

  return (
 
        <Icon 
        name="heart" 
        color="#fff" 
        size={20} 
        style={{marginRight:20}}
        onPress={addFavorite} 
        /> 


  );
}

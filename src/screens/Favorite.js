import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import { getPokemonFavoriteApi } from '../api/favorite'


export default function Favorite() {

    // const [favorites, setFavorites] = useState(null);

    // useEffect(() => {
    //  (async()=>{
    //    const response = await getPokemonFavoriteApi();
    //    console.log(response)  
    //  })()
    // }, []);
    

    const checkFavorites = async()=>{
        const response = await getPokemonFavoriteApi();
        console.log(response)  
      }


    return (
        <SafeAreaView>
            <Text>Favorite</Text>
            <Button title="Obtener favoritos" onPress={checkFavorites}/>
        </SafeAreaView>
    )
}

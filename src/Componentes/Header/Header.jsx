import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.tittle}> Explore </Text>
            </View>
            <View style={styles.rigthContainer}>
                <Image source={require('../Media/HaNASA.jpg')} style={styles.logoImage} />
            </View>
        </View>
    )

}




const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        // backgroundColor: 'white',
        flexDirection: 'row',
        //  padding: 1,
          marginTop: 10,
        //   paddingHorizontal: 0.2
        // alignItems: 'center', 
   
    },
    leftContainer: {
         flex: 0.5,
        //  backgroundColor: 'red',
         alignItems: 'flex-start',
         justifyContent: "center"
    },
    tittle: {
        fontSize: 20,
        color: 'black',
        alignItems: 'flex-start',
    },
    rigthContainer: {
        flex: 0.5,
        // backgroundColor: 'white',
        alignItems: 'flex-end',
        justifyContent: "center"

    },
    logoImage: {
        width: 50,
        height: 50,
        alignItems: 'flex-end'
    },

 
})

export default Header


//! Notas de este componente:
/*

La imagen para colocarla desde un URL es:
<Image source={{ uri: "https://lh3.googleusercontent.com/pw/ABLVV85A2UROkQGT5HEvcNJiORQO4eLZFBAZKDgnCLT11sRzWYerDJrBo1xdr21n49uuuBq5ZOa4etWDXKX69e6Ti9dXIEkZy4FGSaKDmIQ9vxtPRWwQh5dDxhZf4nYU6F4dTW9-Rz5rE7TbQyvtEfYvwtBgDg=w913-h913-s-no-gm?authuser=0" }} />



*/
import React, {Component} from 'react';

import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
const elementos = [
    {
        id: 1,
        image: require('./../img/puesta-de-sol.png'),
        description: 'El Oceano'
    },
    {
        id: 2,
        image: require('./../img/montanas.png'),
        description: 'Las Montañas'
    },
    {
        id: 3,
        image: require('./../img/desierto.png'),
        description: 'El Desierto'
    },
    {
        id: 4,
        image: require('./../img/espacio-exterior.png'),
        description: 'El Espacio'
    },
];

const Item = ({ image, description }) => (
    <View style={styles.item}>
        <Image source={image} />
        <Text style={styles.title}>{description}</Text>
    </View>
);

const MyList = () => {

    

    const renderItem = ({ item }) => (
        <Item image={item.image} description={item.description} />
    );
    return (
        <View style={styles.container}>
          <FlatList
            data={elementos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems: 'center',
    },
    title: {
      fontSize: 25,
    },
  });

export default MyList;
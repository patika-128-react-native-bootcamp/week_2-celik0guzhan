import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './UserCard.styles';

const UserCard = ({user}) => {
  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{uri: user.avatar}} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <Image style={styles.content_image} source={{uri: user.content_image}} />
      <View style={styles.footer}>
        <Text>
          <Text style={styles.content_name}>{user.name} </Text>
          {user.content_text}
        </Text>
      </View>
    </View>
  );
};

export default UserCard;

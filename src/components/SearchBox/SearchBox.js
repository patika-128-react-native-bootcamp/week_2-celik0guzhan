import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Button from '../Button';

import styles from './SearchBox.styles';

const SearchBox = ({onSearch}) => {
  const [text, setText] = useState('');

  function handleSendText() {
    onSearch(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput
          placeholder="Search anything..."
          onChangeText={setText}
          // onChangeText={value => setText(value)}
        />
      </View>
      <Button title="🔍" onClick={handleSendText} />
    </View>
  );
};

export default SearchBox;

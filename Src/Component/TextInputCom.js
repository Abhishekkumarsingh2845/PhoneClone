import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const TextInputCom = ({name}) => {
  return (
    <View>
       <TextInput
          style={styles.input}
          placeholder={name}
          placeholderTextColor='black'
        />
    </View>
  )
}

export default TextInputCom

const styles = StyleSheet.create({
    input: {
           width: 285,
           height: 49,
           backgroundColor: 'whitesmoke',
          marginTop: 10,
       borderRadius: 13,
           paddingHorizontal: 15,
         },
})
import React from 'react'
import st from 'styled-components/native'
import {SafeAreaView, Text, useColorScheme, View} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'

const SafeArea = st.SafeAreaView`
  flex : 1;
  flex-direction : column;
  justifyContent : center;
  alignItems : center
`

const TextBox = st.Text`
  fontSize : 20px
`
const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeArea style={backgroundStyle}>
      <TextBox>Hello world</TextBox>
    </SafeArea>
  )
}

export default App

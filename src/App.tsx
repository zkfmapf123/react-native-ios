import React from 'react'
import st from 'styled-components/native'
import {useColorScheme} from 'react-native'
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {Counter} from './views/Coutner'

const SafeArea = st.SafeAreaView`
  flex : 1;
  flex-direction : column;
  justifyContent : center;
  alignItems : center
`

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeArea style={backgroundStyle}>
      <Counter />
    </SafeArea>
  )
}

export default App

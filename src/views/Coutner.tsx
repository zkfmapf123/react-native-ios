import React, {useEffect, useState} from 'react'
import st from 'styled-components/native'
import customData from '../../public/users.json'

const View = st.View`

`

const Text = st.Text`

`

interface UserParams {
  id: number
  name: string
  job: string
}

export const Counter = () => {
  const [users, setUsers] = useState<UserParams[]>()

  // render
  useEffect(() => {
    setUsers(customData)
  }, [])

  return (
    <View>
      <Text>Hello world</Text>
      {users &&
        users.map(({id, name, job}: UserParams) => {
          return (
            <View key={id}>
              <Text>{name}</Text>
            </View>
          )
        })}
    </View>
  )
}

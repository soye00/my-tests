
import { Button } from '@react-navigation/elements';
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text, TouchableOpacity, Alert } from 'react-native';




function Homescreen() {
  const isDarkMode = useColorScheme() === 'dark';
  // console.log('여기오나요?');
  const navigation = useNavigation();

  const buttonHandler = () => {
    console.log('버튼이 눌렸습니다.');
    Alert.alert('알림', '버튼이 눌렸습니다.', [
      {
        text: '확인',
        onPress: () => console.log('확인 버튼이 눌렸습니다.'),
      },
    ]);
  };

  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <View>
        <Text style={styles.title}>Hello😋</Text>
      </View>
      <View>
        <Text style={styles.title}>Hello😎</Text>
      </View>
      <View>
        <Text style={styles.title}>Hello💚</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{setValue(value + 1);}}>
        <Text style={styles.button}>변경💙{value}</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.button} onPress={buttonHandler}>
          <Text style={styles.buttonText}>버튼</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button onPress={()=>{navigation.navigate('Details')}} style={styles.button}>
          디테일로 이동
        </Button>
      </View>
    </View>

  )
}

function Detailscreen() {
  const navigation = useNavigation();
  const [result, setResult] = useState(null);

  const fetchPost = async () => {
    const number = Math.floor(Math.random()*10+1);
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`);
    console.log(result);

  }


  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      {
        result && (
          <View>
            <Text style={styles.title}>id: {result.id}</Text>
            <Text style={styles.title}>body: {result.body}</Text>
            <Text style={styles.title}>title: {result.title}</Text>
          </View>
        )
      }
      <TouchableOpacity style={styles.button} onPress={fetchPost}>
        <Text style={styles.buttonText}>데이터 가져오기</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {navigation.goBack();}}>
        <Text style={styles.buttonText}>뒤로가기</Text>
      </TouchableOpacity>
      
    </View>
    )      
  }    

const RootStack = createNativeStackNavigator(
  {
    initialRouteName: 'Home',
    screens: {
      Home: Homescreen,
      Details: Detailscreen,
    },
  }
);

const Navigation = createStaticNavigation(RootStack);

function App() {
  
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Homescreen} options={{ title: '홈 화면' }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Navigation/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'green',
  },
  button: {
    backgroundColor: 'pink',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity, 
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);
  const messages = [
    "할 수 있어! 💪",
    "넌 최고야! 🌟",
    "조금만 더 힘내자! 🚀",
    "오늘도 멋져! 😎",
    "포기하지 마! 🔥",
    '잘하고 있어요! 👍',
    '오늘도 빛나요 ✨',
    '휴식도 실력입니다 😌',
    '지금도 충분히 멋져요 😎',
    '에러는 친구예요 💻',
    '포기하지 마요! 🚀',
  ]
  const [message, setMessage] = useState("버튼을 눌러 메시지를 받아보세요");

  const showRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>공부합니다.</Text>
        <Text>공부합니다.</Text>
        <Text style={styles.title}>React Native🛸</Text>
        <Text>시작합니다.</Text>
      </View>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
      <View>
        <Text style={styles.text}>현재카운트:{count}</Text>
        <Button title="증가" onPress={()=>setCount(count + 1)} />
        <Button title="감소" onPress={()=>setCount(count - 1)}/>
      </View>
      <View>
        {/* 커스텀버튼 */}
        <Text>현재 카운트 : {count}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>증가</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount(0)} // 카운트 초기화
        >
          <Text style={styles.buttonText}>recet</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity style={styles.button} onPress={showRandomMessage}>
          <Text style={styles.buttonText}>응원메시지 받기</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 화면을 차지하도록 설정
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    backgroundColor: '#F5FCFF', // 배경색 설정
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  text : {
    fontSize: 24,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF', // 버튼 배경색
    padding: 10, // 패딩
    borderRadius: 5, // 모서리 둥글게
    marginTop: 10, // 위쪽 여백 
  },
  buttonText: {
    color: '#FFFFFF', // 버튼 텍스트 색상
    fontSize: 16, // 텍스트 크기
    textAlign: 'center', // 텍스트 중앙 정렬
  },
  message: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default App;

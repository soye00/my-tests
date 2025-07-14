import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {
  useNavigation,
} from '@react-navigation/native';



function DetailsScreen({ route }) {
  const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [nickname, setNicname] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
  
    return (
      <View className="flex-1 justify-center px-6 bg-white">
        <Text className="text-2xl font-bold mb-6 text-center">회원가입</Text>
  
        <Text className="mb-1 text-sm">이메일</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="example@email.com"
          className="border border-gray-300 rounded-md p-3 mb-4"
          keyboardType="email-address"
          autoCapitalize="none"
        />
  
        <Text className="mb-1 text-sm">닉네임</Text>
        <TextInput
          value={nickname}
          onChangeText={setNicname}
          placeholder="홍길동"
          className="border border-gray-300 rounded-md p-3 mb-4"
          autoCapitalize="none"
        />
  
        <Text className="mb-1 text-sm">비밀번호</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="********"
          secureTextEntry
          className="border border-gray-300 rounded-md p-3 mb-4"
        />
  
        <Text className="mb-1 text-sm">비밀번호 확인</Text>
        <TextInput
          value={confirm}
          onChangeText={setConfirm}
          placeholder="********"
          secureTextEntry
          className="border border-gray-300 rounded-md p-3 mb-6"
        />
  
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-md"
          onPress={() => {
            if (password !== confirm) {
              alert('비밀번호가 일치하지 않습니다.');
              return;
            }
            alert('회원가입 완료!');
          }}
        >
          <Text className="text-white text-center font-semibold">가입하기</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          className="mt-4"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-blue-500 text-center">← 로그인 화면으로 돌아가기</Text>
        </TouchableOpacity>
      </View>
    );
}

export default DetailsScreen;
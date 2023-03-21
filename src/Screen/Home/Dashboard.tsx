import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {signOut} from '../../Store/Reducer/UserAuthReducer';

function Dashboard() {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Dashboard</Text>
        <Button
          title="logout"
          onPress={async () => {
            dispatch(signOut());
            await AsyncStorage.clear();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;

import React, {useState} from 'react';
import AgoraUIKit from '../agora-rn-uikit';
import {Text} from 'react-native';

const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: '1f770513083d48ed97cc7800252f6389',
    channel: 'test',
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit rtcProps={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
};

export default App;

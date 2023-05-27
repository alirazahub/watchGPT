import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Audio } from 'expo-av';

const SpeechRecordingExample = () => {
    const [recording, setRecording] = useState(null);
  
    useEffect(() => {
      // Request permission to record audio
      (async () => {
        const { status } = await Audio.requestPermissionsAsync();
        if (status !== 'granted') {
          console.warn('Permission to access audio was denied.');
          return;
        }
      })();
    }, []);
  
    const startRecording = async () => {
      try {
        // Create a new recording object
        const recordingOptions = {
          android: {
            extension: '.wav',
            sampleRate: 44100,
            numberOfChannels: 1,
            bitRate: 128000,
          },
          ios: {
            extension: '.wav',
            audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MEDIUM,
            sampleRate: 44100,
            numberOfChannels: 1,
            bitRate: 128000,
            linearPCMBitDepth: 16,
            linearPCMIsBigEndian: false,
            linearPCMIsFloat: false,
          },
        };
        const newRecording = new Audio.Recording();
        await newRecording.prepareToRecordAsync(recordingOptions);
        await newRecording.startAsync();
        setRecording(newRecording);
        console.log('Recording started');
      } catch (error) {
        console.error('Failed to start recording', error);
      }
    };
  
    const stopRecording = async () => {
      try {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log('Recording stopped. URI:', uri);
        setRecording(null);
      } catch (error) {
        console.error('Failed to stop recording', error);
      }
    };
  
    return (
      <View>
        <Text>Speech Recording Example</Text>
        <Button title="Start Recording" onPress={startRecording} disabled={recording !== null} />
        <Button title="Stop Recording" onPress={stopRecording} disabled={recording === null} />
      </View>
    );
  };

export default SpeechRecordingExample;
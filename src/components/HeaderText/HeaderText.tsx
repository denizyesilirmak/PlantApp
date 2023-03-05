import {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';

type HeaderTextProps = {
  text: string;
  highlightedWord: string;
};

const HeaderText = ({text, highlightedWord}: HeaderTextProps) => {
  const highlightedTextRef = useRef<Text>(null);

  const handleOnLayout = () => {
    console.log('handleOnLayout')
  }

  if (!highlightedWord) {
    return (
      <View
        style={{
          width: '100%',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: 28,
            marginBottom: 6,
          }}>
          <Text
            style={{
              fontFamily: 'Rubik-Regular',
            }}>
            {text}
          </Text>
        </Text>
      </View>
    );
  }
  return (
    <View
      style={{
        width: '100%',
        marginTop: 10,
      }}>
      <Text
        style={{
          fontSize: 28,
          marginBottom: 6,
        }}>
        <Text
          style={{
            fontFamily: 'Rubik-Regular',
          }}>
          {text.substring(0, text.lastIndexOf(highlightedWord))}
        </Text>
        <Text
        onLayout={handleOnLayout}
          ref={highlightedTextRef}
          style={{
            fontFamily: 'Rubik-SemiBold',
            textDecorationLine: 'underline'
          }}>
          {highlightedWord}
        </Text>
        <Text
          style={{
            fontFamily: 'Rubik-Regular',
          }}>
          {text.substring(
            text.lastIndexOf(highlightedWord) + highlightedWord.length,
          )}
        </Text>
      </Text>
    </View>
  );
};

export default HeaderText;

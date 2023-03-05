import {useEffect, useRef, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {HomeIcon, UnderStrokeImage} from '../../assets';

const FONTSIZE = 28;

type HeaderTextProps = {
  text: string;
  highlightedWord: string;
};

const HeaderText = ({text, highlightedWord}: HeaderTextProps) => {
  const highlightedTextRef = useRef<Text>(null);

  if (!highlightedWord) {
    return (
      <View
        style={{
          width: '100%',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: FONTSIZE,
            marginBottom: 6,
            color: '#000000'
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
        marginBottom: 6,
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <View>
          <Text
            style={{
              fontFamily: 'Rubik-Regular',
              fontSize: FONTSIZE,
              color: '#000000'

            }}>
            {text.substring(0, text.lastIndexOf(highlightedWord))}
          </Text>
        </View>
        <View>
          <Text
            ref={highlightedTextRef}
            style={{
              fontFamily: 'Rubik-SemiBold',
              fontSize: FONTSIZE,
              color: '#000000'
            }}>
            {highlightedWord}
          </Text>
          <Image
            source={UnderStrokeImage}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              width: '100%',
              bottom: -1 * FONTSIZE * 1.6,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'Rubik-Regular',
              fontSize: FONTSIZE,
              color: '#000000'

            }}>
            {text.substring(
              text.lastIndexOf(highlightedWord) + highlightedWord.length,
            )}
          </Text>
      </View>
    </View>
  );
};

export default HeaderText;

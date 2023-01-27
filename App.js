import React from "react";
import { text , view} from 'react-native';

const cat = () => {
  return(
      <view>
        <text>I am a Cat</text>
      </view>
  );
};

const cafe = () => {
  return (
    <view>
      <text>Yo welcome</text>
      <cat />
      <cat />
      <cat />
    </view>
  );

};

export default cafe;
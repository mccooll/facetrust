import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import Comment from '../../component/comment'
import View from '../../component/view'

storiesOf('Comment', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('write comments', () => <Comment />)
storiesOf('View', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Tweet', () => <View />)
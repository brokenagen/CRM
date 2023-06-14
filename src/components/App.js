/**
 * Created By: Gabriel Castellano
 * Date: 14-06-2023
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image,View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import Navigation from './Navigation';
import { Appbar } from 'react-native-paper';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Appbar.Header style={{backgroundColor: '#d44848'}}>
          <Appbar.Content color={'blue'} style={{backgroundColor: '#d44848'}} title="CRM APP" subtitle={'Developed using React Native'} />
        </Appbar.Header>
        <Navigation />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fc0328',
  },
});

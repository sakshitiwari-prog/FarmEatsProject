import * as React from 'react';
import {Button, List, Modal, PaperProvider, Portal} from 'react-native-paper';
import {styles} from './index.style';
import {Text, TouchableOpacity, View} from 'react-native';

const ErrorModal = ({error, msg, onCloseModel}: any) => {
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <>
      {error && (
        <Modal
          style={styles.errorContainer}
          visible={error}
          onDismiss={() => onCloseModel()}
          contentContainerStyle={styles.modal}>
          <Text style={styles.errorText}>{msg}</Text>
        </Modal>
      )}
    </>
  );
};

export default ErrorModal;

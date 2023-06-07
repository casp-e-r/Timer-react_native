import { StyleSheet,Platform } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: "ffffff",
    paddingTop: Platform.OS === 'android' ? 25 : 0
}
});

export default globalStyles;
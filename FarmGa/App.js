import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Schedule from './pages/Schedule'
import Statistic from './pages/Statistic'
import Notification from './pages/Notification'
import ControlDeviceList from './components/ControlDeviceList';
import EditControlDevice from './pages/EditControlDevice';
import Account from './pages/Account';

export default function App() {
  return (
    <NativeRouter>
      <StatusBar style="auto" />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/schedule' element={<ControlDeviceList />} />
        <Route path='/schedule/device/edit/:id' element={<EditControlDevice />} />
        <Route path='/statistic' element={<Statistic />}/>
        <Route path='/notification' element={<Notification />}/>
        <Route path='/account' element={<Account />}/>
      </Routes>
      <Navbar />  
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

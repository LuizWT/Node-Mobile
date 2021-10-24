import React from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {useAuth} from '../../hooks/auth'

import { UserPhoto } from '../../components/UserPhoto';

import LogoSvg from '../../assets/logo.svg';

import { styles } from './styles';

export function Header(){
  const {signOut, user} = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        
        { user &&
          <TouchableOpacity
            onPress={signOut}
          >
            <Text style={styles.logouText}>Sair</Text>
          </TouchableOpacity>
        }
      
        <UserPhoto 
          imageUri={user?.avatar_url}
          sizes='NORMAL'
        />      
      </View>

    </View>
  );
}
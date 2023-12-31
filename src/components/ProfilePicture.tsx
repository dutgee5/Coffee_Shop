import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';

const ProfilePicture = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/app_images/avatar.png')}
        style={styles.image}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  imageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

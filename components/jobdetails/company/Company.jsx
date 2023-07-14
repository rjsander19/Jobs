import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './company.style';
import { icons } from '../../../constants';

const defaultLogo = 'https://i.ibb.co/chsRn76/Screenshot-2023-07-13-at-1-21-17-PM.png';

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
      { companyLogo ? (
        <Image
          source={{ uri: companyLogo
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
        ) : (
          <Image
          source={{ uri: defaultLogo }}
          resizeMode="contain"
          style={styles.logoImage}
        />
        )}
      </View>

        <View style={styles.jobTitleBox}>
          <Text style={styles.jobTitle}>
            {jobTitle}
          </Text>
        </View>

        <View style={styles.companyInfoBox}>
          <Text style={styles.companyName}>
            {companyName}
          </Text>
            <View styles={styles.locationBox}>
              <Image
                source={icons.location}
                resizeMode='contain'
                style={styles.locationImage}
              />
              <Text style={styles.locationName}>{location}</Text>
            </View>
        </View>

    </View>
  )
};

export default Company;
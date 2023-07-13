import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './nearbyjobcard.style';


const defaultLogo = 'https://i.ibb.co/chsRn76/Screenshot-2023-07-13-at-1-21-17-PM.png';


const NearbyJobCard = ({ job, handleNaviagte }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={handleNaviagte} >
      <TouchableOpacity style={styles.logoContainer}>
      {job?.employer_logo ? (
        <Image
          source={{ uri: job?.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
          />
      ) : (
        <Image
          source={{ uri: defaultLogo }}
          resizeMode="contain"
          style={styles.logoImage}
          />
          )}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text style={styles.jobType}>
          {job?.job_employment_type}
        </Text>

      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
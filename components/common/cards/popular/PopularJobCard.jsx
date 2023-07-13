import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './popularjobcard.style';


const defaultLogo = 'https://i.ibb.co/chsRn76/Screenshot-2023-07-13-at-1-21-17-PM.png';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)} 
    >

      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        {item.employer_logo ? (
        <Image
          source={{ uri: item.employer_logo
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
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View styles={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}> {item.job_title} </Text>
        <Text style={styles.location}> {item.job_country} </Text>

      </View>
    </TouchableOpacity>
  )
};

export default PopularJobCard;
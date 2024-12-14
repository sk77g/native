import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../shared/Card';

const About = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Welcome to GameZone</Text>
        <Text style={styles.content}>Discover, rate, and share your experiences with a wide range of products, services, and experiences. Our community is built on honest reviews, helping you make informed decisions every time.</Text>
        <Text style={styles.footer}>Start rating and reviewing today! Your feedback helps everyone make better choices.</Text>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "#f0f0f0", // Background color for the container
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 25,
    backgroundColor: '#ffffff', // Card background color
    borderRadius: 15,
    elevation: 10, // Shadow effect for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    width: '90%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#F72C5B', // Bright color for title
  },
  content: {
    fontSize: 16,
    color: '#555', // Light grey for content text
    textAlign: 'center',
    lineHeight: 24,
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  footer: {
    fontSize: 16,
    color: '#118B50', // Green color for footer
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '600', // Slightly bolder for emphasis
    paddingHorizontal: 15,
    lineHeight: 22,
  }
});

export default About;

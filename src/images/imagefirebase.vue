<template>
  <h2><img :src="sto" alt=""></h2>
  <div>
    <h2>Image Upload</h2>
    <input type="file" @change="handleFileChange" accept="image/*">
    <button @click="uploadImage">Upload Image</button>

    <div v-if="imageUrl">
      <img :src="imageUrl" alt="Uploaded Image">
    </div>

    <div v-if="progress > 0">
      <p>{{ progress }}% Uploaded</p>
    </div>

    <div v-if="error">
      <p style="color: red;">Error: {{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storage } from '../firebase_auth';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const sto =ref("https://firebasestorage.googleapis.com/v0/b/dental-clinic-7c69f.appspot.com/o/images%2FScreenshot%20from%202023-12-11%2009-56-45.png?alt=media&token=a1b94813-e42b-48dd-8c45-f379265ba8b7")
// Reactive variables
const file = ref(null);
const imageUrl = ref(null);
const progress = ref(0);
const error = ref(null);

// Event handler for file change
const handleFileChange = (e) => {
  file.value = e.target.files[0];
};

// Event handler for image upload
const uploadImage = async () => {
  // Check if a file is selected
  if (!file.value) return;

  // Create a storage reference
  const storageRef1 = storageRef(storage, `images/${file.value.name}`);
  
  // Create an upload task
  const uploadTask = uploadBytesResumable(storageRef1, file.value);

  try {
    // Event listener for upload progress
    uploadTask.on('state_changed',
      (snapshot) => {
        const progressValue = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        progress.value = progressValue;
      },
      // Error handler
      (error) => {
        error.value = error.message;
      },
      // Upload complete handler
      async () => {
        // Get the download URL
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        
        // Update the imageUrl
        imageUrl.value = downloadURL;
        
        // Additional actions with the download URL if needed
        console.log('Image URL:', downloadURL);
      }
    );
  } catch (error) {
    // Handle any exceptions during the upload
    error.value = error.message;
  }
};
</script>

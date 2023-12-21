<template>
  <div>
    <h1>Auto Refresh Example</h1>
    <div class="refresh-content">
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.fullName }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase_auth';
import { collection, getDocs } from 'firebase/firestore';

export default {
  data: () => ({
    items: [{ title: 'Welcome to Vuetify!' }],
  }),
  mounted() {
    this.dataload();
    // Set up an interval to refresh data every 5 seconds
    this.refreshInterval = setInterval(this.dataload, 5000);
  },
  beforeDestroy() {
    // Clear the interval when the component is destroyed to prevent memory leaks
    clearInterval(this.refreshInterval);
  },
  methods: {
    async dataload() {
      const patientsCollectionRef = collection(db, 'notifications');
      try {
        // Retrieve all documents from the "notifications" collection
        const querySnapshot = await getDocs(patientsCollectionRef);

        // Clear existing items
        this.items = [];

        // Iterate through the documents and push the data to the items array
        querySnapshot.forEach((doc) => {
          this.items.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error('Error retrieving documents:', error.message);
      }
    },
  },
};
</script>

<style scoped>
.refresh-content {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}
</style>

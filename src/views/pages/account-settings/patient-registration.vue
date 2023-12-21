<script setup>
import avatar1 from "@images/avatars/avatar-1.png";
import routes from "../../../router/index";
import { db  } from "../../../firebase_auth";
import {storage} from "../../../firebase_auth"
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc ,getDocs } from "firebase/firestore";
import {  uploadBytes } from 'firebase/storage';
import { ref } from "vue";
import notificationsVue from "@/pages/notifications.vue";

const selectedFile = ref(null);


 

const accountData = {
  avatarImg: avatar1,
  firstName: "john",
  lastName: "Doe",
  email: "johnDoe@example.com",
  org: "ThemeSelection",
  phone: "+1 (917) 543-9876",
  address: "123 Main St, New York, NY 10001",
  state: "New York",
  zip: "10001",
  country: "USA",
  language: "English",
  timezone: "(GMT-11:00) International Date Line West",
  currency: "USD",
};

const done = ref(true);

const totoal = ref(Number())

const items= ref([])

const patient = ref({
  _id:Number()+1,
  address: "866 Locust Street, Maplewood, Minnesota, 7879",
  age: 32,
  create_at: Date(),
  delete_at: null,
  email: "mindybarton@digial.com",
  dob:"",
  first_name: "Mindy",
  gender: "female",
  is_active: false,
  last_name: "Barton",
  phone: "+1 (807) 584-3245",
  picture: avatar1,
});


console.log(patient.value.picture);    

const refInputEl = ref();
const accountDataLocal = ref(patient);
const isAccountDeactivated = ref(false);

const resetForm = () => {
  accountDataLocal.value = structuredClone(patient);
};

const data = async () => {
  console.log(storage);
  const patientsCollectionRef = collection(db, "patients");
    try {
      // Retrieve all documents from the "patients" collection
      const querySnapshot = await getDocs(patientsCollectionRef);

      // Iterate through the documents and push the data to the items array
      querySnapshot.forEach((doc) => {
        items.value.push({ id: doc.id, ...doc.data() });
      });
      // Handle success, e.g., update your component's data property with the retrieved data
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Error retrieving documents:", error.message);
    }
   patient.value._id=items.value.length+1
}

data()




const file = ref(null);
const imageUrl = ref(null);
const progress = ref(0);
const error = ref(null);


// Event handler for file change
const handleFileChange = (e) => {
  file.value = e.target.files[0];
  if (file.value) {
    patient.value.picture = URL.createObjectURL(file.value);
  }
};


// Event handler for image upload
const uploadImage = async () => {
  if (!file.value) {
    console.error('No file selected');
    return;
  }

  const storageRef1 = storageRef(storage, `images/${file.value.name}`);
  const uploadTask = uploadBytesResumable(storageRef1, file.value);

  try {
    uploadTask.on('state_changed',
      (snapshot) => {
        const progressValue = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        progress.value = progressValue;
      },
      (error) => {
        error.value = error.message;
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        imageUrl.value = downloadURL;
        console.log('Image URL:', patient.value.picture=downloadURL);
      }
    );
  } catch (error) {
    error.value = error.message;
  }
};



const notificationstry = ref({
  notifications:'',
  fullName:patient.value.first_name+' '+patient.value.last_name
})

const notifications = async () =>{
      try {
    // Create a reference to the "patients" collection
    const patientsCollectionRef = collection(db, "notifications");

    // Add a new document to the "patients" collection with the form data
    const docRef = await addDoc(patientsCollectionRef, notificationstry.value);
    // Log the ID of the newly created document
    console.log("Document written with ID:", docRef.id);
    done.value =false

  } catch (error) {
    // Handle errors, e.g., show an error message to the user
    console.error("Error adding document:", error);
  }
    }


const addPatient = async () => {

  try {
    // Create a reference to the "patients" collection
      uploadImage()
    const patientsCollectionRef = collection(db, "patients");

    // Add a new document to the "patients" collection with the form data
    const docRef = await addDoc(patientsCollectionRef, patient.value);

    // Log the ID of the newly created document
    console.log("Document written with ID:", docRef.id);
    notificationstry.value.notifications = docRef.id
     notificationstry.value.fullName =patient.value.first_name + ' ' +patient.value.last_name
    notifications()
  } catch (error) {
    // Handle errors, e.g., show an error message to the user
    console.error("Error adding document:", error);
  }
};



const changeAvatar = (file) => {
  const fileReader = new FileReader();
  const { files } = file.target;
  if (files && files.length) {
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      if (typeof fileReader.result === "string")
        accountDataLocal.value.picture = fileReader.result;
    };
  }
};



async function  uploadFile() {
  if (!selectedFile.value) {
    console.error('No file selected');
    return;
  }

  try {
    const storageRef = ref(storage, `uploads/${selectedFile.value.name}`);

    // Put the file in storage
    const uploadTask = uploadBytes(storageRef, selectedFile.value);

    // Wait for the upload to complete
    const snapshot = await uploadTask;

    console.log('File uploaded successfully!', snapshot);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
}



</script>

<template>


  <VRow v-if="done">
    <VCol cols="12">
      <VCard title="Patient Registration">
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="patient.picture"
          />


          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
              color="primary"
              @click="refInputEl?.click()"
            >
              <VIcon
                icon="mdi-cloud-upload-outline"
                class="d-sm-none"
              />
              <span class="d-none d-sm-block">Upload new photo</span>
            </VBtn>

            <input
              ref="refInputEl"
              type="file"
              name="file"
              accept=".jpeg,.png,.jpg,GIF"
              hidden
              @change="handleFileChange"
            >

              <VBtn type="reset" color="error" variant="tonal" @click="uploadFile">
                <span class="d-none d-sm-block">Reset</span>
                <VIcon icon="mdi-refresh" class="d-sm-none" />
              </VBtn>
            </div>

            <p class="text-body-1 mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
          </form>
        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
         

            <VRow>
             <!-- firest Name -->

              <VCol md="6" cols="12">
                <VTextField v-model="patient.first_name" label="Last Name" />
              </VCol>
  
               <!-- Last Name -->
               <VCol md="6" cols="12">
                <VTextField v-model="patient.last_name" label="Last Name" />
              </VCol>

              <!-- Address -->
              <VCol md="6" cols="12">
                <VTextField v-model="patient.address" label="Address" />
              </VCol>
        
              <!-- Age -->
              <VCol md="6" cols="12">
                <VTextField v-model="patient.age" label="Age" />
              </VCol>
        
              <!-- Email -->
              <VCol md="6" cols="12">
                <VTextField v-model="patient.email" label="Email" />
              </VCol>
        
              <!-- DOB -->
              <VCol md="6" cols="12">
                <VTextField v-model="patient.dob" type="Date" label="Date of Birth" />
              </VCol>
        
           
        
              <!-- Gender -->
              <VCol md="6" cols="12">
                <VSelect v-model="patient.gender" label="Gender" :items="['Male', 'Female']" />
              </VCol>
        
        
             
        
              <!-- Phone -->
              <VCol md="6" cols="12">
                <VTextField v-model="patient.phone" label="Phone" />
              </VCol>
        
              <!-- Form Actions -->
<br>
              <!-- Is Active -->
              <VCol md="6" cols="12">
                <VCheckbox v-model="patient.is_active" label="Is Active" />
              </VCol>
              <VCol cols="12" class="d-flex flex-wrap gap-4">
                <VBtn @click="addPatient">Submit</VBtn>
                <VBtn color="secondary" variant="tonal" type="reset" @click.prevent="resetForm">
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>

  <div v-else>
    <v-sheet
      elevation="12"
      max-width="600"
      rounded="lg"
      width="100%"
      class="pa-4 text-center mx-auto"
    >
      <v-icon
        class="mb-5"
        color="success"
        icon="mdi-check-circle"
        size="112"
      ></v-icon>
      <!-- <h2 class="text-h5 mb-6">{{patient.first_name}}  {{ patient.last_name }}</h2> -->
  
      <h2 class="text-h5 mb-6"> Registration  successfully</h2>
  
     
      <p class="mb-4 text-medium-emphasis text-body-2">
        Dental clinic information successfully registered!
        <br>
        To see a report on this reconciliation, click
        <a href="#" class="text-decoration-none text-info" @click="viewReconciliationReport">View reconciliation report.</a>
        <br>
        Otherwise, you're done!
      </p>
  
  
      <v-divider class="mb-4"></v-divider>
  
      <div class="text-end">
        <v-btn
          class="text-none"
          color="success"
          rounded
          variant="flat"
          width="90"
          to="/typography"
        >
          Done
        </v-btn>
      </div>
    </v-sheet>
  </div>
</template>

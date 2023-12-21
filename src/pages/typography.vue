<template>
  <div >
    <div></div>

    <div >
      <div class="text-center">
        <v-dialog v-model="delatedialog" width="auto">
          <v-card>
            <div class="container">
              <div class="box">
                <h3>Delete</h3>
                <p>Are you sure you want to delete</p>

                <div style="text-align: center">
                  <h2>{{ delateIdname }}</h2>
                </div>
                <br />

                <div class="clearfix" style="text-align: center">
                  <!-- <a class="btn1" id="cancel" href="">Cancel</a> -->
                  <v-btn @click="delateDocument12()" class="btn2">Delete </v-btn>
                </div>
                <br />
              </div>
            </div>

            <v-card-actions>
              <v-btn color="primary" block @click="delatedialog = false"
                >Close Dialog</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <!-- profile info -->

      <!-- Search Bar -->
      <br />
      <div >
      <v-row  justify="center">
        <v-dialog
          v-model="dialog1"
          fullscreen
          :scrim="false"
          transition="dialog1-bottom-transition"
        >
          <template v-slot:activator="{ props }"> </template>
          <v-card>
            <v-toolbar dark color="purple">
              <v-btn icon dark @click="dialog1 = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Profile</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn variant="text" @click="dialog1 = false"> cancel </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list lines="two" subheader>
              <VRow>
                <VCol cols="12">
                  <VCard class="text-center mx-auto d-flex flex-column">
                    <!-- 👉 Form -->
                    <!-- <VForm class="mt-6"> -->
                    <div id="your-html-element-id" class="container">
                      <div class="main-body">
                        <div class="row">
                          <div class="col-lg-50">
                            <div class="card">
                              <div class="card-body">
                                <div
                                  class="d-flex flex-column align-items-center text-center"
                                >
                                  <img
                                    :src="user.picture"
                                    alt="Admin"
                                    class="rounded-circle p-1 bg-primary"
                                    width="110"
                                  />
                                  <div class="mt-3">
                                    <h4>{{ user.first_name }} {{ user.last_name }}</h4>
                                    <!-- <p class="text-secondary mb-1">Full Stack Developer</p> -->
                                    <!-- <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> -->
                                    <!-- <button class="btn btn-primary">Follow</button> -->
                                    <!-- <button class="btn btn-outline-primary">Message</button> -->
                                  </div>
                                </div>
                                <div class="card">
                                  <div class="card-body">
                                    <div class="row mb-3">
                                      <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                      </div>
                                      <div class="col-sm-9 text-secondary">
                                        <input
                                          type="text"
                                          class="form-control"
                                          :value="user.first_name + ' ' + user.last_name"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                      </div>
                                      <div class="col-sm-9 text-secondary">
                                        <input
                                          type="text"
                                          class="form-control"
                                          :value="user.email"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                      </div>
                                      <div class="col-sm-9 text-secondary">
                                        <input
                                          type="text"
                                          class="form-control"
                                          :value="user.phone"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <div class="col-sm-3">
                                        <h6 class="mb-0">Age</h6>
                                      </div>
                                      <div class="col-sm-9 text-secondary">
                                        <input
                                          type="text"
                                          class="form-control"
                                          :value="user.age"
                                        />
                                      </div>
                                    </div>
                                    <div class="row mb-3">
                                      <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                      </div>
                                      <div class="col-sm-9 text-secondary">
                                        <input
                                          type="text"
                                          class="form-control"
                                          :value="user.address"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <br /><br />
                        </div>
                      </div>
                    </div>
                    <!-- </VForm> -->
                  </VCard>
                </VCol>
              </VRow>
            </v-list>
            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </v-row>
      </div>
      <!-- end -->
      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          fullscreen
          :scrim="false"
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ props }"> </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Edit Patient :</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn variant="text" @click="dialog = false"> cancel </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-list lines="two" subheader>
              <v-list-subheader>User Profile</v-list-subheader>
              <VRow>
                <VCol cols="12">
                  <VCard>
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
                        <div>
                          <div class="d-flex flex-wrap gap-2">
                            <input
                              ref="refInputEl"
                              type="file"
                              name="file"
                              accept=".jpeg,.png,.jpg,GIF"
                              @change="handleFileChange"
                            />

                            <VBtn
                              type="reset"
                              color="error"
                              variant="tonal"
                              @click="uploadImage"
                            >
                              <span class="d-none d-sm-block">Update Image</span>
                              <VIcon icon="mdi-refresh" class="d-sm-none" />
                            </VBtn>
                          </div>
                        </div>

                        <p class="text-body-1 mb-0">
                          Allowed JPG, GIF or PNG. Max size of 800K
                        </p>
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
                            <VTextField
                              v-model="patient.dob"
                              type="date"
                              label="Date of Birth"
                            />
                          </VCol>

                          <!-- Gender -->
                          <VCol md="6" cols="12">
                            <VSelect
                              v-model="patient.gender"
                              label="Gender"
                              :items="['Male', 'Female']"
                            />
                          </VCol>

                          <!-- Phone -->
                          <VCol md="6" cols="12">
                            <VTextField v-model="patient.phone" label="Phone" />
                          </VCol>

                          <!-- Form Actions -->
                          <br />
                          <!-- Is Active -->
                          <VCol md="6" cols="12">
                            <VCheckbox v-model="patient.is_active" label="Is Active" />
                          </VCol>
                          <VCol cols="12" class="d-flex flex-wrap gap-4">
                            <VBtn @click="update">Update</VBtn>
                            <VBtn
                              color="secondary"
                              variant="tonal"
                              type="reset"
                              @click.prevent="resetForm"
                            >
                              Reset
                            </VBtn>
                          </VCol>
                        </VRow>
                      </VForm>
                    </VCardText>
                  </VCard>
                </VCol>
              </VRow>
              <div v-if="reloade">
                <reloade />
              </div>
            </v-list>
            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </v-row>
      <!-- Patient Table -->

      <v-text-field
        v-model="searchQuery"
        color="success"
        append-inner-icon="mdi-user"
        auto-select-first
        class="flex-full-width"
        density="comfortable"
        item-props
        menu-icon=""
        placeholder="Search Google or type a URL"
        prepend-inner-icon="mdi-magnify"
        rounded
        theme="light"
        variant="solo"
      ></v-text-field>

      <br />
      <!--  -->
      <v-table fixed-header height="600px">
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Full Name</th>
            <th class="text-left">Address</th>
            <th class="text-left">Contact</th>
            <th class="text-left">Profile</th>
            <th class="text-left">Edit</th>
            <th class="text-left">Delate</th>
            <th class="text-left">Download</th>
          </tr>
        </thead>
        <tbody >
          <tr   :class="[
            index % 1 === 0 ? 'py-2' : index % 5 === 0 ? 'py-8' : 'py-4',
            index % 2 === 0 ? 'bg-grey-lighten-2' : index % 1 === 0 ? 'bg-slow' : '',
            'px-2',  // Added class for styling
          ]" v-for="(patient, index) in filteredItems" :key="patient.id">
            <td>{{ index }}</td>
            <td>{{ patient.first_name }} {{ patient.last_name }}</td>
            <td>{{ patient.address }}</td>
            <td>{{ patient.phone }}</td>
            <td>
              <v-row justify="space-around" rounded="10">
                <button
                  @click="viewPatientDetails(patient.id)"
                  class="action-btn view-btn"
                >
                  <v-icon
                    size="x-large"
                    color="green-darken-8"
                    icon="mdi-user"
                    @click="viewPatientDetails(patient.id)"
                    class="custom-icon"
                  ></v-icon>
                </button>
              </v-row>

              <!-- Scrollable modal -->
            </td>
            <td>
              <button  class="action-btn edit-btn">
                <v-icon
                  size="large"
                  color="blue-darken-8"
                  icon="mdi-edit"
                  @click="editPatient(patient.id)"
                  class="custom-icon"
                ></v-icon>
              </button>
            </td>
            <td>
              <button
                @click="
                  deleteDocument(
                    patient.id,
                    patient.first_name + '  ' + patient.last_name
                  )
                "
                class="action-btn delete-btn"
              >
                <v-icon
                  size="large"
                  color="red-darken-8"
                  icon="mdi-delete"
                  @click="
                    deleteDocument(
                      patient.id,
                      patient.first_name + ' ' + patient.last_name
                    )
                  "
                  class="custom-icon"
                ></v-icon>
              </button>
            </td>
            <td>
              <button
              
                class="action-btn delete-btn2"
              >
                <v-icon
                @click="generatePDF(patient.id)"
                  size="large"
                  color="red-darken-8"
                  icon="mdi-download"
                  class="custom-icon"
                ></v-icon>
              </button>
            </td>
          </tr>
        </tbody>
      </v-table>
      <!-- Patient Details Modal -->
      <div v-if="selectedPatient" class="modal">
        <div class="modal-container">
          <h3>{{ selectedPatient.fullName }} - Details</h3>
          <p><strong>Date of Birth:</strong> {{ selectedPatient.dob }}</p>
          <p><strong>Contact:</strong> {{ selectedPatient.contact }}</p>
          <!-- Add more patient details as needed -->
          <button @click="closeDetailsModal" class="modal-btn">Close</button>
        </div>
      </div>


    </div>
  </div>

  <!-- Download link for the generated PDF -->
  <a v-if="pdfBlob" :href="pdfBlobUrl" download="generated-document.pdf">
    Download PDF
  </a>
</template>
<script>
import reloade from "./reloade.vue";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { db, storage } from "@/firebase_auth";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default {
  data() {
    return {
      pdfBlob: null,
      pdfBlobUrl: null,
      reloade: false,
      file: null,
      searchQuery: "",
      delatedialog: false,
      delatedId: "",
      delateIdname: "",
      idcollstion: "",
      proifleid: "",
      dialog: false,
      dialog1: false,
      notifications: false,
      user: {},
      patient: {
        // your patient object properties
      },
      sound: true,
      widgets: false,
      isActive: true,
      items: [],
      itemId: "",
      itemName: "",
      newData: {
        name: "John Doe",
        age: 30,
        city: "New York",
      },
      patients: [],
    };
  },
  mounted() {
    this.userListing();
  },
  created() {
    const patientsCollectionRef = collection(db, "patients");

    // Set up a real-time listener to update the data when it changes in Firestore
    onSnapshot(patientsCollectionRef, (snapshot) => {
      this.items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
  },
  methods: {
    async generatePDF(id) {

// Retrieve patient details
await this.viewPatientDetails(id);

// Wait for the viewPatientDetails method to complete before proceeding
// Access the patient details or relevant HTML element ID here

// Capture HTML element and generate PDF

setTimeout( async() => {
const element = document.getElementById('your-html-element-id');
const pdf = new jsPDF('p', 'mm', 'a4');
const canvas = await html2canvas(element);
const aspectRatio = canvas.width / canvas.height;
let imgWidth, imgHeight;
if (aspectRatio > 1) {
  imgWidth = 210; // Set the width of the image to the full width of the A4 page
  imgHeight = 210 / aspectRatio; // Calculate the height based on the aspect ratio
} else {
  imgWidth = 297 * aspectRatio; // Calculate the width based on the aspect ratio
  imgHeight = 297; // Set the height of the image to the full height of the A4 page
}
pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);

pdf.save(`${id}.pdf`);

this.dialog1 = false
}, 1000);
  },
    async userListing() {},
    handleFileChange(e) {
      this.file = e.target.files[0];
      if (this.file) {
        this.patient.picture = URL.createObjectURL(this.file);
      }
    },
    async uploadImage() {
      if (!this.file) {
        console.error("No file selected");
        return;
      }

      this.reloade = true;
      const storageRef1 = storageRef(storage, `images/${this.file.name}`);
      const uploadTask = uploadBytesResumable(storageRef1, this.file);

      try {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progressValue = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(progressValue);
          },
          (error) => {
            console.log(error.message);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            this.reloade = false;
            this.patient.picture = downloadURL;
          }
        );
      } catch (error) {
        console.error("Error uploading image:", error.message);
      }
    },
    async viewPatientDetails(profileId) {
      this.profileId = profileId;
      this.dialog1 = true;

      try {
        const docRef = doc(db, "patients", this.profileId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          this.user = docSnapshot.data();
        } else {
          console.error("Document not found.");
        }
      } catch (error) {
        console.error("Error fetching document data:", error);
      }
    },
    resetForm() {
      this.patient = {
        // reset patient properties
      };
    },
    async deleteDocument(id, name) {
      this.delatedialog = true;
      this.delateIdname = name;
      this.delatedId = id;
    },
    async delateDocument12() {
      const itemDocRef = doc(db, "patients", this.delatedId);

      try {
        await deleteDoc(itemDocRef);
        console.log("Document deleted successfully.");
        this.delatedialog = false;
        this.userListing();
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    },
    async update() {
      try {
        const docRef = doc(db, "patients", this.idcollstion);
        await updateDoc(docRef, this.patient);
        this.reloade = false;
        this.dialog = false;
        this.userListing();
        console.log("Document updated successfully.");
      } catch (error) {
        console.error("Error updating document:", error);
      }
    },
    async showdata() {
      // implement your showdata logic
    },
    async editPatient(id) {
      this.idcollstion = id;
      this.dialog = true;

      try {
        const docRef = doc(db, "patients", this.idcollstion);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          this.patient = docSnapshot.data();
          this.user = docSnapshot.data();
        } else {
          console.error("Document not found.");
        }
      } catch (error) {
        console.error("Error fetching document data:", error);
      }
    },
  },
  computed: {
    filteredItems() {
      return this.items.filter((patient) =>
        `${patient.first_name + patient.last_name} ${patient.phone} ${patient.age} ${
          patient.address
        }`
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>
<style scoped>

.container {
  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.box h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: #112a43;
}
.box p {
  color: #112a43;
}

.warn_info {
  height: 100px;
  width: 95%;
  margin: 30px 0;
  background-color: #ffe7d9;
  padding: 15px;
  border-radius: 4px;
  position: relative;
}
.warn_info::before {
  position: absolute;
  content: "";
  height: 100px;
  width: 3px;
  top: 0px;
  left: 0px;
  background-color: #f47142;
}

.warn_info h4 {
  color: #7e1709;
  margin: 10px 0;
}

.warn_info p {
  color: #f47142;
}

.clearfix .btn1 {
  background-color: #627d98;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;
  padding: 8px 35px;
}

.clearfix .btn2 {
  text-align: center;
  margin: auto;
  padding: 8px 20px;
  background-color: #e12d39;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;
}

/* Add your component-specific styles here if needed */
.modal-confirm {
  color: #636363;
  width: 400px;
}
.modal-confirm .modal-content {
  padding: 20px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-size: 14px;
}
.modal-confirm .modal-header {
  border-bottom: none;
  position: relative;
}
.modal-confirm h4 {
  text-align: center;
  font-size: 26px;
  margin: 30px 0 -10px;
}
.modal-confirm .close {
  position: absolute;
  top: -5px;
  right: -2px;
}
.modal-confirm .modal-body {
  color: #999;
}
.modal-confirm .modal-footer {
  border: none;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
  padding: 10px 15px 25px;
}
.modal-confirm .modal-footer a {
  color: #999;
}
.modal-confirm .icon-box {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  z-index: 9;
  text-align: center;
  border: 3px solid #f15e5e;
}
.modal-confirm .icon-box i {
  color: #f15e5e;
  font-size: 46px;
  display: inline-block;
  margin-top: 13px;
}

.modal-confirm .btn {
  color: #fff;
  border-radius: 4px;
  background: #60c7c1;
  text-decoration: none;
  transition: all 0.4s;
  line-height: normal;
  min-width: 120px;
  border: none;
  min-height: 40px;
  border-radius: 3px;
  margin: 0 5px;
  outline: none !important;
}
.modal-confirm .btn-info {
  background: #c1c1c1;
}
.modal-confirm .btn-info:hover,
.modal-confirm .btn-info:focus {
  background: #a8a8a8;
}
.modal-confirm .btn-danger {
  background: #f15e5e;
}
.modal-confirm .btn-danger:hover,
.modal-confirm .btn-danger:focus {
  background: #ee3535;
}

h1.sixth {
  position: relative;
}

h1.sixth:before,
h1.sixth:after {
  content: "[";
  display: inline-block;
  position: relative;
  top: 1px;
  height: 100%;
  font-size: 1.25em;
  color: tomato;

  transition: all 0.5s ease;
}

h1.sixth:after {
  content: "]";
}

h1.sixth:hover:before {
  transform: translateX(-5px);
}

h1.sixth:hover:after {
  transform: translateX(5px);
}
.trigger-btn {
  display: inline-block;
  margin: 100px auto;
}

.profile-card {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.name {
  font-size: 1.5em;
  font-weight: bold;
}

.info {
  color: #666;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.action-btn {
  padding: 6px 10px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.view-btn {
  background-color: #5cb85c;
  color: #fff;
}

.edit-btn {
  background-color: #f0ad4e;
  color: #fff;
}

.delete-btn {
  background-color: #d9534f;
  color: #fff;
}

.delete-btn2 {
  background-color: #098a1c;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px; 
}

.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-btn {
  padding: 8px 12px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

.modal-btn.update-btn {
  background-color: #5cb85c;
  color: #fff;
}

.modal-btn.cancel-btn {
  background-color: #d9534f;
  color: #fff;
}
</style>

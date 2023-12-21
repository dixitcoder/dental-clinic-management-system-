<script setup>
import router from "@/router";
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";
import authV1MaskDark from "@images/pages/auth-v1-mask-dark.png";
import authV1MaskLight from "@images/pages/auth-v1-mask-light.png";
import authV1Tree2 from "@images/pages/auth-v1-tree-2.png";
import authV1Tree from "@images/pages/auth-v1-tree.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onMounted } from "vue";
import { useTheme } from "vuetify";
import { useStore } from "vuex";
import { auth } from "../firebase_auth";

const store = useStore();

const form = ref({
  email: "",
  password: "",
  remember: false,
});

const newcall = () => {
  let log = store.state.users;
  log = false;
  console.log(log);
};

newcall();

const loginError = ref(false);

const isAuthenticated = ref(false);

onMounted(() => {
  auth.onAuthStateChanged((user) => {
    isAuthenticated.value = !!user;
    if (user) {
      router.push('/dashboard');
    }
  });
});

    const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, form.value.email, form.value.password);
    const user = userCredential.user.accessToken;
    isAuthenticated.value = true;
    console.log(user);
    router.push("/dashboard");
  } catch (error) {
    loginError.value = true;
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
};

const vuetifyTheme = useTheme();

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === "light" ? authV1MaskLight : authV1MaskDark;
});

const isPasswordVisible = ref(false);
</script>

<template>
  <div v-if="!isAuthenticated" class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="clinic-info-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <template #prepend>
          <!-- You can add your dental clinic logo here -->
          <div class="d-flex-2">
            <!-- Your clinic logo HTML or image tag goes here -->
            <img
              class="transparent-image"
              height="60"
              src="../assets/images/2.png"
              alt="Clinic Logo"
            />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          Swastik Dental Clinic
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 hidden class="text-h5 font-weight-semibold mb-1">
          Welcome to Swastik Dental Clinic! 👋🏻
        </h5>
        <p hidden class="mb-0">Explore our dental services and maintain a healthy smile.</p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField v-model="form.email" label="Email" type="email" />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="
                  isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                "
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox v-model="form.remember" label="Remember me" />

                <a class="ms-2 mb-1" href="javascript:void(0)"> Forgot Password? </a>
              </div>

              <!-- login button -->
              <VBtn block type="submit" @click="login()"> Login </VBtn>
            </VCol>

            <!-- create account -->
            <VCol v-if="loginError" cols="12" class="text-center text-base">
              <span class="text-error"
                >Incorrect username or password. Please try again.</span
              >
            </VCol>

            <VCol cols="12" class="d-flex align-center">
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol cols="12" class="text-center">
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
    />

    <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg class="auth-footer-mask d-none d-md-block" :src="authThemeMask" />
  </div>
 
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

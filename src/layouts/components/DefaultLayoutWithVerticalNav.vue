<script setup>
import { useTheme } from 'vuetify'
import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
 
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    
    <template #navbar="{ toggleVerticalOverlayNavActive }">
     
        <v-app-bar app color="white">
          <v-app-bar-nav-icon @click.stop="toggleVerticalOverlayNavActive(true)">
            <v-icon>mdi-menu</v-icon>
          </v-app-bar-nav-icon>
    
          <v-app-bar-title>
            Swastik Clinic
          </v-app-bar-title>
    
          <!-- Search -->
          <div class="d-flex align-center cursor-pointer">
        
    
         
          </div>
    
          <v-spacer></v-spacer>
    
          <!-- GitHub Link -->
          <!-- <v-btn icon @click="openGitHub">
            <v-icon>mdi-instagram</v-icon>
          </v-btn> -->
    
          <!-- Notification Icon -->
          <v-btn icon>
            <v-icon>mdi-bell-outline</v-icon>
          </v-btn>
    
          <!-- Theme Switcher -->
          <NavbarThemeSwitcher class="me-2" />
    
          <!-- User Profile -->
          <UserProfile />
        </v-app-bar>
  
    </template>
    

    <template #vertical-nav-content>
      <VerticalNavLink
        :item="{
          title: 'Dashboard',
          icon: 'mdi-home-outline',
          to: '/dashboard',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Account Settings',
          icon: 'mdi-account-cog-outline',
          to: '/account-settings',
        }"
      />

      <!-- 👉 Pages -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'Pages',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Error',
          icon: 'mdi-information-outline',
          to: '/no-existence',
        }"
      />

<!-- 👉 User Interface -->
<VerticalNavSectionTitle
  :item="{
    heading: 'Dental Clinic Management',
  }"
/>

<VerticalNavLink
  class="vertical-nav-link"
  :item="{
    title: 'Home',
    icon: 'mdi-home',
    to: '/',
  }"
/>

<VerticalNavLink
  class="vertical-nav-link with-divider"
  :item="{
    title: 'Registration',
    icon: 'mdi-register',
    to: '/patient-registration',
  }"
/>

<VerticalNavLink
  class="vertical-nav-link"
  :item="{
    title: 'Patient Records',
    icon: 'mdi-table',
    to: '/typography', // Updated route
  }"
/>


    </template>

    <template #after-vertical-nav-items>
      <!-- 👉 illustration -->
      <!-- <a
        href="https://themeselection.com/item/materio-vuetify-vuejs-admin-template"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-left: 7px;"
      >
        <img
          :src="upgradeBanner"
          alt="upgrade-banner"
          transition="scale-transition"
          class="upgrade-banner mx-auto"
          style="max-width: 230px;"
        >
      </a> -->
    </template>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>

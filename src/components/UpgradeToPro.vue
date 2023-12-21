<template>
  <div v-if="check" >
    <VBtn
      color="error"
      class="product-upgrade-to-pro"
      href="/patient-registration"
      target="_self"
      rel="noopener noreferrer"
    >
      <i class="fa-regular fa-pen-to-square"></i>

      <VMenu
        open-on-hover
        activator="parent"
        offset="15"
        max-width="400px"
        :close-on-content-click="true"
        transition="slide-y-reverse-transition"
      >
        <VCard>
          <VCardTitle>Dental Clinic Information</VCardTitle>
          <VCardText>
            Welcome to our dental clinic! We are committed to providing top-notch dental services to our patients.
          </VCardText>
          <VCardText>
            Click on the below button to schedule an appointment or learn more about our services.
          </VCardText>
        </VCard>
      </VMenu>
    </VBtn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: this.$store.state.users,
    };
  },
  computed: {
    check() {
      // Check if the current route is not the login page
      return this.$route.path !== '/login';
    },
  },
  mounted() {
    console.log(this.check);
  },
};
</script>

<style lang="scss" scoped>
.product-upgrade-to-pro {
  position: fixed;
  z-index: 999;
  inset-block-end: 5%;
  inset-inline-end: 79px;

  .v-application &.v-btn.v-btn--elevated {
    box-shadow: 0 1px 20px 1px rgb(var(--v-theme-error)) !important;

    &:hover {
      box-shadow: none !important;
    }
  }
}
</style>

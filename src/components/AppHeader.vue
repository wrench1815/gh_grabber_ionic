<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>Gh Grabber</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
  import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
  } from '@ionic/vue'

  export default {
    name: 'AppHeader',

    components: {
      IonHeader,
      IonToolbar,
      IonButtons,
      IonMenuButton,
      IonTitle,
    },
  }
</script>

<style scoped></style>

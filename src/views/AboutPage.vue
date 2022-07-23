<template>
  <ion-page>
    <app-header />
    <ion-content :fullscreen="true">
      <ion-text>
        <div class="ion-margin ion-text-center ion-text-wrap">
          by wrench1815 © {{ fullYear }} built using Ionic and Vue js
        </div>
      </ion-text>

      <br />
      <div class="ion-text-center ion-margin-horizontal">
        <ion-button
          color="dark"
          size="default"
          href="https://github.com/wrench1815/gh_grabber_ionic"
          target="_blank"
          ><ion-img
            src="./assets/github_white.svg"
            style="margin-right: 0.3rem"
          ></ion-img
          >Source Code</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonPage, IonContent, IonText, IonButton, IonImg } from '@ionic/vue'

  import AppHeader from '@/components/AppHeader.vue'

  export default {
    name: 'HomePage',

    components: {
      IonPage,
      IonContent,
      IonText,
      IonButton,
      IonImg,
      // from components
      AppHeader,
    },

    data() {
      return {
        fullYear: new Date().getFullYear(),
      }
    },
  }
</script>

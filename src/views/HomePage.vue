<template>
  <ion-page>
    <app-header />
    <ion-content :fullscreen="true">
      <ion-item class="ion-margin">
        <ion-input
          placeholder="Github Username"
          :clearInput="true"
          minlength="1"
          debounce="1000"
          v-model="ghUsername"
          @ion-change="getGHData"
        ></ion-input>
      </ion-item>

      <h3
        class="ion-margin"
        v-if="!ghUsername && ghProfile.length == 0 && ghRepo"
      >
        Enter the GitHub Username to Search
      </h3>

      <h1 class="ion-margin" v-else-if="ghProfile.message">
        {{ ghProfile.message }}
      </h1>

      <g-h-user-data v-else :ghProfile="ghProfile" :ghRepo="ghRepo" />
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonPage, IonContent, IonInput, IonItem } from '@ionic/vue'

  import AppHeader from '@/components/AppHeader.vue'
  import GHUserData from '@/components/GHUserData.vue'

  export default {
    name: 'HomePage',

    components: {
      IonPage,
      IonContent,
      IonInput,
      IonItem,

      // from components
      AppHeader,
      GHUserData,
    },

    data() {
      return {
        ghUsername: '',
        ghRepo: {},
        ghProfile: [],
      }
    },

    methods: {
      async getGHData() {
        if (this.ghUsername.length == 0) {
          this.ghProfile = []
          this.ghRepo = {}
        } else {
          this.getGHProfile().then(() => {
            this.getGHRepo()
          })
        }
      },

      async getGHProfile() {
        this.ghProfile = await fetch(
          `https://api.github.com/users/${this.ghUsername}`
        )
          .then((res) => res.json())
          .catch((err) => {
            console.log(err)
          })
      },

      async getGHRepo() {
        this.ghRepo = await fetch(
          `https://api.github.com/users/${this.ghUsername}/repos`
        )
          .then((res) => res.json())
          .catch((err) => {
            console.log(err)
          })
      },
    },
  }
</script>

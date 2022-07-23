<template>
  <div class="ion-margin">
    <ion-avatar class="ion-margin-vertical">
      <!-- start:user Image -->
      <img
        :src="
          ghProfile.avatar_url
            ? ghProfile.avatar_url
            : 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
        "
        :alt="ghProfile.login ? ghProfile.login : 'gravatar'"
      />
      <!-- end:user Image -->
    </ion-avatar>
    <!-- start:user Info -->
    <!-- username -->
    <div>
      <span class="h4">Username: </span>
      <span>
        {{ ghProfile.login }}
      </span>
    </div>
    <!-- name -->
    <div>
      <span class="h4">Name: </span>
      <span>
        {{ ghProfile.name }}
      </span>
    </div>
    <!-- GitHub link -->
    <div>
      <span class="h4">GitHub Link: </span>
      <ion-text color="primary">
        <a :href="ghProfile.html_url" target="_blank">
          {{ ghProfile.name }}
        </a>
      </ion-text>
    </div>
    <!-- User Location -->
    <div>
      <span class="h4">Location: </span>
      <span>
        {{ ghProfile.location ? ghProfile.location : '----' }}
      </span>
    </div>
    <!-- User Bio -->
    <div class="ion-text-center ion-text-wrap">
      <h4>Bio</h4>
      <p>
        {{ ghProfile.bio ? ghProfile.bio : '----' }}
      </p>
    </div>
    <!-- User stats -->
    <ion-grid class="ion-text-center">
      <ion-row>
        <ion-col>
          <span class="h4">Repos: </span>
          <span>{{ ghProfile.public_repos }}</span></ion-col
        >
        <ion-col>
          <span class="h4">Gists: </span>
          <span>{{ ghProfile.public_gists }}</span></ion-col
        >
      </ion-row>
      <ion-row>
        <ion-col>
          <span class="h4">Followers: </span>
          <span>{{ ghProfile.followers }}</span></ion-col
        >
        <ion-col>
          <span class="h4">Following: </span>
          <span>{{ ghProfile.following }}</span></ion-col
        >
      </ion-row>
    </ion-grid>
  </div>

  <gh-repo :ghRepo="ghRepo" />

  <!-- end:user Info -->
  <!-- <div>{{ ghProfile }}</div>
  <div>{{ ghRepo }}</div> -->
</template>

<script>
  import { IonAvatar, IonText, IonGrid, IonCol, IonRow } from '@ionic/vue'
  import GhRepo from '@/components/GHRepo.vue'

  export default {
    name: 'GHUserData',

    components: {
      IonAvatar,
      IonText,
      IonGrid,
      IonCol,
      IonRow,

      GhRepo,
    },

    props: {
      ghProfile: {
        type: Object,
      },
      ghRepo: {
        type: Array,
      },
    },
  }
</script>

<style scoped>
  .h1 {
    margin-top: 20px;
    font-size: 26px;
  }

  .h1 {
    margin-top: 20px;
    font-size: 26px;
  }

  .h3 {
    font-size: 22px;
  }

  .h4 {
    font-size: 20px;
  }
  .h5 {
    font-size: 18px;
  }
  .h6 {
    font-size: 16px;
  }
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6 {
    margin-top: 16px;
    margin-bottom: 10px;
    font-weight: 500;
    line-height: 1.2;
  }
</style>

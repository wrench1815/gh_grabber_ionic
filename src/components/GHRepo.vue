<template>
  <div>
    <ion-text color="primary">
      <h2 class="ion-text-center">Repo Cards</h2>
    </ion-text>
    <ion-card class="card" v-for="item in ghRepo" :key="item.id">
      <ion-card-header>
        <ion-card-title>{{ item.full_name }}</ion-card-title>
        <ion-card-subtitle>{{ item.description }}</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        <ion-text class="m" color="primary">
          <div class="img-container">
            <ion-img class="img" src="./assets/fork.svg"></ion-img>
            <span>
              {{ item.forks }}
            </span>
          </div>
        </ion-text>

        <ion-text class="m" color="secondary">
          <div class="img-container">
            <ion-img class="img" src="./assets/star.svg"></ion-img>
            <span>
              {{ item.stargazers_count }}
            </span>
          </div>
        </ion-text>
        <ion-text class="m" color="tertiary">
          <div class="img-container">
            <ion-img class="img" src="./assets/watch.svg"></ion-img>
            <span>
              {{ item.watchers_count }}
            </span>
          </div>
        </ion-text>
        <ion-text class="m" color="dark">
          <div class="img-container">
            <ion-img class="img" src="./assets/code.svg"></ion-img>
            <span>
              {{ item.language }}
            </span>
          </div>
        </ion-text>

        <br />

        <ion-button
          :href="item.html_url"
          class="ion-margin-top"
          target="_blank"
          size="default"
          >go to repo</ion-button
        >
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
  import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonText,
    IonImg,
    IonButton,
  } from '@ionic/vue'

  export default {
    name: 'GHRepo',

    components: {
      IonCard,
      IonCardContent,
      IonCardHeader,
      IonCardSubtitle,
      IonCardTitle,
      IonText,
      IonImg,
      IonButton,
    },

    props: {
      ghRepo: {
        type: Array,
      },
    },

    data() {
      return {
        publicPath: process.env.BASE_URL,
      }
    },
  }
</script>

<style scoped>
  .m {
    margin-right: 1rem;
  }
  .img {
    height: 1rem;
    width: auto;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
  }
  .card-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .img-container {
    display: inline-flex;
    /* justify-content: center; */
  }

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

<template>
  <ion-app>
    <ion-split-pane content-id="main-content" class="split-pane">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="main-manu">
            <ion-list-header>Menu</ion-list-header>

            <ion-menu-toggle
              auto-hide="false"
              v-for="(p, i) in appPages"
              :key="i"
            >
              <ion-item
                @click="selectedIndex = i"
                router-direction="root"
                :router-link="p.url"
                lines="none"
                detail="false"
                class="hydrated"
                :class="{ selected: selectedIndex === i }"
              >
                <ion-icon slot="start" :md="p.mdIcon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
        </ion-content>
      </ion-menu>

      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script>
  import {
    IonApp,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonSplitPane,
  } from '@ionic/vue'

  import { useRoute } from 'vue-router'
  import { homeOutline, helpCircleOutline } from 'ionicons/icons'

  import { ref } from 'vue'

  export default {
    name: 'App',
    components: {
      IonApp,
      IonContent,
      IonIcon,
      IonItem,
      IonLabel,
      IonList,
      IonListHeader,
      IonMenu,
      IonMenuToggle,
      IonRouterOutlet,
      IonSplitPane,
    },

    setup() {
      const selectedIndex = ref(0)
      const appPages = [
        {
          title: 'Home',
          url: '/home',
          mdIcon: homeOutline,
        },
        {
          title: 'About',
          url: '/about',
          mdIcon: helpCircleOutline,
        },
      ]

      const path = window.location.pathname.split('folder/')[1]
      if (path !== undefined) {
        selectedIndex.value = appPages.findIndex(
          (page) => page.title.toLowerCase() === path.toLowerCase()
        )
      }

      const route = useRoute()

      return {
        selectedIndex,
        appPages,

        // icons
        homeOutline,
        helpCircleOutline,

        isSelected: (url) => (url === route.path ? 'selected' : ''),
      }
    },
  }
</script>

<style scoped>
  .split-pane {
    --side-width: 100px;
  }

  ion-menu ion-content {
    --background: var(--ion-item-background, var(--ion-background-color, #fff));
  }

  ion-menu.md ion-content {
    --padding-start: 8px;
    --padding-end: 8px;
    --padding-top: 20px;
    --padding-bottom: 20px;
  }

  ion-menu.md ion-list {
    padding: 20px 0;
  }

  ion-menu.md ion-note {
    margin-bottom: 30px;
  }

  ion-menu.md ion-list-header,
  ion-menu.md ion-note {
    padding-left: 10px;
  }

  ion-menu.md ion-list#inbox-list {
    border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
  }

  ion-menu.md ion-list#inbox-list ion-list-header {
    font-size: 22px;
    font-weight: 600;

    min-height: 20px;
  }

  ion-menu.md ion-item {
    --padding-start: 10px;
    --padding-end: 10px;
    border-radius: 4px;
  }

  ion-menu.md ion-item.selected {
    --background: rgba(var(--ion-color-primary-rgb), 0.14);
  }

  ion-menu.md ion-item.selected ion-icon {
    color: var(--ion-color-primary);
  }

  ion-menu.md ion-item ion-icon {
    color: #616e7e;
  }

  ion-menu.md ion-item ion-label {
    font-weight: 500;
  }

  ion-item.selected {
    --color: var(--ion-color-primary);
  }
</style>

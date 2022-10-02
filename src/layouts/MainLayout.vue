<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold"> 
          <span class="gt-sm">{{ $route.name }}</span>
          <!-- Navbar icon -->
          <q-icon 
            class="q-pa-sm lt-md header-icon"
            name="ion-planet" 
            size="lg"
            color="primary"
          />

        </q-toolbar-title>

        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :width="390" bordered>
      <div>
        <!-- class="absolute-top-right q-mr-xl q-pr-xl" -->
      <q-icon 
        class="q-pa-sm"
        name="ion-planet" 
        size="lg"
        color="primary"
      />
      <q-list>

        <!-- List -->
        <q-item to="/" 
          clickable 
          v-ripple 
          exact
        >
          <q-item-section avatar>
            <q-icon name="ion-home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6">Home</q-item-section>
        </q-item>

        <q-item to="/about" 
          clickable 
          v-ripple 
          exact
        >
          <q-item-section avatar>
            <q-icon name="ion-information-circle-outline" size="md" />
          </q-item-section>

          <q-item-section class="text-h6">About</q-item-section>
        </q-item>
      </q-list>

    </div>

    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- search model -->
      <q-input 
        class="q-ma-md"
        placeholder="Search Nebula"
        outlined
        rounded
        dense
      >
        <template v-slot:prepend>
          <q-icon name="ion-search" />
        </template>
      </q-input>
      <!-- Faux News Feed -->
      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline>News</q-item-label>
            <q-item-label>Gripping Chess Drama!</q-item-label>
            <q-item-label caption>Hans Moke Niemann was found with an engine in his bum. This scandal is rocking the world by storm!</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline></q-item-label>
            <q-item-label>UMD Adds Construction Fees</q-item-label>
            <q-item-label caption>Tuition is now secondary to a mandatory construction fee for all students, with a cost up to $69,000 per semester</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline>Education</q-item-label>
            <q-item-label>Gripping Chess Drama!</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="sass">
.header-icon 
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
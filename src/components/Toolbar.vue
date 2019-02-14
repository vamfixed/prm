<template>
  <div>
    <v-toolbar dark app color="blue">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = true"></v-toolbar-side-icon>
      <v-toolbar-title>PRM</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">
          <v-icon left>person</v-icon>
          DASHBOARD
        </v-btn>
        <v-btn flat to="/purchase">
          <v-icon left>person</v-icon>
          PURCHASE
        </v-btn>
        <v-btn flat to="/sales">
          <v-icon left>person</v-icon>
          SALES
        </v-btn>
        <v-btn flat to="/sorted">
          <v-icon left>person</v-icon>
          SORTED
        </v-btn>
        <v-btn flat to="/items">
          <v-icon left>person</v-icon>
          ITEMS
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer app temporary v-model="drawer">
      <v-img :aspect-ratio="16/9" lazy-src="" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout column align-center class="white--text">

          <v-avatar class="ma-3 elevation-2" size="100" color="red">
            <img src="https://picsum.photos/200/200/?random=4" lazy-src="">
          </v-avatar>

          <h3 class="mb-1">zamcelco@gmail.com</h3>
          <p class="caption">Nikko Bryan Delos Reyes</p>

        </v-layout>
      </v-img>
      <v-divider></v-divider>
      <v-list three-line class="py-0">
        <template v-for="(item, index) in items">
          <v-list-tile avatar :key="item.title" :to="item.link">
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        drawer: false,
        fav: true,
        menu: false,
        message: false,
        hints: true,
        items: [{
            title: 'Dashboard',
            subtitle: 'Dashboard',
            avatar: 'https://picsum.photos/200/200/?random=1',
            link: '/'
          },
          {
            title: 'Purchase',
            subtitle: 'Purchase',
            avatar: 'https://picsum.photos/200/200/?random=2',
            link: '/purchase'
          },
          {
            title: 'Sales',
            subtitle: 'Sales',
            avatar: 'https://picsum.photos/200/200/?random=3',
            link: '/sales'
          },
          {
            title: 'Sorted',
            subtitle: 'Sorted',
            avatar: 'https://picsum.photos/200/200/?random=4',
            link: '/sorted'
          },
          {
            title: 'Items',
            subtitle: 'Items',
            avatar: 'https://picsum.photos/200/200/?random=5',
            link: '/items'
          }
        ]
      }
    }
  }

</script>

<template>
  <div id="app">
    <loading v-if="bLoading"></loading>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppFooter from "./common/AppFooter";

import {mapGetters} from 'vuex';
import * as types from './store/types.js'

export default {
  components: { AppFooter},
  computed:mapGetters([
    'bFoot','bLoading'
  ]),
};
</script>

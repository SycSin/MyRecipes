<template>
  <v-app v-cloak>
    <v-app-bar app></v-app-bar>
    <ds-calendar-app ref="app"
                     :calendar="calendar"
                     :read-only="readOnly"
                     @change="saveState">

      <template v-slot:title>
        Settings
      </template>

      <template slot="eventPopover" slot-scope="slotData">
        <ds-calendar-event-popover
            v-bind="slotData"
            :read-only="readOnly"
            @finish="saveState"
        ></ds-calendar-event-popover>
      </template>

      <template slot="eventCreatePopover" slot-scope="{placeholder, calendar, close}">
        <ds-calendar-event-create-popover
            :calendar-event="placeholder"
            :calendar="calendar"
            :close="$refs.app.$refs.calendar.clearPlaceholder"
            @create-edit="$refs.app.editPlaceholder"
            @create-popover-closed="saveState"
        ></ds-calendar-event-create-popover>
      </template>

      <template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">
        <div>
          <v-icon class="ds-ev-icon"
                  v-if="details.icon"
                  size="14"
                  :style="{color: details.forecolor}">
            {{ details.icon }}
          </v-icon>
          <strong class="ds-ev-title">{{ details.title }}</strong>
        </div>
        <div class="ds-ev-description">{{ getCalendarTime( calendarEvent ) }}</div>
      </template>

      <template slot="drawerBottom">
        <v-container fluid>
          <v-layout wrap align-center>
            <v-flex xs12>
              <v-checkbox box
                          label="Lesemodus"
                          v-model="readOnly"
              ></v-checkbox>
            </v-flex>
            <v-flex xs12>
              <v-select
                  label="Sprache"
                  :items="locales"
                  v-model="currentLocale"
                  @input="setLocale"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-container>
      </template>
    </ds-calendar-app>
  </v-app>
</template>

<script>
import { dsMerge } from './functions'
import { Calendar } from 'dayspan'
import * as moment from 'moment'
import axios from "axios";

export default {

  name: 'dayspan',
  data: vm => ({
    storeKey: 'dayspanState',
    calendar: Calendar.months(),
    readOnly: false,
    currentLocale: vm.$dayspan.currentLocale,
    locales: [
      {value: 'en', text: 'English'},
      {value: 'fr', text: 'French'},
      {value: 'de', text: 'Deutsch'},
      {value: 'nl', text: 'Dutch'},
      {value: 'ca', text: 'Catalan'}
    ],
    events: [],
  }),

  mounted () {
    window.app = this.$refs.app

    this.loadState()
  },

  created(){
    this.fetchData();
  },
  methods:
      {
        //TODO: Load events from database and use them in Planner
        async fetchData() {
          try {
            const eventResponse = await axios.get(`http://myrecipes-backend:3000/events`);
            this.events = eventResponse.data;
          } catch (error) {
            console.log(error);
          }
        },
        getCalendarTime (calendarEvent) {
          let sa = calendarEvent.start.format('a')
          let ea = calendarEvent.end.format('a')
          let sh = calendarEvent.start.format('h')
          let eh = calendarEvent.end.format('h')

          if (calendarEvent.start.minute !== 0) {
            sh += calendarEvent.start.format(':mm')
          }

          if (calendarEvent.end.minute !== 0) {
            eh += calendarEvent.end.format(':mm')
          }

          return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea)
        },

        setLocale (code) {
          moment.locale(code)

          this.$dayspan.setLocale(code)
          this.$dayspan.refreshTimes()

          this.$refs.app.$forceUpdate()
        },

        saveState () {
          let state = this.calendar.toInput(true)
          let json = JSON.stringify(state)

          localStorage.setItem(this.storeKey, json)
        },

        loadState () {
          let state = {}

          try {
            let savedState = JSON.parse(localStorage.getItem(this.storeKey))

            if (savedState) {
              state = savedState
              state.preferToday = true
            }
          } catch (e) {
            console.log(e)
          }

          if (!state.events || !state.events.length) {
            state.events = this.events
          }

          let defaults = this.$dayspan.getDefaultEventDetails()

          state.events.forEach(ev => {
            ev.data = dsMerge(ev.data, defaults)
          })

          this.$refs.app.setState(state)
        }
      }
}

</script>

<style>
body, html {
  width: 100%;
  height: 100%;
}
.ds-day .ds-week-date{
  font-size:10px;
}
.ds-ev-title {
  font-size: 15px;
}
</style>
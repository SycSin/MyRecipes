<template>

    <v-card class="ds-calendar-event-popover-card"
            :class="classes">

        <v-toolbar extended flat
                   :style="styleHeader">

            <v-toolbar-title slot="extension">
                <a :href="'recipes/'+getRecipeIdByTitle(details.title)" style="font-size: 25px; font-weight: bold; color: white;">{{ details.title }}</a>
                <v-icon v-if="details.icon"
                        :style="styleButton">
                    {{ details.icon }}
                </v-icon>
            </v-toolbar-title>

            <v-btn
                    v-if="allowEdit"
                    color="white"
                    absolute fab icon
                    @click="edit">
                <v-icon>edit</v-icon>
            </v-btn>

            <slot name="eventPopoverToolbarLeft" v-bind="slotData"></slot>

            <v-spacer></v-spacer>

            <slot name="eventPopoverToolbarRight" v-bind="slotData"></slot>

            <slot name="eventPopoverToolbarActions" v-bind="slotData">

                <v-tooltip bottom v-if="!isReadOnly">
                    <template v-slot:activator="{ on }">
                        <ds-schedule-actions
                                v-on="on"
                                v-bind="{$scopedSlots}"
                                :schedule="calendarEvent.schedule"
                                :calendar-event="calendarEvent"
                                :calendar="calendar"
                                >

                            <v-btn icon :style="styleButton" style="background-color: transparent!important;" @click="remove" :calendar-event="calendarEvent">
                              <v-icon>delete</v-icon>
                            </v-btn>

                        </ds-schedule-actions>
                    </template>

                </v-tooltip>

            </slot>

            <slot name="eventPopoverToolbarClose" v-bind="slotData">

                <v-btn icon @click="close" :style="styleButton" style="background-color: transparent!important;">
                    <v-icon>close</v-icon>
                </v-btn>

            </slot>

        </v-toolbar>
        <v-card-text>

            <slot name="eventPopoverBodyTop" v-bind="slotData"></slot>

            <v-list dense>

                <v-list-item v-if="details.description">
                    <v-list-item-avatar>
                        <v-icon>subject</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <slot name="eventPopoverDescription" v-bind="slotData">
                            <v-list-item-title>
                                <span v-html="details.description"></span>
                            </v-list-item-title>
                        </slot>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <slot name="eventPopoverBodyBottom" v-bind="slotData"></slot>

        </v-card-text>

        <slot name="eventPopoverActions" v-bind="slotData"></slot>

    </v-card>

</template>

<script>
import {Calendar, CalendarEvent, Day, Functions as fn, Time} from 'dayspan'

import axios from "axios";

export default {

  name: 'dsCalendarEventPopover',

  props:
      {
        calendarEvent:
            {
              required: true,
              type: CalendarEvent
            },

        calendar:
            {
              required: true,
              type: Calendar
            },

        readOnly:
            {
              type: Boolean,
              default: false
            },

        edit:
            {
              type: Function
            },

        allowEditOnReadOnly:
            {
              type: Boolean,
              default() {
                return this.$dsDefaults().allowEditOnReadOnly
              }
            },

        close:
            {
              type: Function
            },

        formats:
            {
              validate(x) {
                return this.$dsValidate(x, 'formats')
              },
              default() {
                return this.$dsDefaults().formats
              }
            },

        labels:
            {
              validate(x) {
                return this.$dsValidate(x, 'labels')
              },
              default() {
                return this.$dsDefaults().labels
              }
            }
      },

  computed:
      {
        slotData() {
          return {
            calendarEvent: this.calendarEvent,
            calendar: this.calendar,
            edit: this.edit,
            close: this.close,
            details: this.details,
            readOnly: this.readOnly
          }
        },

        classes() {
          return {
            'ds-event-cancelled': this.calendarEvent.cancelled
          }
        },

        styleHeader() {
          return {
            backgroundColor: this.details.color,
            color: this.details.forecolor
          }
        },

        styleButton() {
          return {
            color: this.details.forecolor
          }
        },

        startDate() {
          return this.calendarEvent.start.format(this.formats.start)
        },

        occurs() {
          return this.$dayspan.getEventOccurrence(
              this.calendarEvent.schedule,
              this.calendarEvent.start,
              this.labels,
              this.formats
          )
        },

        details() {
          return this.calendarEvent.event.data
        },

        allowEdit() {
          return this.allowEditOnReadOnly || !this.isReadOnly
        },

        isReadOnly() {
          return this.readOnly || this.$dayspan.readOnly || this.details.readonly
        }
      },

  data() {
    return {
      recipes: [],
    }
  },
  created(){
    this.fetchData();
  },
  methods:
      {
        async fetchData() {
          try {
            const recipeResponse = await axios.get(`myrecipes-backend.myrecipes.svc.cluster.local:3000/recipes`);
            this.recipes = recipeResponse.data;
          } catch (error) {
            console.log(error);
          }
        },
        getRecipeIdByTitle(title){
          let recipe = this.recipes.filter(element => element.title === title)
          console.log(recipe)
          return recipe[0].recipes_UID;
        },
        remove () {
          this.$dayspan.getPermission('actionRemove', () => {
            var ev = this.getEvent('remove')

            this.$emit('remove', ev)

            if (!ev.handled && ev.calendar) {
              ev.calendar.removeEvent(ev.event)
              ev.handled = true
            }

            this.$emit('finish', ev)

            this.$emit('event-remove', ev.event)
          })
        },
        getEvent (type, extra = {}) {
          return fn.extend({

            type: type,
            schedule: this.schedule,
            calendar: this.calendar,
            calendarEvent: this.calendarEvent,
            event: this.event,
            handled: false,
            refresh: true,
            $vm: this,
            $element: this.$el

          }, extra)
        }
      }
}
</script>

<style scoped lang="scss">

.ds-calendar-event-popover-card {

  .v-btn--floating.v-btn--left {
    margin-left: 0px !important;

    .v-icon {
      height: auto;
    }
  }

  .v-card__text {
    padding: 16px 0;

    .v-list {

      .v-list__tile {
        padding: 0px !important;
        height: auto;

        .v-list__tile__sub-title {

        }
      }
    }
  }

  .v-toolbar__extension {
    padding: 0 16px !important;

    .v-toolbar__title {
      margin-left: 56px;
    }
  }
}

</style>

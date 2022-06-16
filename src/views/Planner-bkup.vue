<template>
  <div id="planner">
    <div class="my-2">
      <h2 class="text-h4 font-weight-bold">Food Planner</h2>
    </div>
    <calendar-view
        :show-date="showDate"
        :startingDayOfWeek="1"
        class="theme-default holiday-us-traditional holiday-us-official"
        :events="events"
        @click-date="onClickDate"
    >
      <calendar-view-header
          slot="header"
          slot-scope="t"
          :header-props="t.headerProps"
          @input="setShowDate"/>
    </calendar-view>
    <div>
      Test
    </div>
  </div>
</template>
<script>
import {CalendarView, CalendarViewHeader} from "vue-simple-calendar";
// The next two lines are processed by webpack. If you're using the component without webpack compilation,
// you should just create <link> elements for these. Both are optional, you can create your own theme if you prefer.
// require("vue-simple-calendar/static/css/default.css");
// require("vue-simple-calendar/static/css/holidays-us.css");

export default {
  name: 'planner',
  data: function () {
    return {
      showDate: new Date(),
      events: [
        {
          id: 1,
          startDate: "2022-06-06",
          endDate: "2022-06-06",
          title: "Wiener Kaiserschmarrn",
          url: 'http://127.0.0.1/recipe'
        },
        {
          id: 2,
          startDate: "2022-06-14",
          endDate: "2022-06-14",
          title: "Spaghetti ala Napoli",
        }
      ]
    }
  },
  components: {
    CalendarView,
    CalendarViewHeader,
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
    onClickDate(...params) {
      alert(params);
    }
  }
}
</script>
<style>
#planner {
  font-family: "Roboto", sans-serif;
  height: 67vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

</style>
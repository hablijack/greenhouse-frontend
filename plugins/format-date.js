import Vue from "vue";

Vue.filter("formatDateTime", (dateStr) =>
  Intl.DateTimeFormat("de-DE", { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date(dateStr))
);
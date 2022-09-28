import Vue from "vue";

Vue.filter("formatDateTime", (dateStr) => {
  try {
    return Intl.DateTimeFormat("de-DE", { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date(dateStr))
  } catch (e) {
    return e.message;
  }
});
<template>
  <div class="card o-card">
    <div class="card-header o-card-header">
      Filter by
    </div>
    <div class="card-body o-card-body">
      <div class="input-group mb-3">
        <input type="date"
               v-model="fromDate"
               class="form-control"
               placeholder="Username"
               aria-label="Username"
               aria-describedby="date-from"
        >
      </div>
      <div class="input-group mb-3">
        <input type="date"
               v-model="toDate"
               class="form-control"
               placeholder="Username"
               aria-label="Username"
               aria-describedby="date-to"
        >
      </div>
      <button @click="getFilterData" class="btn btn-primary w-100">Apply filters</button>
      <button @click="clearFilters" class="btn btn-secondary text-white mt-3 w-100">Clear filters</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromDate: new Date(),
      toDate: new Date()
    }
  },
  methods: {
    getFilterData() {
      this.$emit('gettingData', this.$data)
    },
    clearFilters() {
      this.fromDate = new Date();
      this.toDate = new Date()
    }
  }
}
</script>

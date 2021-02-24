<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="a-title">Documents</h3>
        </div>
      </div>
      <div class="row">
        <button class="btn btn-sm a-btn-filter d-lg-none" @click="showFilter">Filter by</button>
        <div class="col-lg-3 t-filter-mobile" :class="{ jsShowFilter: filterActive}">
          <Filter @gettingData="gettingData"/>
        </div>
        <div class="col-lg-9">
          <List :items="filteredDocuments"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex'
import Filter from "@/components/Filter";
import List from "@/components/List";
import {filterByDates} from "@/helpers/DocumentsHelper";

export default {
  data() {
    return {
      filterActive: false,
    }
  },
  components: {List, Filter},
  methods: {
    ...mapActions({
      getDocuments: 'documents/getDocuments'
    }),
    ...mapMutations({
      setDocuments: 'documents/SET_DOCUMENTS',
      setFilteredDocuments: 'documents/SET_FILTERED_DOCUMENTS'
    }),
    gettingData(data) {
      this.setFilteredDocuments(filterByDates(this.documents, data.fromDate, data.toDate))
    },
    showFilter() {
      this.filterActive = !this.filterActive
    }
  },
  computed: {
    ...mapGetters({
      documents: 'documents/documents',
      filteredDocuments: 'documents/filteredDocuments'
    })
  },
  mounted() {
    this.getDocuments()
  }
}
</script>

<template>
  <div class="card mb-3 o-card">
    <div class="card-body o-card-body table-responsive">
      <table class="table table-striped o-table">
        <thead>
        <tr>
          <th scope="col" class="border-0">
            <button class="btn btn-sm a-btn-sorter dropdown-toggle ps-0" @click="sortDocumentByName">Document name
            </button>
          </th>
          <th scope="col" class="border-0">
            <button class="btn btn-sm a-btn-sorter dropdown-toggle pe-0" @click="sortDocument">Date</button>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(doc, index) in items" :key="index">
          <td class="border-0">{{ doc.name }}</td>
          <td class="border-0">{{ dateFormat(doc.date) }}</td>
        </tr>
        </tbody>
      </table>
      <p v-if="items.length === 0">There is no results for this filter.</p>
      <div class="w-100 d-flex">
        <Pagination class="ms-auto"/>
      </div>
    </div>
  </div>

</template>

<script>
import {sortByDate, sortByName} from '../helpers/DocumentsHelper'
import {mapMutations} from "vuex";
import Pagination from "@/components/Pagination";

export default {
  components: {Pagination},
  props: ['items'],
  data() {
    return {
      sorted: true,
      sortedName: true
    }
  },
  methods: {
    ...mapMutations({
      setFilteredDocuments: 'documents/SET_FILTERED_DOCUMENTS'
    }),
    dateFormat(date) {
      const passDate = new Date(date);

      return passDate.toLocaleDateString('en-GB', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      }).replace(/ /g, '-');
    },
    sortDocument() {
      this.setFilteredDocuments(sortByDate(this.items, this.sorted = !this.sorted))
    },
    sortDocumentByName() {
      this.setFilteredDocuments(sortByName(this.items, this.sortedName = !this.sortedName))
    }
  }
}
</script>

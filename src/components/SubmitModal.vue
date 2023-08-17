<!--Show entered form values in a modal-->
<template>
  <div class="submissionModal">
    <h2>Submission Results</h2>
    <!--Show all field input values except checked boxes-->
    <div v-for="(value, fieldName) in fieldValues" :key="fieldName">
      <span v-if="fieldName !== 'Reference'"> {{ fieldName }}: {{ value }} </span>
    </div>
    <!--Show all checked boxes for Reference Field-->
    <div>
      Reference:
      <span v-for="(checked, index) in getCheckedBoxes" :key="index">{{ checked }}{{ ' ' }}</span>
    </div>
    <button @click="handleCloseClick">Close</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapMutations(['toggleModal']),
    ...mapState(['fieldValues'], ['formFields']),
    ...mapGetters(['getFieldValue', 'getCheckedBoxes'])
  },
  methods: {
    handleCloseClick() {
      this.toggleModal()
    }
  }
}
</script>

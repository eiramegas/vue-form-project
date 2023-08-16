<!--Render Form Fields-->
<template>
  <div>
    <div v-for="(input, index) in getFormFields" :key="index">
      <!--Input-->
      <label v-if="input.type !== 'radio'" :for="input.name">{{ input.label }}<span class="required">*</span></label>
      <input
        v-if="input.field === 'input'"
        :name="input.name"
        :value="fieldValues[input.name]"
        @input="setFieldValue({ name: input.name, value: $event.target.value })"
        :type="input.type"
      />
      <!--textarea input-->
      <textarea
        v-if="input.field === 'textarea'"
        :name="input.name"
        :value="fieldValues[input.name]"
        @input="setFieldValue({ name: input.name, value: $event.target.value })"
        :type="input.type"
      ></textarea>
      <p v-if="input.field === 'textarea'">{{ input.char }} Characters Remaining</p>
      <!--Radio input-->
      <input
        v-if="input.field === 'radio'"
        :name="input.name"
        :value="fieldValues[input.name]"
        @input="setFieldValue({ name: input.name, value: $event.target.checked })"
        :type="input.type"
      />
      <!--Radio Lable-->
      <label v-if="input.type === 'radio'" :for="input.name">{{ input.label }}</label>
      <!--Select-->
      <select
        v-if="input.field === 'select'"
        :value="fieldValues[input.name]"
        @input="setFieldValue({ name: input.name, value: $event.target.value })"
      >
        <option value="" disabled>Select</option>
        <option v-for="(option, index) in input.options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },
  //handle field values in state
  computed: {
    ...mapState(['fieldValues']),
    ...mapGetters(['getFormFields'])
  },
  methods: {
    ...mapMutations(['setFieldValue'])
  }
}
</script>

<!--Render Form Fields-->
<template>
  <div>
    <div v-for="(input, index) in inputFields" :key="index">
      <!--Input-->
      <label v-if="input.type !== 'radio'" :for="input.name">{{ input.label }}</label>
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
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      //array to render components
      inputFields: [
        { label: 'Full Name', name: 'FullName', field: 'input', type: 'text' },
        { label: 'Telephone Number', name: 'TelNumber', field: 'input', type: 'tel' },
        {
          label: 'Interest',
          name: 'Interest',
          field: 'select',
          type: 'email',
          options: ['Online Ad', 'Recommendation', 'Referral', 'Other']
        },
        { label: 'Description', name: 'Description', field: 'textarea', type: 'text' },
        { label: 'Online Ad', name: 'checkGroup', field: 'radio', type: 'radio' },
        { label: 'Recommmendation', name: 'checkGroup', field: 'radio', type: 'radio' },
        { label: 'Referral', name: 'checkGroup', field: 'radio', type: 'radio' },
        { label: 'Other', name: 'checkGroup', field: 'radio', type: 'radio' }
      ]
    }
  },
  //handle field values in state
  computed: {
    ...mapState(['fieldValues'])
  },
  methods: {
    ...mapMutations(['setFieldValue'])
  }
}
</script>

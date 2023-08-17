<!--Render Form Fields-->
<template>
  <div class="formGroup">
    <div v-for="(input, index) in getFormFields" :key="index">
      <!--Input-->
      <label v-if="input.type !== 'checkbox'" :for="input.name"
        >{{ input.label }}<span class="required">*</span></label
      >
      <input
        v-if="input.field === 'input'"
        @input="setFieldValue({ name: input.name, value: $event.target.value })"
        :name="input.name"
        :value="fieldValues[input.name]"
        :type="input.type"
        :class="input.class"
      />
      <!--textarea input-->
      <textarea
        v-if="input.field === 'textarea'"
        maxlength="500"
        @input="setFieldValue({ name: input.name, value: $event.target.value })"
        :name="input.name"
        :value="fieldValues[input.name]"
        :type="input.type"
        :class="input.class"
      ></textarea>
      <p v-if="input.field === 'textarea'">{{ input.char }} Characters Remaining</p>
      <!--checkbox input and label-->
      <label v-if="index == 4" :for="input.name" :class="input.class+' checkBoxTopLabel'"
        >{{ input.name }}<span class="required">*</span></label
      >
      <input
        v-if="input.field === 'checkbox'"
        @input="setFieldValue({ name: input.name, value: $event.target.checked })"
        :name="input.name"
        :value="fieldValues[input.name]"
        :type="input.type"
      />
      <!--checkbox Lable-->
      <label v-if="input.type === 'checkbox'" :for="input.name">{{ input.label }}</label>
      <!--Select-->
      <select
        v-if="input.field === 'select'"
        @input="setFieldValue({ name: input.name, value: $event.target.value })"
        :value="fieldValues[input.name]"
        :class="input.class"
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
    return {}
  },
  //handle field values in state
  computed: {
    ...mapState(['fieldValues']),
    ...mapGetters(['getFormFields'])
  },
  methods: {
    ...mapMutations(['setFieldValue', 'setFormFieldProperty']),
  }
}
</script>
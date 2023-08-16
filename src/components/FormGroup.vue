<template>
    <div>
      <div v-for="(input, index) in inputFields" :key="index">
        <label v-if="input.type !== 'radio'" :for="input.for" :id="input.for">{{ input.label }}</label>
        <input v-if="input.field == 'input' || input.field == 'radio'" :name="input.name" v-model="input.value" :type="input.type"/>
        <label v-if="input.type== 'radio'" :for="input.for" :id="input.for" :value="input.label">{{ input.label }}</label>
        <select v-if="input.field == 'select'" v-model="input.value" :type="input.type" >
          <option placeholder="select" v-for="(option, index) in input.options" :key="index" :value="option">
              {{ option }}
          </option>
        </select>
      </div>
      <button v-if="allFieldsValid" @click="submitForm">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputFields: [
          { label: 'Full Name', name:'FullName', for:'FullName', field: 'input', type: 'text', value: '', validation: '^.{3,}$'  },
          { label: 'Telephone Number', name:'Number' , for:'Number', field: 'input', type: 'number', value: '', validation: '^.{3,}$' },
          { label: 'Interest', name:'Interest', for:'Interest', field: 'select', type: 'email', value: '', validation: '^.{3,}$',
              options:  ['Online Ad', 'Recommendation', 'Referral', 'Other']
          },
          { label: 'Description', name:'Description', for:'Description', field: 'radio', type: 'email', value: '', validation: '^.{3,}$' },
          { label: 'Online Ad', name:'checkGroup' , for:'OnlineAd', field: 'radio', type: 'radio', value: '', validation: '^.{3,}$'},
          { label: 'Recommmendation', name:'checkGroup' , for:'Recommmendation', field: 'input', type: 'radio', value: '', validation: '^.{3,}$'},
          { label: 'Referral', name:'checkGroup' , for:'Referral', field: 'radio', type: 'radio', value: '', validation: '^.{3,}$'},
          { label: 'Other', name:'checkGroup' , for:'Other', field: 'radio', type: 'radio', value: '', validation: '^.{3,}$'}
        ]
      };
    },
    computed: {
      allFieldsValid() {
        for (const input of this.inputFields) {
        let check = new RegExp(input.validation);
          if (input.type == 'input' || input.type == 'select'){
            if (!check.test(input.value)) {
              return false;
            }
          } else if (input.type == 'radio'){
              if (check.test(input.value)) {
                return false;
              }
            }
        }
      return true;
      }
    },
    methods: {
        submitForm() {
        console.log('Form submitted!');
      }
    }
  };
  </script>
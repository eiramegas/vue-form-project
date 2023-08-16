<!--Render Submit Button and Validate Field values-->
<template>
    <div>
        <button v-if="isValid" @click="handleClick"><slot></slot></button>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    data() {
      return {
      }
    },
    computed: {
        ...mapState(['fieldValues']),
        ...mapGetters(['getFieldValue']),
        isValid() {
            for (const fieldName in this.fieldValues) {
                const fieldValue = this.getFieldValue(fieldName);
                if (!this.validateField(fieldName, fieldValue)) {
                    return false; // Return false if one field is Invalid
                }
            }
        return true; // All fields are valid
        }
    },
    methods: {
    handleClick() {
      // Your button click logic here
    },
    validateField(fieldName, fieldValue){
        console.log("validation of "+fieldName);
        if(fieldName == 'FullName' && fieldValue.length >= 3) {
            console.log("full Name Passed");
            return true;
        }
        return false;
    }
  },
  }
  </script>
  
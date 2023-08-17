<!--Render Submit Button and Validate Field values-->
<template>
    <div class="buttonSpace">
        <button v-if="isValid" @click="handleClick"><slot></slot></button>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapMutations } from 'vuex';

  export default {
    data() {
      return {
      }
    },
    computed: {
        ...mapState(['fieldValues'], ['formFields']),
        ...mapGetters(['getFieldValue', 'isAnyCheckboxChecked']),
        isValid() {
            let validCount = 0;
            for (const fieldName in this.fieldValues) {
                const fieldValue = this.getFieldValue(fieldName);
                if (this.validateField(fieldName, fieldValue)) {
                 validCount++;
                }
            } 
            if (validCount >= 5){
                return true;// All fields are valid
            }
        return false; 
        }
    },
    methods: {
    ...mapMutations(['setFieldValue', 'setFormFieldProperty']),
    //handle submit click
    handleClick() {
      // Your button click logic here
    },
    //field validation
    validateField(fieldName, fieldValue){
        if(fieldName == 'FullName' && fieldValue.length >= 3) {
           this.setFormFieldProperty({index: 0, propName: 'class', propVal: ' valid' });
            return true;
        }
        else if(fieldName == 'TelNumber' && RegExp('^[0-9]+$').test(fieldValue)) {
            console.log("Passed");
            this.setFormFieldProperty({index: 1, propName: 'class', propVal: ' valid' });
            return true;
        }
        else if(fieldName == 'Interest' && fieldValue.length >= 3) {
            this.setFormFieldProperty({index: 2, propName: 'class', propVal: ' valid' });
            console.log("Passed");
            return true;
        }
        else if(fieldName == 'Description' && fieldValue.length > 1 ) {
            this.setFormFieldProperty({index: 3, propName: 'char', propVal: (500 - fieldValue.length) });
            this.setFormFieldProperty({index: 3, propName: 'class', propVal: ' valid' });
            return true;
        }else if(fieldName == 'Reference' && this.isAnyCheckboxChecked ) {
            this.setFormFieldProperty({index: 4, propName: 'class', propVal: ' valid' });
            return true;
        } else {
            return false;
        }
    }
  }
  }
  </script>
  
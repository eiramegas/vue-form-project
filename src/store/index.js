import { createStore } from 'vuex'

export default createStore({
    state: {
        //array to render fields
        formFields: [
            { label: 'Full Name', name: 'FullName', field: 'input', type: 'text' },
            { label: 'Telephone Number', name: 'TelNumber', field: 'input', type: 'tel' },
            {
                label: 'Interest',
                name: 'Interest',
                field: 'select',
                type: 'email',
                options: ['Online Ad', 'Recommendation', 'Referral', 'Other']
            },
            { label: 'Description', name: 'Description', field: 'textarea', type: 'text', char: 500 },
            { label: 'Online Ad', name: 'checkGroup', field: 'radio', type: 'radio' },
            { label: 'Recommendation', name: 'checkGroup', field: 'radio', type: 'radio' },
            { label: 'Referral', name: 'checkGroup', field: 'radio', type: 'radio' },
            { label: 'Other', name: 'checkGroup', field: 'radio', type: 'radio' }
        ],
        //array to store field values
        fieldValues: { FullName: '', TelNumber: '', Interest: '', Description: '', checkGroup: '' }
    },
    mutations: {
        setFieldValue(state, field) {
            state.fieldValues[field.name] = field.value;
        }
    },
    getters: {
        getFieldValue: (state) => (fieldName) => {
            return state.fieldValues[fieldName];
        },
        getFormFields: state => state.formFields
    },
    actions: {},
    modules: {}
})
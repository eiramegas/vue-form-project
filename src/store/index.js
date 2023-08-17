import { createStore } from 'vuex'

export default createStore({
    state: {
        //array to render fields
        formFields: [
            { label: 'Full Name', name: 'FullName', field: 'input', type: 'text', class: '' },
            { label: 'Telephone Number', name: 'TelNumber', field: 'input', type: 'tel', class: '' },
            {
                label: 'Interest',
                name: 'Interest',
                field: 'select',
                type: 'email',
                class: '',
                options: ['Online Ad', 'Recommendation', 'Referral', 'Other']
            },
            {
                label: 'Description',
                name: 'Description',
                field: 'textarea',
                type: 'text',
                char: 500,
                class: ''
            },
            { label: 'Online Ad', name: 'Reference', field: 'checkbox', type: 'checkbox', class: '' },
            {
                label: 'Recommendation',
                name: 'Reference',
                field: 'checkbox',
                type: 'checkbox',
                class: ''
            },
            { label: 'Referral', name: 'Reference', field: 'checkbox', type: 'checkbox', class: '' },
            { label: 'Other', name: 'Reference', field: 'checkbox', type: 'checkbox', class: '' }
        ],
        //array to store field values
        fieldValues: { FullName: '', TelNumber: '', Interest: '', Description: '', Reference: '' }
    },
    mutations: {
        setFieldValue(state, field) {
            state.fieldValues[field.name] = field.value
        },
        setFormFieldProperty(state, change) {
            const { index, propName, propVal } = change
            if (state.formFields[index]) {
                state.formFields[index][propName] = propVal
            }
        }
    },
    getters: {
        getFieldValue: (state) => (fieldName) => {
            return state.fieldValues[fieldName]
        },
        getFormFields: (state) => state.formFields,
        isAnyCheckboxChecked: (state) => {
            const checkboxFields = state.formFields.filter((field) => field.field === 'checkbox')
            return checkboxFields.some((field) => state.fieldValues[field.name])
        }
    },
    actions: {},
    modules: {}
})
import { createStore } from 'vuex'

export default createStore({
    state: {
        //array to render fields and hold properties related to inputs and labels
        formFields: [
            { label: 'Full Name', name: 'Name', field: 'input', type: 'text', class: '' },
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
            { label: 'Online Ad', name: 'Reference', field: 'checkbox', type: 'checkbox', class: '', checked: false },
            {
                label: 'Recommendation',
                name: 'Reference',
                field: 'checkbox',
                type: 'checkbox',
                class: '',
                checked: false
            },
            { label: 'Referral', name: 'Reference', field: 'checkbox', type: 'checkbox', class: '', checked: false },
            { label: 'Other', name: 'Reference', field: 'checkbox', type: 'checkbox', class: '', checked: false }
        ],
        //array to store field values, used for validation
        fieldValues: { Name: '', TelNumber: '', Interest: '', Description: '', Reference: '' },
        showHideModal: false
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
        },
        //set formFields checked prop to true or false based on checkBox
        setCheckboxChecked(state, { label, checked }) {
            const checkboxField = state.formFields.find(field => field.label === label && field.field === 'checkbox');
            if (checkboxField) {
                checkboxField.checked = checked;
            }
        },
        toggleModal(state) {
            state.showHideModal = !state.showHideModal;
        }
    },
    getters: {
        getFieldValue: (state) => (fieldName) => {
            return state.fieldValues[fieldName]
        },
        getFormFields: (state) => state.formFields,
        //returns an array of checked checkboxes
        getCheckedBoxes: (state) => {
            console.log(state.formFields
                .filter(field => field.field === 'checkbox' && field.checked)
                .map(field => field.label));
            return state.formFields
                .filter(field => field.field === 'checkbox' && field.checked)
                .map(field => field.label);
        },
        isModalVisible(state) {
            return state.showHideModal;
        }
    },
    actions: {},
    modules: {}
})
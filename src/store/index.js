import { createStore } from 'vuex'

export default createStore({
    state: {
        fieldValues: { FullName: '', TelNumber: '', Interest: '', Recommendation: '', Description: '', checkGroup: '' }
    },
    mutations: {
        setFieldValue(state, field) {
            state.fieldValues[field.name] = field.value;
            console.log(field.value)
        }
    },
    actions: {},
    modules: {}
})
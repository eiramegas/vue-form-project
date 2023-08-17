<template>
  <div id="application">
  <header>
    <h1>Welcome to the Form</h1>
  </header>
    <main>
      <FormGroup />
      <ValidationButton>Submit!</ValidationButton>
    </main>
  </div>
</template>

<script setup>
import FormGroup from './components/FormGroup.vue'
import ValidationButton from './components/ValidationButton.vue'
</script>

<template>
  <form>
    <fieldset>
      <div>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname">
      </div>
      <div>
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname">
      </div>
    </fieldset>
    <fieldset>
      <div>
        <label for="telephone">Telephone</label>
        <input type="text" id="telephone">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email">
      </div>
    </fieldset>
  </form>
</template>

<script>
  export default {
    name: 'Profile',
  };
</script>


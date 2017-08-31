<template>
  <form>
    <h5>Change your current password</h5>
    <fieldset>
      <div>
        <label for="current">Current</label>
        <input type="password" id="current">
      </div>
      <div>
        <label for="new">New Password</label>
        <input type="password" id="new">
      </div>
    </fieldset>
  </form>
</template>

<script>
  export default {
    name: 'Password',
  };
</script>
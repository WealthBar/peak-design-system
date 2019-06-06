<template>
  <article class="container-small">
    <h1>Inputs</h1>
    <section>
      <label for="search">Search</label>
      <input id="search" type="search" name="search">
    </section>
    <section>
      <label for="firstname">First name</label>
      <input id="firstname" type="text" name="firstname" placeholder="First" required>

      <label for="lastname">Last name</label>
      <input id="lastname" type="text" name="lastname" placeholder="Last" disabled>
    </section>

    <section>
      <label for="text">Password Input</label>
      <input type="password" id="text" name="text" placeholder="password">
    </section>

    <section class="half-width">


      <label for="companywebsite">Company website</label>
      <input id="companywebsite" v-model="companyWebsite" type="text" name="companywebsite" class="error">


      <label for="companyphone">Company phone</label>
      <input id="companyphone" v-model="companyPhone" type="text" name="companyphone">

    </section>
    <section class="half-width">

        <label for="streetaddress">Street address</label>
        <input id="streetaddress" v-model="streetAddress" type="text" name="streetaddress">

    </section>
    <section>

      <label for="city">City</label>
      <input id="city" v-model="city" type="text" name="city">

      <div id="province-postal" class="profile-info-field">
        <label for="province">Province</label>
        <div class="select-container">
          <select id="province" name="province" class="select-menu">
            <option value="" />
            <option value="AB">Alberta</option>
            <option value="BC">British Columbia</option>
            <option value="MB">Manitoba</option>
            <option value="NB">New Brunswick</option>
            <option value="NL">Newfoundland and Labrador</option>
            <option value="NS">Nova Scotia</option>
            <option value="ON">Ontario</option>
            <option value="PE">Prince Edward Island</option>
            <option value="QC">Quebec</option>
            <option value="SK">Saskatchewan</option>
            <option value="NT">Northwest Territories</option>
            <option value="NU">Nunavut</option>
            <option value="YT">Yukon</option>
          </select>
        </div>

        <label for="postalcode">Postal code</label>
        <input id="postalcode" v-model="postalCode" type="text" name="postalcode" maxlength="7">
      </div>
    </section>
    <hr>
    <section>
      <textarea></textarea>
    </section>
    <section>
      <input id="check" name="checked" type="checkbox" checked>
      <label for="check">Checkbox</label>

    <div>
      <input id="uncheck" name="unchecked" type="checkbox">
      <label for="uncheck">UnCheckbox</label>
    </div>
    </section>

  </article>
</template>
<script>
  export default { };
</script>
<style lang="scss" scoped>

</style>

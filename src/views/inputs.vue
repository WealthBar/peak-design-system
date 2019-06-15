<template>
  <article class="container-small">
    <h1>Inputs</h1>
    <section>
      <label for="search-input">Search</label>
      <input id="search-input" type="search" placeholder="search" name="search">
    </section>
    <section>
      <label for="text-input">Text Input</label>
      <input id="text-input" type="text" name="text-input" placeholder="placeholder" required>
      <p class="input-text">This is help text</p>

      <label for="disabled-input">Disabled Input</label>
      <input id="disabled-input" type="text" name="disabled-input" placeholder="placeholder" disabled>

      <label for="error-input">Error Input</label>
      <input id="error-input" type="text" name="error-input" placeholder="placeholder" class="error">
      <p class="input-text error">This is error text</p>
    </section>

    <section>
      <label for="text">Password Input</label>
      <input type="password" id="text" name="text" placeholder="password">
    </section>


    <section class="half-width">
      <div>
        <label for="companyphone">Company phone</label>
        <input id="companyphone" v-model="companyPhone" type="text" name="companyphone">
      </div>
      <div>
        <label for="streetaddress">Street address</label>
        <input id="streetaddress" v-model="streetAddress" type="text" name="streetaddress">
      </div>
      <div>
        <label for="streetaddress">Street address</label>
        <input id="streetaddress" v-model="streetAddress" type="text" name="streetaddress">
      </div>
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
      <label for="textarea">Textarea</label>
      <textarea id="textarea"></textarea>
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
.half-width {
  display: flex;
  > * {
    margin-right: 0.75rem;
    &:last-child { margin-right: 0; }
  }
  @supports(display: grid){
    display: grid;
    // grid-auto-columns: 1fr;
    grid-template-columns: repeat(auto-fit, 80rem);
    grid-template-rows: auto;
    grid-column-gap: 0.75rem;
    > * { margin: 0; }
  }
}

.input-text {
  font-size: 0.875rem;
  margin: 0;
  &.error { color: $neg-500; }
}
</style>

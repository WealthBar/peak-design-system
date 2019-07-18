<template>
  <article class="container">
    <h1>Inputs</h1>
    <section>
      <label for="search-input">Search</label>
      <input id="search-input" type="search" placeholder="search" name="search">

      <label for="search-disabled-input">Search Disabled</label>
      <input id="search-disabled-input" type="search" placeholder="search" name="search" disabled>

      <label for="text-input">Text Input<span>Optional</span></label>
      <input id="text-input" type="text" name="text-input" placeholder="placeholder" required>
      <p class="input-text">This is help text</p>

      <label for="disabled-input">Disabled Input</label>
      <input id="disabled-input" type="text" name="disabled-input" placeholder="placeholder" disabled>

      <label for="error-input">Error Input</label>
      <input id="error-input" type="text" name="error-input" placeholder="placeholder" class="error">
      <p class="input-text error">I am Error.</p>

      <label for="text">Password Input</label>
      <input type="password" id="text" name="text">
    </section>

    <label for="Birthday">Inline Input</label>
    <div class="inline-input">
      <input id="b-day" v-model="day" type="text" name="birthday" maxlength="2">
      <input id="b-month" v-model="month" type="text" name="birthday-month" maxlength="2">
      <input id="b-year" v-model="year" type="text" name="birthday-year" maxlength="4">
    </div>

    <section class="inline-input full">
      <div class="one">
        <label for="companyphone">Inline Input Full</label>
        <input id="companyphone" v-model="companyPhone" type="text" name="companyphone">
      </div>
      <div class="two">
        <label for="streetaddress">Label Two</label>
        <input id="streetaddress" v-model="streetAddress" type="text" name="streetaddress">
        <p class="input-text">This is help text</p>
      </div>
      <div class="three">
        <label for="streetaddress">Third Label</label>
        <input id="streetaddress" v-model="streetAddress" type="text" name="streetaddress">
      </div>
    </section>

    <label for="inline-button">Inline Button</label>
    <div class="inline-button">
      <input id="inline-button" v-model="inlineButton" type="text" name="inline-button">
      <button type="button">Submit</button>
    </div>
    <p class="input-text">This is help text</p>

    <label for="province">Select</label>
    <select id="province" name="province">
      <option value="BC">British Columbia</option>
      <option value="AB">Alberta</option>
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

    <label for="select-disabled">Disabled Select</label>
    <select id="select-disabled" name="select-disabled" disabled>
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

    <fieldset class="inline-input full">
      <div>
        <label for="postalcode">Postal code</label>
        <input id="postalcode" v-model="postalCode" type="text" name="postalcode" maxlength="7">
      </div>
      <div>
        <label for="country">Country</label>
        <input id="country" v-model="country" type="text" name="country">
      </div>

    </fieldset>

    <section>
      <label for="textarea">Textarea</label>
      <textarea id="textarea"></textarea>

      <input id="check" name="checked" type="checkbox" checked>
      <label for="check">Checkbox</label>

      <input id="uncheck" name="unchecked" type="checkbox">
      <label for="uncheck">UnCheckbox</label>

      <input id="semi-fancy-check" class="semi-fancy" name="semi-fancy-check" type="checkbox">
      <label for="semi-fancy-check">Semi Fancy Checkbox
        <span>With more info to describe the option.</span>
      </label>
    </section>

    <fieldset name="contact">
    <legend>Preferred method of contact</legend>
      <input type="radio" id="email-radio" name="contact" value="email">
      <label for="email-radio">Email</label>
      <input type="radio" id="phone-radio" name="contact" value="phone">
      <label for="phone-radio">Phone</label>
      <input type="radio" id="mail-radio" name="contact" value="mail">
      <label for="mail-radio">Mail</label>
    </fieldset>

    <!-- <div class="fancy-radio-button"> -->
        <input type="radio" id="other-countries-yes" class="fancy" @click="radioYes()" name="other-countries" />
        <label for="other-countries-yes">Yes</label>
      <!-- </div> -->

    <!-- <div class="fancy-radio-button"> -->
      <input type="radio" id="other-countries-no" class="fancy" @click="radioNo()" name="other-countries" />
      <label for="other-countries-no">No</label>

      <input type="radio" id="other-countries-other" class="semi-fancy" @click="radioNo()" name="other-countries" />
      <label for="other-countries-other">Semi Fancy
        <span>With more info to describe the option.</span>
      </label>

    <!-- </div> -->

    <input type="radio" id="other-countries-maybe" class="fancy" @click="radioNo()" name="other-countries" />
    <label for="other-countries-maybe">Fancy
      <span>With more info to describe the option.</span>
    </label>

    <label for="range">Range slider</label>
    <input id="range" type="range" min="0" max="100" value="25">

  </article>
</template>
<script>
  export default { };
</script>
<style lang="scss" scoped>
#b-day { max-width: 8rem; }
#b-month { max-width: 16rem; }
#b-year { max-width: 4rem; }
</style>

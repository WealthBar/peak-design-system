<template>
  <article class="container">
    <h1>Inputs</h1>
    <p>Inputs in Peak have been designed to require as minimal amount developer editing as possible. Several different input types have been defined in Peak to accomodate diferent functionality, as such all <code>&lt;input&gt;</code> elements require a defined <code>type</code> attribute. the listing of input type styles can be found below aling with code examples.</p>
    <p>Additional attributes are optional and may vary depending on individual use. For accessability a <code>&lt;label&gt;</code> with a <code>for</code> attribute that matches <code>id</code> and <code>name</code> is highly recommened. Other attributes such as <code>placeholder</code>, <code>required</code>, and <code>disabled</code> will all effect the behaviour and look of the input.</p>

    <section>
      <h3>Text Inputs</h3>
      <label for="text-input">type="text"</label>
      <input type="text" id="text-input" name="text-input">
      <label for="search-input">type="search"</label>
      <input type="search" id="search-input" name="search-input" placeholder="search" >
      <label for="password-input">type="password"</label>
      <input type="password" id="password-input" name="password-input" required>

      <strong>Markup</strong>
      <pre><code class="language-html">&lt;label for="text-input"&gt;Text Input&lt;/label&gt;
&lt;input id="text-input" type="text" name="text-input"&gt;

&lt;label for="search-input"&gt;Search Input&lt;/label&gt;
&lt;input type="search" id="search-input" name="search-input" placeholder="search"&gt;

&lt;label for="password-input"&gt;Password Input&lt;/label&gt;
&lt;input type="password" id="password-input" name="password-input" required&gt;

&lt;label for="textarea"&gt;Textarea&lt;/label&gt;
&lt;textarea id="textarea" name=textarea&gt;&lt;/textarea&gt;</code></pre>
    </section>
    <section>
      <h3>Text Input Patterns</h3>
      <label for="optional-input">Input<span>optional span</span></label>
      <input type="text" id="optional-input" name="optional-input">
      <label for="disabled-input">Disabled</label>
      <input type="text" id="disabled-input" name="disabled-input" disabled>
      <label for="help-input">Help Messaging</label>
      <input type="text" id="help-input" name="help-input">
      <p class="input-text">Additional input help messaging</p>
      <label for="error-input">Error States</label>
      <input type="text" id="error-input" name="error-input" class="error">
      <p class="error-text error">Optional error messaging</p>
      <strong>Markup</strong>
      <pre><code class="language-html">&lt;label for="optional-input"&gt;Input&lt;span&gt;optional&lt;/span&gt;&lt;/label&gt;
&lt;input type="text" id="optional-input" name="optional-input"&gt;

&lt;label for="disabled-input"&gt;Input Disabled&lt;/label&gt;
&lt;input type="text" id="disabled-input" name="disabled-input" disabled&gt;

&lt;label for="help-input"&gt;Input Help&lt;/label&gt;
&lt;input type="text" id="help-input" name="help-input"&gt;
&lt;p class="input-text"&gt;Additional input messaging&lt;/p&gt;

&lt;label for="error-input"&gt;Input Error&lt;/label&gt;
&lt;input type="text" id="error-input" name="error-input" class="error"&gt;
&lt;p class="error-text error"&gt;Error messaging&lt;/p&gt;</code></pre>
      <hr>
    </section>
      <label for="textarea">Textarea</label>
      <textarea id="textarea" name=textarea></textarea>
    <section>
      <h3>Non-Text Inputs</h3>
      <label for="select">Select Input</label>
      <select id="select" name="select">
        <option value="one">Option 1</option>
        <option value="two">Option 2</option>
        <option value="three">Option 3</option>
      </select>
      <fieldset>
        <legend for="checkbox">Checkbox Input</legend>
        <input type="checkbox" id="checkbox" name="checkbox">
        <label for="checkbox">Default Checkbox Label</label>
      </fieldset>

      <legend>Radio Input</legend>
        <input type="radio" id="radio-yes" name="radio-input"/>
        <label for="radio-yes">Yes</label>

        <input type="radio" id="radio-no" name="radio-input"/>
        <label for="radio-no">No</label>

        <input type="radio" id="radio-maybe" name="radio-input"/>
        <label for="radio-maybe">Maybe</label>
      </fieldset>

      <strong>Markup</strong>
      <pre><code class="html">&lt;label for="select"&gt;Select&lt;/label&gt;
      &lt;select id="select" name="select"&gt;
        &lt;option value="one"&gt;Option 1&lt;/option&gt;
        &lt;option value="two"&gt;Option 2&lt;/option&gt;
        &lt;option value="three"&gt;Option 3&lt;/option&gt;
      &lt;/select&gt;

      &lt;input type="checkbox" id="checkbox" name="checkbox"&gt;
      &lt;label for="checkbox"&gt;Checkbox Input&lt;/label&gt;

      &lt;legend&gt;Radio Input&lt;/legend&gt;
      &lt;input type="radio" id="radio-yes" name="radio-input"/&gt;
      &lt;label for="radio-yes"&gt;Yes&lt;/label&gt;

      &lt;input type="radio" id="radio-no" name="radio-input"/&gt;
      &lt;label for="radio-no"&gt;No&lt;/label&gt;

      &lt;input type="radio" id="radio-maybe" name="radio-input"/&gt;
      &lt;label for="radio-maybe"&gt;Maybe&lt;/label&gt;
      </code></pre>
      <hr>
    </section>
    <label for="Birthday">Inline Input (fieldset)</label>
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
        <p class="input-text">Help text for second input</p>
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
    <p class="input-text">Help/Error text can be here too</p>



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

    <div class="inline-input full">
      <div>
        <label for="postalcode">Postal code</label>
        <input id="postalcode" v-model="postalCode" type="text" name="postalcode" maxlength="7">
      </div>
      <div>
        <label for="country">Country</label>
        <input id="country" v-model="country" type="text" name="country">
      </div>
    </div>

    <section>




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

    <input type="radio" id="other-countries-yes" class="fancy" @click="radioYes()" name="other-countries" />
    <label for="other-countries-yes">Yes</label>

    <input type="radio" id="other-countries-no" class="fancy" @click="radioNo()" name="other-countries" />
    <label for="other-countries-no">No</label>

    <input type="radio" id="other-countries-other" class="semi-fancy" @click="radioNo()" name="other-countries" />
    <label for="other-countries-other">Semi Fancy
      <span>With more info to describe the option.</span>
    </label>

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
  section { margin-bottom: 1rem; }
// #b-day { max-width: 8rem; }
// #b-month { max-width: 16rem; }
// #b-year { max-width: 4rem; }
</style>

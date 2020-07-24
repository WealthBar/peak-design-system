<template>
  <article class="container">
    <header>
      <h1>Typography — Header Text</h1>
      <div class="page-actions">
        <div>
          <label for="margin-toggle">Show Margins</label>
          <button id="margin-toggle" class="toggle" @click="showMargin = !showMargin">
            <span :data-active="showMargin">on</span>
            <span :data-active="!showMargin">off</span>
          </button>
        </div>
        <div>
          <label for="screen-toggle">Screen Variant</label>
          <button id="screen-toggle" class="toggle" @click="toggleScreen">
            <span
              v-for="screen in getScreens"
              :key="screen"
              :data-active="getSelectedScreen === screen"
            >{{ screen }}</span>
          </button>
        </div>
      </div>
    </header>
    <section>
      <p>Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have <strong>mobile</strong> and <strong>desktop</strong> header styles controlled by media queries based on browser's screen size. This ensures that our header typography is responsive to screen real estate. All header elements have a bottom margin of <code>1rem</code> and maintains standard browser <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">margin collapse principles</a>.</p>
    </section>

    <section>
      <div :class="showMargin ? 'example' : ''">
        <h1 :class="getSelectedScreen">This is a super large H1 header.</h1>
        <h2 :class="getSelectedScreen">This is a huge H2 header.</h2>
        <h3 :class="getSelectedScreen">This is a big H3 header.</h3>
        <h4 :class="getSelectedScreen">This is a medium H4 header.</h4>
        <h5 :class="getSelectedScreen">This is a small H5 header.</h5>
        <h6 :class="getSelectedScreen">This is a very small H6 header.</h6>
      </div>
      <strong>Markup</strong>
      <pre>
        <code class="language-markup">&lt;h1&gt;This is a super large H1 header.&lt;/h1&gt;
&lt;h2&gt;This is a huge H2 header.&lt;/h2&gt;
&lt;h3&gt;This is a big H3 header.&lt;/h3&gt;
&lt;h4&gt;This is a medium H4 header.&lt;/h4&gt;
&lt;h5&gt;This is a small H5 header.&lt;/h5&gt;
&lt;h6&gt;This is a very small H6 header.&lt;/h6&gt;</code>
        </pre>
    </section>

    <section>
      <div :class="showMargin ? 'example' : ''">
        <h2 :class="getSelectedScreen">Header Spacing Example</h2>
        <p>This is my paragraph of text. this is standard text and is being used to illustrate how margins work with realtion to headers and other elements</p>
        <h5 :class="getSelectedScreen">A Smaller Sub-head</h5>
        <p>This is my paragraph of text. this is standard text and is being used to illustrate how margins work with realtion to headers and other elements</p>
      </div>

      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;h2&gt;Huge Header Spacing Example&lt;/h2&gt;
&lt;p&gt;This is my paragraph of text. … &lt;/p&gt;
&lt;h3&gt;Smaller Sub-head Example&lt;/h3&gt;
&lt;p&gt;This is my paragraph of text. … &lt;/p&gt;</code></pre>
    </section>

    <section>
      <h3>Remove Margins</h3>
      <p>
        <strong>Use only as required by design.</strong> Default margins on any header or block element (eg: <code>h2</code> or <code>p</code>) can be removed by adding a class of <code>no-margin</code> to it.
      </p>
      <div :class="showMargin ? 'example' : ''">
        <h3 class="no-margin">This is H3 element has no margin.</h3>
      </div>
      <strong>Markup</strong>
      <pre><code class="language-markup">&lt;h3 class="no-margin"&gt;This is H3 element has no margin.&lt;/h3&gt;</code></pre>
    </section>
  </article>
</template>

<script>
import { mapGetters, mapActions } from '@/lib/vue';
import typography from './typography.data';

export default {
  data() {
    return {
      name: 'typography',
      title: 'Typography',
      showMargin: true,
      typography,
    };
  },
  computed: {
    ...mapGetters([
      'getSelectedUnit',
      'getUnits',
      'getSelectedScreen',
      'getScreens',
    ]),
  },
  methods: {
    ...mapActions(['setScreen', 'setUnit']),
    toggleScreen() {
      this.setScreen(
        this.getSelectedScreen === 'desktop' ? 'mobile' : 'desktop',
      );
    },
    unitValue(value, ratio = 16) {
      if (this.getSelectedUnit === 'rem') {
        return `${value / ratio}${this.getSelectedUnit}`;
      }
      return `${value}${this.getSelectedUnit}`;
    },
    propScreenValue(tag, prop) {
      return this.unitValue(typography[tag][this.getSelectedScreen][prop]);
    },
    propValue(tag, prop) {
      return this.unitValue(typography[tag][prop]);
    },
    headerStyle(tag) {
      return `font-size: ${this.propScreenValue(tag, 'fontSize')}
line-height: ${this.propScreenValue(tag, 'lineHeight')}
font-weight: bold;
margin: ${this.propScreenValue(tag, 'marginTop')} 0 ${this.propScreenValue(
  tag,
  'marginBottom',
)};`;
    },
    typeStyle(tag) {
      return `font-size: ${this.propValue(tag, 'fontSize')}
line-height: ${this.propValue(tag, 'lineHeight')}
font-weight: normal;
margin: 0 0 ${this.propValue(tag, 'marginBottom')};`;
    },
  },
};
</script>

<style lang="scss" scoped>
h1,
.h1 {
  font-weight: bold;
  font-size: 1.625rem;
  line-height: 2rem;
  padding: 0;
  margin: 2rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 2.25rem;
    line-height: 3rem;
    margin: 3rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

h2,
.h2 {
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.875rem;
  padding: 0;
  margin: 1.875rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin: 2.25rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

h3,
.h3 {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0;
  margin: 1.75rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin: 1.875rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

h4,
.h4 {
  font-weight: bold;
  font-size: 1.125rem;
  line-height: 1.5rem;
  padding: 0;
  margin: 1.5rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 1.25rem;
    line-height: 1.625rem;
    margin: 1.625rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

h5,
.h5 {
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.25rem;
  padding: 0;
  margin: 1.25rem 0 1rem;

  // Desktop sizing done as SCSS mixin to allow for toggled sizing on any screen
  // if using in apps use as @media #{$screen-width-medium} { … }
  @mixin desktop {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin: 1.5rem 0 1rem;
  }

  &:not(.mobile) {
    @media #{$screen-width-medium} {
      @include desktop;
    }
  }

  &.desktop {
    @include desktop;
  }
}

header {
  @media #{$screen-width-large} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.page-actions{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media #{$screen-width-large} {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 1rem;
    @media #{$screen-width-large} {
      margin: 0 0 0 1rem;
      align-items: center;
      justify-content: center;
    }
  }
}

section {
  border-bottom: 1px solid $neutral-100;
}

.example {
  background: $tertiary-50;
  display: inline-block;
  width: 100%;
  box-shadow: inset 0 1px 0 0 $tertiary-100, inset 0 -1px 0 0 $tertiary-100;
  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6,
  > p,
  > strong,
  > small,
  > .small,
  > .subtle {
    background: $white;
    box-shadow: 0 1px 0 0 $tertiary-100, 0 -1px 0 0 $tertiary-100;
    // border-top: 1px solid $tertiary-100;
    // border-bottom: 1px solid $tertiary-100;
  }
  ul,
  ol {
    background: $tertiary-50;
    border-top: none;
    // border-bottom: 1px solid $tertiary-100;
    li {
      background: $white;
      ul,
      ol {
        // border-top: 1px solid $tertiary-100;
        border-bottom: none;
      }
    }
  }
  .no-margin {
    margin: 0 !important;
    border: none;
  }
}
</style>

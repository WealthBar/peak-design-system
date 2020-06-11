<template>
  <article class="container">
    <h1>Header Type</h1>

    <div class="toggles">
      <label for="screen-toggle">Type size</label>
      <button id="screen-toggle" class="toggle" @click="toggleScreen">
        <span
          v-for="screen in getScreens"
          :key="screen"
          :data-active="getSelectedScreen === screen"
        >{{ screen }}</span>
      </button>
    </div>
    <section>
      <h2 id="headers"></h2>
      <p>Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have <strong>mobile</strong> and <strong>desktop</strong> header styles controlled by media queries based on browser's screen size. This ensures that our header typography is responsive to screen real estate.</p>

      <!-- <h3>H1 header</h3> -->
      <div class="example">
        <h1 :class="getSelectedScreen">This is a super large H1 header.</h1>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;h1&gt;This is a super large H1 header.&lt;/h1&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre class="language-css" :class="getSelectedUnit"><code>{{ headerStyle('h1') }}</code></pre>
        </div>
      </div>

      <!-- <h3>H2 header</h3> -->
      <div class="example">
        <h2 :class="getSelectedScreen">This is a huge H2 header.</h2>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;h2&gt;This is a huge H2 header.&lt;/h2&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre class="language-css" :class="getSelectedUnit"><code>{{ headerStyle('h2') }}</code></pre>
        </div>
      </div>

      <!-- <h3>H3 header</h3> -->
      <div class="example">
        <h3 :class="getSelectedScreen">This is a big H3 header.</h3>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;h3&gt;This is a big H3 header.&lt;/h3&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre class="language-css" :class="getSelectedUnit"><code>{{ headerStyle('h3') }}</code></pre>
        </div>
      </div>

      <!-- <h3>H4 header</h3> -->
      <div class="example">
        <h4 :class="getSelectedScreen">This is a medium H4 header.</h4>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;h4&gt;This is a medium H4 header.&lt;/h4&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre class="language-css" :class="getSelectedUnit"><code>{{ headerStyle('h4') }}</code></pre>
        </div>
      </div>

      <!-- <h3>H5 header</h3> -->
      <div class="example">
        <h5 :class="getSelectedScreen">This is a small H5 header.</h5>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;h5&gt;This is a small H5 header.&lt;/h5&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre class="language-css" :class="getSelectedUnit"><code>{{ headerStyle('h5') }}</code></pre>
        </div>
      </div>

      <!-- <h3>H6 header</h3> -->
      <div class="example">
        <h6 :class="getSelectedScreen">This is a very small H6 header.</h6>
      </div>
      <div class="attributes">
        <div class="code-sample">
          <strong>Markup</strong>
          <pre><code class="language-markup">&lt;h6&gt;This is a very small H6 header.&lt;/h6&gt;</code></pre>
        </div>
        <div class="code-sample">
          <strong>Style</strong>
          <pre class="language-css" :class="getSelectedUnit"><code>{{ headerStyle('h6') }}</code></pre>
        </div>
      </div>

      <hr />

      <h3>Remove Margins</h3>
      <p>
        <strong>Use only as required by design.</strong> Default margins on any header or block element (eg: <code>h2</code> or <code>p</code>) can be removed by adding a class of <code>no-margin</code> to it.
      </p>
      <div class="example">
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
      isMobile: false,
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

section {
  padding-bottom: 2rem;
  border-bottom: 1px solid $neutral-100;
}

.attributes {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media #{$screen-width-large} {
    flex-direction: row;
  }
}

.code-sample {
  display: flex;
  flex-direction: column;
  @media #{$screen-width-large} {
    flex: 1 1 50%;
    &:last-child {
      padding-left: 1rem;
    }
    pre {
      flex: 1 1 50%;
      display: flex;
    }
  }
}

.example {
  background: $tertiary-50;
  border-top: 1px solid $tertiary-100;
  border-bottom: 1px solid $tertiary-100;
  margin-bottom: 1rem;
  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    background: $white;
    border-top: 1px solid $tertiary-100;
    border-bottom: 1px solid $tertiary-100;
  }
  > p,
  > strong,
  > small,
  > .small,
  > .subtle {
    background: $white;
    border-top: 1px solid $tertiary-100;
    border-bottom: 1px solid $tertiary-100;
    &:first-child {
      border-top: none;
    }
  }
  ul,
  ol {
    background: $tertiary-50;
    border-top: none;
    border-bottom: 1px solid $tertiary-100;
    li {
      background: $white;
      ul,
      ol {
        border-top: 1px solid $tertiary-100;
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

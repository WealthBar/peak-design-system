<template>
  <article class="container">
    <h1>Typography</h1>

    <div class="typography-intro">
      <p>
        WealthBar’s typography is a balance between readability and personality. Using our set of defined typography styles ensures consistent quality and a clear hierarchy.
      </p>
    </div>
    <hr />
    <section>
      <h2 id="headers">Header Elements</h2>
      <p>
        Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have mobile and desktop header styles so that our typography is responsive to screen real estate.
      </p>


      <h2 id="body">Body Text &amp; Patterns</h2>
      <p>
        Body text is optimized for web readability. For additional emphasis or de-emphasis, we have 4 style patterns that can be applied as needed to our base paragraph style.
      </p>

      <h2 id="lists">Lists</h2>
      <p>
        Lists inherit the paragraph’s style and use the paragraph’s spacing between list items to improve readability. List items are indented by {{ unitValue(8) }}.
      </p>
    </section>
  </article>
</template>

<script>
import { mapGetters, mapActions } from '@/lib/vue';
import typography from './typography.data';

export default {
  async beforeRouteEnter(to, from, next) {
    next('/typography/font-stack');
  },

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
    toggleUnit() {
      this.setUnit(this.getSelectedUnit === 'px' ? 'rem' : 'px');
    },
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
  // margin-bottom: 3rem;
  border-bottom: 1px solid $neutral-100;
}

.convert {
  width: 100%;
  margin: 0 0 1rem;
  @media #{$screen-width-medium} {
    table-layout: fixed;
  }
  h4 {
    text-align: left;
  }
  td {
    text-align: center;
    padding: 0.125rem;
  }
  code {
    display: block;
    padding: 0.125rem;
  }
}

.typography-page {
  margin: 2rem 4rem;
}

.typography-intro {
  @media #{$screen-width-medium} {
    display: flex;
  }
  > p {
    flex: 1 1 100%;
  }
}

.intro-copy {
  width: 35rem;
}

.download-typography {
  border: 1px solid $pearl-100;
  margin: 0 2rem;
  padding: 0.5rem;
  border-radius: 2px;
  background-color: $white;
  z-index: 2;

  p {
    font-weight: bold;
  }
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
    //   // code {
    //   //   flex: 1 1 100%;
    //   // }
    // }
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

.line-length-container {
  padding-bottom: 1rem;

  .line-length-content {
    .line-length-50 {
      max-width: 22rem;
    }

    .line-length-60 {
      max-width: 28rem;
    }

    .line-length-80 {
      max-width: 38rem;
    }

    .line-length-104 {
      max-width: 52rem;
    }

    .line-length-labels {
      .char-50,
      .char-60,
      .char-80,
      .char-104,
      .ideal {
        position: absolute;
        top: 0;
      }

      .char-50 {
        left: 22rem;
      }
      .char-60 {
        left: 28rem;
      }
      .ideal {
        left: 31rem;
      }
      .char-80 {
        left: 38rem;
      }
      .char-104 {
        left: 52rem;
      }
    }

    .line-0,
    .line-50,
    .line-60,
    .line-80,
    .line-104 {
      height: 90%;
      position: absolute;
      border-left: 1px solid $pearl-500;
      opacity: 0.5;
    }

    .line-50 {
      border-color: #e96654;
      left: 22rem;
    }

    .line-60 {
      border-color: $primary-300;
      left: 28rem;
    }

    .line-80 {
      border-color: $primary-300;
      left: 38rem;
    }

    .line-104 {
      border-color: #e96654;
      left: 52rem;
    }

    @media #{$screen-max-small} {
      .line-length-104,
      .line-104,
      .char-104 {
        display: none;
      }
    }
  }
}

.alternative-glyphs-container {
  display: flex;
  flex-direction: column;
  @media #{$screen-width-large} {
    flex-direction: row;
    align-items: center;

    .alternative-examples {
      margin-right: 3rem;
      img {
        max-width: 21rem;
      }
    }
  }
}
</style>

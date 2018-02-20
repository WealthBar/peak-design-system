<template>
  <body>
    <main class="home">
      <side-menu :opened="menuDisplayed" >
      <ul slot="content" class="side-menu-content">
      </ul>
    </side-menu>
    <article>
      <img class="logo" src="~@//assets/logo.svg">

      <h1>WealthBar Vue Starter Kit</h1>
      <h2>This is a title header</h2>
      <h3>This is a subheader</h3>
      <h4>This is a minor header</h4>
      <h5>This is a large body copy</h5>
      <hr/>
      <p>
        This is basic body copy</br>
        <strong>This is bold body copy</strong></br>
        <em>This is subtle body copy</em></br>
        <small>This is small body copy</small>
      </p>
      <hr/>

<section>
      <h2>Font Stack</h2>
      <hr/>
      <h3>headers</h3>
      <pre>
        <code>
"GT-Walsheim-Bold", sans-serif !default;
</code>
</pre>
      <h3>body/copy</h3>
      <pre>
        <code>
"Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif !default;
</code>
</pre>
</section>

<section>
      <h2>Headers</h2>
      <hr/>
      <h1>H1 Header Element</h1>
      <pre>
        <code>
h1 {
  font-size: 1.875rem;
  line-height: 1.375rem;
  font-weight: 600; //GT Walsheim Medium
}
</code>
</pre>
</section>
     </article>
  </main>
  </body>
</template>

<script>
  import { sideMenu } from '@/components';

  export default {
    components: { sideMenu },
    data() {
      return {
        menuDisplayed: false,
      };
    },
  };
</script>

<style lang="scss">
  @import 'style.scss';

  main {
    margin: auto;
  }

  .logo {
    margin: 2rem 4rem;
  }

  section.thirds {
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-direction: column;

    @media #{$sw-medium} {
      flex-direction: row;
    }

    > div {
      flex: 1 0 33%;
      padding: 0 1rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.25rem;
    &.one-three-eighths { line-height: 1.375rem; }
    &.one-seven-sixteenths { line-height: 1.4375rem; }
    &.one-half { line-height: 1.5rem; }
    &.one-five-eights { line-height: 1.625rem; }
    &.large { font-size: 1.125rem; }
    span { color: $brand; }
  }

</style>

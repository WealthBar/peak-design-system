<template>
  <section class="theme">
    <p>These colours are used across marketing, product, and beyond. These colours define our brand and play a large part in the visual identity of Assante Connect.</p>
    <div class="colour-block dark primary">
      <strong>Blue</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block primary50">
        <strong>$primary-50</strong>
        <span>#dbf1ff</span>
      </div>
      <div class="colour-block primary100">
        <strong>$primary-100</strong>
        <span>#72befb</span>
      </div>
      <div class="colour-block dark primary300">
        <strong>$primary-300</strong>
        <span>#4792ee</span>
      </div>
      <div class="colour-block dark primary500">
        <strong>$primary-500</strong>
        <span>#3175d3</span>
      </div>
      <div class="colour-block dark primary700">
        <strong>$primary-700</strong>
        <span>#2a5da8</span>
      </div>
      <div class="colour-block dark primary900">
        <strong>$primary-900</strong>
        <span>#16407d</span>
      </div>

    </div>

    <br>

    <div class="colour-block dark secondary">
      <strong>Teal</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block secondary50">
        <strong>$secondary-50</strong>
        <span>#e2f6f2</span>
      </div>
      <div class="colour-block secondary100">
        <strong>$secondary-100</strong>
        <span>#49d6ce</span>
      </div>
      <div class="colour-block dark secondary300">
        <strong>$secondary-300</strong>
        <span>#50c2bd</span>
      </div>
      <div class="colour-block dark secondary500">
        <strong>$secondary-500</strong>
        <span>#008084</span>
      </div>
      <div class="colour-block dark secondary700">
        <strong>$secondary-700</strong>
        <span>#00646b</span>
      </div>
    </div>

    <br>

    <div class="colour-block tertiary">
      <strong>Yellow</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block tertiary50">
        <strong>$tertiary-50</strong>
        <span>#f7f2b8</span>
      </div>
      <div class="colour-block tertiary100">
        <strong>$tertiary-100</strong>
        <span>#f2e208</span>
      </div>
      <div class="colour-block dark tertiary300">
        <strong>$tertiary-300</strong>
        <span>#e6c605</span>
      </div>
    </div>

    <br>

    <div class="colour-block bg50">
      <strong>Sky</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block bg50">
        <strong>$bg-50</strong>
        <span>#eaf5fd</span>
      </div>
      <div class="colour-block bg100">
        <strong>$bg-100</strong>
        <span>#d3e6f4</span>
      </div>
    </div>

    <h4>When to choose between primary-50 & bg-50:</h4>
    <p><code>$primary-50</code> and <code>$bg-50</code> are very similar, but are used for different purposes. <code>$primary-50</code> is brighter and used in smaller doses, primarily to highlight hover or selected effects in specific UI components, such as a hover effect in a context menu item. <code>$bg-50</code> is used in marketing; it is more muted, so it is ideal for larger backgrounds, such as the footer in the brochure site.</p>

    <hr>

    <h3>UI</h3>
    <p>These colours are primarily used for functional purposes in our product interface.</p>

    <div class="colour-block neg">
      <strong>Ruby</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block neg50">
        <strong>$neg-50</strong>
        <span>#fcefed</span>
      </div>
      <div class="colour-block dark neg300">
        <strong>$neg-300</strong>
        <span>#e96654</span>
      </div>
      <div class="colour-block dark neg500">
        <strong>$neg-500</strong>
        <span>#d93939</span>
      </div>
      <div class="colour-block dark neg700">
        <strong>$neg-700</strong>
        <span>#b31a1a</span>
      </div>
    </div>

    <br>
    <div class="colour-block pos">
      <strong>Emerald</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block pos50">
        <strong>$pos-50</strong>
        <span>#e9f7e6</span>
      </div>
      <div class="colour-block dark pos300">
        <strong>$pos-300</strong>
        <span>#2bb673</span>
      </div>
      <div class="colour-block dark pos500">
        <strong>$pos-500</strong>
        <span>#0a884e</span>
      </div>
      <div class="colour-block dark pos700">
        <strong>$pos-700</strong>
        <span>#086749</span>
      </div>
    </div>

    <h3>Neutral</h3>
    <p>Our neutral palette is based on an off-black with a subtle purple hue.</p>
    <div class="colour-block desktop-only neutral" style="border: 1px solid #f7f7f8; border-bottom: none;">
      <strong>Pearl</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block neutral0" style="border: 1px solid #f7f7f8;">
        <strong><span class="mobile-only">$white / </span>$neutral-0</strong>
        <span>#ffffff</span>
      </div>
      <div class="colour-block neutral50">
        <strong>$neutral-50</strong>
        <span>#f7f7f8</span>
      </div>
      <div class="colour-block neutral100">
        <strong>$neutral-100</strong>
        <span>#e4e4ea</span>
      </div>
      <div class="colour-block neutral300">
        <strong>$neutral-300</strong>
        <span>#d0d0d9</span>
      </div>
      <div class="colour-block dark neutral500">
        <strong>$neutral-500</strong>
        <span>#86868f</span>
      </div>
      <div class="colour-block dark neutral700">
        <strong>$neutral-700</strong>
        <span>#606068</span>
      </div>
      <div class="colour-block dark neutral900">
        <strong><span class="mobile-only">$black / </span>$neutral-900</strong>
        <span>#37373f</span>
      </div>
    </div>
    <div class="colour-block dark desktop-only" style="background: #37373f;">
      <strong >Onyx</strong>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @import "~@wealthbar/peak-style/scss/theme/assante.scss";
  .theme { padding-bottom: 2rem; }
  .colour-block {
    padding: 0.5rem;
    border-bottom: 1px solid $white;

    &.dark {
      color: white;
    }

    span {
      display: block;
    }
  }
  .primary { background: $primary; }
  .primary50 { background: $primary-50; }
  .primary100 { background: $primary-100; }
  .primary300 { background: $primary-300; }
  .primary500 { background: $primary-500; }
  .primary700 { background: $primary-700; }
  .primary900 { background: $primary-900; }

  .secondary { background: $secondary; }
  .secondary50 { background: $secondary-50; }
  .secondary100 { background: $secondary-100; }
  .secondary300 { background: $secondary-300; }
  .secondary500 { background: $secondary-500; }
  .secondary700 { background: $secondary-700; }

  .tertiary { background: $tertiary; }
  .tertiary50 { background: $tertiary-50; }
  .tertiary100 { background: $tertiary-100; }
  .tertiary300 { background: $tertiary-300; }

  .bg50 { background: $bg-50; }
  .bg100 { background: $bg-100; }

  .neg { background: $neg; color: $white;}
  .neg50 { background: $neg-50; }
  .neg300 { background: $neg-300; }
  .neg500 { background: $neg-500; }
  .neg700 { background: $neg-700; }

  .pos { background: $pos; color: $white;}
  .pos50 { background: $pos-50; }
  .pos300 { background: $pos-300; }
  .pos500 { background: $pos-500; }
  .pos700 { background: $pos-700; }

  .white { background: $white; }
  .neutral0 { background: $neutral-0; }
  .neutral50 { background: $neutral-50; }
  .neutral100 { background: $neutral-100; }
  .neutral300 { background: $neutral-300; }
  .neutral500 { background: $neutral-500; }
  .neutral700 { background: $neutral-700; }
  .neutral900 { background: $neutral-900; }
  .black { background: $black; }

  @media #{$screen-width-medium} {
    .color-pallete {
      display: flex;
      align-items: stretch;
      justify-content: space-between;

      .colour-block {
        min-height: 6rem;
        flex: 1 1 auto;
        border-right: 1px solid $white;
        &:last-child { border-right: none; }
      }

      .colour-space {
        width: 1rem;
      }
    }
  }
</style>

<template>
  <article>
    <h1>Colour</h1>
    <p>WealthBar’s fresh colour palette fits our light, anti-institution personality without being too young or too loud. Colour also plays an important functional role. When properly used, colour can highlight, de-emphasize, contrast, or add emotion to our communication and UI.</p>

    <h2>Palette</h2>

    <h3>Weight</h3>
    <p>In an effort to bulletproof our system of colours, we use weights from 50 to 900, similar to font weights. Weight is defined by the contrast ratio of the colour against white, allowing us to convey relevant weights across our entire colour palette. This means $emerald-50 and $ruby-50 should be pretty close in weight, even if they’re on opposite ends of the colour spectrum.</p>

    <h3>Brand</h3>
    <p>These colours are used across marketing, product, and beyond. These colours define our brand and play a large part in the visual identity of WealthBar.</p>
    <div class="colour-block dark" style="background: #00B298;">
      <strong>Jade</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block" style="background: #ecf9f5;">
        <strong>Jade-50</strong>
        <span>#ECF9F5</span>
      </div>
      <div class="colour-block dark" style="background: #68ccb1;">
        <strong>Jade-100</strong>
        <span>#68CCB1</span>
      </div>
      <div class="colour-block dark" style="background: #00B298;">
        <strong>Jade-300</strong>
        <span>#00B298</span>
      </div>
      <div class="colour-block dark" style="background: #008579;">
        <strong>Jade-500</strong>
        <span>#008579</span>
      </div>
      <div class="colour-block dark" style="background: #0e6b64;">
        <strong>Jade-700</strong>
        <span>#0E6B64</span>
      </div>
    </div>

    <br>

    <div class="colour-block dark" style="background: #787A97;">
      <strong>Amethyst</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block" style="background: #e8e9f1;">
        <strong>Amethyst-50</strong>
        <span>#E8E9F1</span>
      </div>
      <div class="colour-block dark" style="background: #9d9fbc;">
        <strong>Amethyst-100</strong>
        <span>#9D9FBC</span>
      </div>
      <div class="colour-block dark" style="background: #787A97;">
        <strong>Amethyst-300</strong>
        <span>#787A97</span>
      </div>
      <div class="colour-block dark" style="background: #5d5f7a;">
        <strong>Amethyst-500</strong>
        <span>#5D5F7A</span>
      </div>
      <div class="colour-block dark" style="background: #464855;">
        <strong>Amethyst-700</strong>
        <span>#464855</span>
      </div>
    </div>

    <br>

    <div class="colour-block" style="background: #F5BE44;">
      <strong>Amber</strong>
    </div>
    <div class="color-pallete">
      <div class="colour-block" style="background: #fee5a0;">
        <strong>Amber-100</strong>
        <span>#FEE5A0</span>
      </div>
      <div class="colour-block" style="background: #F5BE44;">
        <strong>Amber-300</strong>
        <span>#9D9FBC</span>
      </div>
      <div class="colour-block" style="background: #da9f18;">
        <strong>Amber-500</strong>
        <span>#DA9F18</span>
      </div>
    </div>
    <h5>When to choose between Jade & Mint:</h5>
    <p>$jade-50 and $mint-50 are very similar, but are used for different purposes. $jade-50 is brighter and used in smaller doses, primarily to highlight hover or selected effects in specific UI components, such as a hover effect in a context menu item. $mint-50 is used in marketing; it is more muted, so it is ideal for larger backgrounds, such as the footer in the brochure site.</p>

    <h5>UI</h5>
    <p>These colours are primarily used for functional purposes in our product interface.</p>

    <h5>Neutral</h5>
    <p>Our neutral palette is based on an off-black with a subtle purple hue.</p>



          <h3>Secondary Brand Colours</h3>


        <h3>Neutral/Greyscale</h3>
        <p>Our neutral palette is based on an off-black with a subtle purple hue. </p>
        <div class="colour-block desktop-only" style="border: 1px solid #f7f7f8; border-bottom: none;">
          <strong>White</strong>
        </div>
        <div class="color-pallete">
          <div class="colour-block" style="border: 1px solid #f7f7f8;">
            <strong><span class="mobile-only">White / </span>Pearl-0</strong>
            <span>#FFFFFF</span>
          </div>
          <div class="colour-block" style="background: #f7f7f8;">
            <strong>Pearl-50</strong>
            <span>#F7F7F8</span>
          </div>
          <div class="colour-block" style="background: #e4e4ea;">
            <strong>Pearl-100</strong>
            <span>#E4E4EA</span>
          </div>
          <div class="colour-block" style="background: #d0d0d9;">
            <strong>Pearl-300</strong>
            <span>#D0D0D9</span>
          </div>
          <div class="colour-block dark" style="background: #86868F;">
            <strong>Pearl-500</strong>
            <span>#86868F</span>
          </div>
          <div class="colour-block dark" style="background: #606068;">
            <strong>Pearl-700</strong>
            <span>#606068</span>
          </div>
          <div class="colour-block dark" style="background: #37373f;">
            <strong><span class="mobile-only">Black / </span>Pearl-900</strong>
            <span>#37373F</span>
          </div>
        </div>
        <div class="colour-block dark desktop-only" style="background: #37373f;">
          <strong >Black</strong>
        </div>
      </section>
  </article>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.colour-block {
  padding: 0.5rem;
  &.dark {
    color: white;
  }
  span {
    display: block;
  }
}

@media #{$screen-width-medium} {
  .color-pallete {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    .colour-block {
      min-height: 6rem;
      flex: 1 1 auto;
    }
    .colour-space {
      width: 1rem;
    }
  }
}
</style>

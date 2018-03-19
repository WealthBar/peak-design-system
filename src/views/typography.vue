<template>
  <article>
    <h1>Typography</h1>
    <p>WealthBar’s typography is a balance between readability and personality. Using our set of defined typography styles ensures consistent quality and a clear hierarchy. Our typography uses rem, the measurement unit we use. Read more about measurements.</p>
    <section>
      <h2><a name="headers">Headers</a></h2>
      <p>Headers create hierarchy in a layout and make scanning easy. Use them for content such as page titles or section titles. We have mobile and desktop header styles so that our typography is responsive to screen real estate.</p>

      <p>[ mobile | desktop ]</p>

      <h1>H1 This is a <span class="large">huge</span> huge header.</h1>
      <pre><code>&lt;h1&gt;H1 This is a huge header.&lt;/h1&gt;</code></pre>

      <h2>H2 This is a big header.</h2>
      <pre><code>&lt;h2&gt;H2 This is a big header.&lt;/h2&gt;</code></pre>

      <h3>H3 This is a medium header.</h3>
      <pre><code>&lt;h3&gt;H3 This is a medium header.&lt;/h3&gt;</code></pre>

      <h4>H4 This is a small header.</h4>
      <pre><code>&lt;h4&gt;H4 This is a small header.&lt;/h4&gt;</code></pre>

    </section>
    <section>
      <h2><a name="paragraphs">Paragraphs</a></h2>
      <p>Paragraphs are optimized for web readability. For additional emphasis or de-emphasis, we have 4 style classes that can be applied as needed to our base Paragraph style.</p>
      <h3>Base style</h3>
      <p>Our base paragraph style is the foundation of our typography. All styles are variants of this style. It is also the default text style, meaning if no style is applied or specified, it should use this style.</p>
      <p>This is a paragraph.</p>
      <div class="code-split">
      <pre><code>&lt;p&gt;This is a paragraph.&lt;/p&gt;</code></pre>
      <p><pre>font-size: 16px
line-height: 22px
font-weight: normal
padding: 16px 0px 16px</pre></p>
      </div>
      <h2>Additional Styles</h2>
      <p class="small">This is a small text paragraph.</small></p>
      <pre><code>&lt;p class="small"&gt;This is small text.&lt;/p&gt;</code></pre>
      <p class="large">This is a large text paragraph.</p>
      <pre><code>&lt;p class=”large”&gt;This is large text.&lt;/p&gt;</code></pre>
      <p>This is <span class="subtle">subtle text</span> used in a paragraph.</p>
      <pre><code>&lt;p&gt;This is &lt;span class="subtle"&gt;subtle text&lt;/span&gt; used in a paragraph.&lt;/p&gt;</code></pre>
      <p>This is <strong>strong text</strong> used in a paragraph.</p>
      <pre><code>&lt;p&gt;This is &lt;strong&gt;strong text&lt;/strong&gt; used in a paragraph.&lt;/p&gt;</code></pre>
    </section>
    <section>
      <h2>Links</h2>
      <p>This is our default style for text links within paragraphs. Links inherit the paragraph’s size and style. We use progressive enhancement with a basic fallback if browsers don’t support certain types of styling.</p>
      <p><a href="#">This is a link</a></p>
      <p><button>Button link</button></p>
      <pre><code>&lt;a href="http://wealthbar.com"&gt;This is a link&lt;/a&gt;
&lt;button&gt;button link&lt;/button&gt;</code></pre>
    </section>
    <section>
      <h2>Font Stack</h2>
      <p>We use the same font stack regardless of the device. GT Walsheim is our typeface for it’s friendly and unique personality, as well as its web readability.</p>
      <pre><code>"GT-Walsheim", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif;</code></pre>
      <section>
        <h2><a name="links">Links</a></h2>
        Lorem ipsum dolor amet seitan kombucha deep v austin actually four dollar toast cronut green juice sriracha jianbing farm-to-table wayfarers glossier aesthetic dreamcatcher. Authentic knausgaard street art leggings sriracha, raclette blog lumbersexual. IPhone retro copper mug dreamcatcher 90's 8-bit artisan. Succulents hoodie you probably haven't heard of them kombucha. Typewriter literally skateboard sriracha fixie migas godard ugh.

        Live-edge retro chartreuse vegan shoreditch austin PBR&B single-origin coffee hammock synth green juice fanny pack banh mi activated charcoal. Adaptogen pork belly VHS locavore. Selfies deep v lomo try-hard artisan. Hammock woke man braid aesthetic wayfarers unicorn pitchfork. Irony letterpress bushwick fashion axe, lyft mumblecore flannel tote bag etsy. Bushwick gastropub banh mi, beard leggings kombucha craft beer authentic man braid live-edge chillwave.

        Cornhole PBR&B taxidermy, biodiesel activated charcoal etsy meh blue bottle DIY drinking vinegar tilde letterpress mustache. Literally letterpress meggings, hammock small batch actually dreamcatcher green juice. Ramps taxidermy vexillologist everyday carry chartreuse quinoa cronut, lyft DIY taiyaki. Sartorial adaptogen distillery glossier, mlkshk narwhal meditation fanny pack pickled gluten-free wolf venmo photo booth. VHS photo booth wayfarers godard 8-bit locavore yuccie cray adaptogen messenger bag selfies try-hard street art hammock. Selvage put a bird on it lomo microdosing unicorn portland la croix chartreuse hell of pour-over hella drinking vinegar.

        Succulents taxidermy bushwick plaid +1 air plant bicycle rights pok pok. Echo park selfies put a bird on it kogi fingerstache. Snackwave lomo bicycle rights pop-up cloud bread PBR&B wayfarers dreamcatcher leggings gentrify air plant squid. Tilde biodiesel kitsch quinoa. Hexagon four loko try-hard plaid kale chips godard shabby chic readymade live-edge. Swag glossier af, photo booth try-hard pug cred tattooed butcher. Offal mumblecore XOXO church-key.

        Hella dreamcatcher gochujang, shaman 90's taxidermy stumptown paleo butcher. Kogi irony street art, seitan polaroid butcher pinterest live-edge scenester gochujang. Cold-pressed art party air plant, pitchfork twee deep v etsy chillwave kinfolk. Helvetica tumeric succulents, fixie hoodie aesthetic woke scenester. Small batch polaroid master cleanse, edison bulb yr copper mug bitters before they sold out wayfarers. Synth poutine shoreditch butcher, taiyaki flannel yr distillery.

        Oh. You need a little dummy text for your mockup? How quaint.
    </section>
    <div>
      <button id="topBtn" title="Go to top">Top</button>
    </div>
    <section>
      <h2><a name="lists">Lists</a></h2>

      Lorem ipsum dolor amet seitan kombucha deep v austin actually four dollar toast cronut green juice sriracha jianbing farm-to-table wayfarers glossier aesthetic dreamcatcher. Authentic knausgaard street art leggings sriracha, raclette blog lumbersexual. IPhone retro copper mug dreamcatcher 90's 8-bit artisan. Succulents hoodie you probably haven't heard of them kombucha. Typewriter literally skateboard sriracha fixie migas godard ugh.

      Live-edge retro chartreuse vegan shoreditch austin PBR&B single-origin coffee hammock synth green juice fanny pack banh mi activated charcoal. Adaptogen pork belly VHS locavore. Selfies deep v lomo try-hard artisan. Hammock woke man braid aesthetic wayfarers unicorn pitchfork. Irony letterpress bushwick fashion axe, lyft mumblecore flannel tote bag etsy. Bushwick gastropub banh mi, beard leggings kombucha craft beer authentic man braid live-edge chillwave.

      Cornhole PBR&B taxidermy, biodiesel activated charcoal etsy meh blue bottle DIY drinking vinegar tilde letterpress mustache. Literally letterpress meggings, hammock small batch actually dreamcatcher green juice. Ramps taxidermy vexillologist everyday carry chartreuse quinoa cronut, lyft DIY taiyaki. Sartorial adaptogen distillery glossier, mlkshk narwhal meditation fanny pack pickled gluten-free wolf venmo photo booth. VHS photo booth wayfarers godard 8-bit locavore yuccie cray adaptogen messenger bag selfies try-hard street art hammock. Selvage put a bird on it lomo microdosing unicorn portland la croix chartreuse hell of pour-over hella drinking vinegar.

      Succulents taxidermy bushwick plaid +1 air plant bicycle rights pok pok. Echo park selfies put a bird on it kogi fingerstache. Snackwave lomo bicycle rights pop-up cloud bread PBR&B wayfarers dreamcatcher leggings gentrify air plant squid. Tilde biodiesel kitsch quinoa. Hexagon four loko try-hard plaid kale chips godard shabby chic readymade live-edge. Swag glossier af, photo booth try-hard pug cred tattooed butcher. Offal mumblecore XOXO church-key.

      Hella dreamcatcher gochujang, shaman 90's taxidermy stumptown paleo butcher. Kogi irony street art, seitan polaroid butcher pinterest live-edge scenester gochujang. Cold-pressed art party air plant, pitchfork twee deep v etsy chillwave kinfolk. Helvetica tumeric succulents, fixie hoodie aesthetic woke scenester. Small batch polaroid master cleanse, edison bulb yr copper mug bitters before they sold out wayfarers. Synth poutine shoreditch butcher, taiyaki flannel yr distillery.

      Oh. You need a little dummy text for your mockup? How quaint.
    </section>
    <section>
      <h2><a name="line">Line Length</a></h2>

      Lorem ipsum dolor amet seitan kombucha deep v austin actually four dollar toast cronut green juice sriracha jianbing farm-to-table wayfarers glossier aesthetic dreamcatcher. Authentic knausgaard street art leggings sriracha, raclette blog lumbersexual. IPhone retro copper mug dreamcatcher 90's 8-bit artisan. Succulents hoodie you probably haven't heard of them kombucha. Typewriter literally skateboard sriracha fixie migas godard ugh.

      Live-edge retro chartreuse vegan shoreditch austin PBR&B single-origin coffee hammock synth green juice fanny pack banh mi activated charcoal. Adaptogen pork belly VHS locavore. Selfies deep v lomo try-hard artisan. Hammock woke man braid aesthetic wayfarers unicorn pitchfork. Irony letterpress bushwick fashion axe, lyft mumblecore flannel tote bag etsy. Bushwick gastropub banh mi, beard leggings kombucha craft beer authentic man braid live-edge chillwave.

      Cornhole PBR&B taxidermy, biodiesel activated charcoal etsy meh blue bottle DIY drinking vinegar tilde letterpress mustache. Literally letterpress meggings, hammock small batch actually dreamcatcher green juice. Ramps taxidermy vexillologist everyday carry chartreuse quinoa cronut, lyft DIY taiyaki. Sartorial adaptogen distillery glossier, mlkshk narwhal meditation fanny pack pickled gluten-free wolf venmo photo booth. VHS photo booth wayfarers godard 8-bit locavore yuccie cray adaptogen messenger bag selfies try-hard street art hammock. Selvage put a bird on it lomo microdosing unicorn portland la croix chartreuse hell of pour-over hella drinking vinegar.

      Succulents taxidermy bushwick plaid +1 air plant bicycle rights pok pok. Echo park selfies put a bird on it kogi fingerstache. Snackwave lomo bicycle rights pop-up cloud bread PBR&B wayfarers dreamcatcher leggings gentrify air plant squid. Tilde biodiesel kitsch quinoa. Hexagon four loko try-hard plaid kale chips godard shabby chic readymade live-edge. Swag glossier af, photo booth try-hard pug cred tattooed butcher. Offal mumblecore XOXO church-key.

      Hella dreamcatcher gochujang, shaman 90's taxidermy stumptown paleo butcher. Kogi irony street art, seitan polaroid butcher pinterest live-edge scenester gochujang. Cold-pressed art party air plant, pitchfork twee deep v etsy chillwave kinfolk. Helvetica tumeric succulents, fixie hoodie aesthetic woke scenester. Small batch polaroid master cleanse, edison bulb yr copper mug bitters before they sold out wayfarers. Synth poutine shoreditch butcher, taiyaki flannel yr distillery.

      Oh. You need a little dummy text for your mockup? How quaint.
    </section>
    <section>
      <h2><a name="stack">Font Stack</a></h2>
      Lorem ipsum dolor amet seitan kombucha deep v austin actually four dollar toast cronut green juice sriracha jianbing farm-to-table wayfarers glossier aesthetic dreamcatcher. Authentic knausgaard street art leggings sriracha, raclette blog lumbersexual. IPhone retro copper mug dreamcatcher 90's 8-bit artisan. Succulents hoodie you probably haven't heard of them kombucha. Typewriter literally skateboard sriracha fixie migas godard ugh.

      Live-edge retro chartreuse vegan shoreditch austin PBR&B single-origin coffee hammock synth green juice fanny pack banh mi activated charcoal. Adaptogen pork belly VHS locavore. Selfies deep v lomo try-hard artisan. Hammock woke man braid aesthetic wayfarers unicorn pitchfork. Irony letterpress bushwick fashion axe, lyft mumblecore flannel tote bag etsy. Bushwick gastropub banh mi, beard leggings kombucha craft beer authentic man braid live-edge chillwave.

      Cornhole PBR&B taxidermy, biodiesel activated charcoal etsy meh blue bottle DIY drinking vinegar tilde letterpress mustache. Literally letterpress meggings, hammock small batch actually dreamcatcher green juice. Ramps taxidermy vexillologist everyday carry chartreuse quinoa cronut, lyft DIY taiyaki. Sartorial adaptogen distillery glossier, mlkshk narwhal meditation fanny pack pickled gluten-free wolf venmo photo booth. VHS photo booth wayfarers godard 8-bit locavore yuccie cray adaptogen messenger bag selfies try-hard street art hammock. Selvage put a bird on it lomo microdosing unicorn portland la croix chartreuse hell of pour-over hella drinking vinegar.

      Succulents taxidermy bushwick plaid +1 air plant bicycle rights pok pok. Echo park selfies put a bird on it kogi fingerstache. Snackwave lomo bicycle rights pop-up cloud bread PBR&B wayfarers dreamcatcher leggings gentrify air plant squid. Tilde biodiesel kitsch quinoa. Hexagon four loko try-hard plaid kale chips godard shabby chic readymade live-edge. Swag glossier af, photo booth try-hard pug cred tattooed butcher. Offal mumblecore XOXO church-key.

      Hella dreamcatcher gochujang, shaman 90's taxidermy stumptown paleo butcher. Kogi irony street art, seitan polaroid butcher pinterest live-edge scenester gochujang. Cold-pressed art party air plant, pitchfork twee deep v etsy chillwave kinfolk. Helvetica tumeric succulents, fixie hoodie aesthetic woke scenester. Small batch polaroid master cleanse, edison bulb yr copper mug bitters before they sold out wayfarers. Synth poutine shoreditch butcher, taiyaki flannel yr distillery.

      Oh. You need a little dummy text for your mockup? How quaint.
    </section>
        <section>
      <h2><a name="measurements">Measurements</a></h2>
      Lorem ipsum dolor amet seitan kombucha deep v austin actually four dollar toast cronut green juice sriracha jianbing farm-to-table wayfarers glossier aesthetic dreamcatcher. Authentic knausgaard street art leggings sriracha, raclette blog lumbersexual. IPhone retro copper mug dreamcatcher 90's 8-bit artisan. Succulents hoodie you probably haven't heard of them kombucha. Typewriter literally skateboard sriracha fixie migas godard ugh.

      Live-edge retro chartreuse vegan shoreditch austin PBR&B single-origin coffee hammock synth green juice fanny pack banh mi activated charcoal. Adaptogen pork belly VHS locavore. Selfies deep v lomo try-hard artisan. Hammock woke man braid aesthetic wayfarers unicorn pitchfork. Irony letterpress bushwick fashion axe, lyft mumblecore flannel tote bag etsy. Bushwick gastropub banh mi, beard leggings kombucha craft beer authentic man braid live-edge chillwave.

      Cornhole PBR&B taxidermy, biodiesel activated charcoal etsy meh blue bottle DIY drinking vinegar tilde letterpress mustache. Literally letterpress meggings, hammock small batch actually dreamcatcher green juice. Ramps taxidermy vexillologist everyday carry chartreuse quinoa cronut, lyft DIY taiyaki. Sartorial adaptogen distillery glossier, mlkshk narwhal meditation fanny pack pickled gluten-free wolf venmo photo booth. VHS photo booth wayfarers godard 8-bit locavore yuccie cray adaptogen messenger bag selfies try-hard street art hammock. Selvage put a bird on it lomo microdosing unicorn portland la croix chartreuse hell of pour-over hella drinking vinegar.

      Succulents taxidermy bushwick plaid +1 air plant bicycle rights pok pok. Echo park selfies put a bird on it kogi fingerstache. Snackwave lomo bicycle rights pop-up cloud bread PBR&B wayfarers dreamcatcher leggings gentrify air plant squid. Tilde biodiesel kitsch quinoa. Hexagon four loko try-hard plaid kale chips godard shabby chic readymade live-edge. Swag glossier af, photo booth try-hard pug cred tattooed butcher. Offal mumblecore XOXO church-key.

      Hella dreamcatcher gochujang, shaman 90's taxidermy stumptown paleo butcher. Kogi irony street art, seitan polaroid butcher pinterest live-edge scenester gochujang. Cold-pressed art party air plant, pitchfork twee deep v etsy chillwave kinfolk. Helvetica tumeric succulents, fixie hoodie aesthetic woke scenester. Small batch polaroid master cleanse, edison bulb yr copper mug bitters before they sold out wayfarers. Synth poutine shoreditch butcher, taiyaki flannel yr distillery.

      Oh. You need a little dummy text for your mockup? How quaint.
    </section>

  </article>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Typography',
      };
    },
    methods: {
    },
  };
</script>

<style lang="scss">
</style>

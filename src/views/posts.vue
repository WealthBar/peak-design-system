<template>
  <article class="container">
    <section id="post">
      <h1>Post</h1>

      <p>A post is a layout pattern used to display staff activities on various admin interfaces.</p>

      <p>The Peak implementation of <code>post</code> should enable the end developer to easily mark up a timeline showing multiple points of activity or multiple comments using <code>v-for</code> or something akin to it in future frameworks. As such, post should display itself in one of two variants, depending on what data it is given:</p>

      <ul>
        <li>Status variant - Show a basic version featuring a status update.</li>
        <li>Comment variant - Render an additional block of text, typically the body of a comment.</li>
      </ul>

      <h3>Status Variant</h3>

      <post
        v-for="(post, index) in statuses"
        :key="`${index}status`"
        :action="post.action"
        :actor="post.actor"
        :status="post.status"
        :time-string="post.timeString"
      />

      <pre><code class="language-markup">&lt;article class="post"&gt;
  &lt;section class="post-status"&gt;
    &lt;div class="status-icon dark"&gt;
      &lt;svg viewBox="0 0 32 32"&gt;
        &lt;polygon points="11,27.4 1.3,17.7 2.7,16.3 11,24.6 29.3,6.3 30.7,7.7" /&gt;
      &lt;/svg&gt;
    &lt;/div&gt;
    &lt;div class="status-details"&gt;
      &lt;span&gt;&lt;strong&gt;User&lt;/strong&gt; approved the request.&lt;/span&gt;
      &lt;time class="subtle"&gt;Jan 1 - 1:11pm&lt;/time&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/article&gt;</code></pre>

      <h3>Comment Variant</h3>

      <post
        v-for="(post, index) in comments"
        :key="`${index}comment`"
        :action="post.action"
        :actor="post.actor"
        :status="post.status"
        :time-string="post.timeString"
        :comment="post.comment"
      />

      <pre><code class="language-markup">&lt;article class="post"&gt;
  &lt;section class="post-status"&gt;
    &lt;div class="status-icon"&gt;
      &lt;span&gt;U&lt;/span&gt;
    &lt;/div&gt;
    &lt;div class="status-details"&gt;
      &lt;span&gt;&lt;strong&gt;User&lt;/strong&gt; left a comment.&lt;/span&gt;
      &lt;time class="subtle"&gt;Jan 2 - 2:00pm&lt;/time&gt;
    &lt;/div&gt;
  &lt;/section&gt;
  &lt;p class="post-comment small no-margin"&gt;This is a comment\nIt can be multi-line with an unescaped "\n"&lt;/p&gt;
&lt;/article&gt;</code></pre>

      <h3>Vue Component Details</h3>

      <p>Our <code>post</code> component accepts the props below. Please note that the component does not localize text. The final text to be displayed - localized if necessary - must be passed to the component</p>

      <ul>
        <li><code>action</code>: A string that describes type of status update to display. The component has some internal logic to change the svg and its color based on the action. Current accepted actions are <code>'approve'</code>, <code>'assign'</code>, <code>'cancel'</code>, <code>'comment'</code>, <code>'create'</code>, <code>'reject'</code>, <code>'unassign'</code>.</li>
        <li><code>actor</code>: A string that is name of the user who took the action.</li>
        <li><code>time-string</code>: The string representing the time the action was taken.</li>
        <li><code>status</code>: The specific text of status update to be displayed.</li>
        <li><code>comment</code> (optional): If passed in as a prop, will render an additional block of text below the status update.</li>
      </ul>

      <pre><code class="language-markup">&lt;post
  v-for="(post, index) in posts"
  :key="`${index}post`"
  :action="post.action"
  :actor="post.actor"
  :status="post.status"
  :time-string="post.timeString"
  :comment="post.comment"
&gt;&lt;/post&gt;</code></pre>
    </section>
  </article>
</template>

<script>
import post from '@/components/post';

export default {
  components: { post },
  data() {
    return {
      statuses: [
        {
          actor: 'Staff #1',
          action: 'approve',
          status: 'approved the request.',
          timeString: 'Jan 1 - 1:11PM',
        },
      ],
      comments: [
        {
          actor: 'Staff #2',
          action: 'comment',
          status: 'left a comment.',
          timeString: 'Jan 2 - 2:00PM',
          comment: 'This is a comment\nIt can be multi-line with an unescaped "\\n"',
        },
      ],
    };
  },
};
</script>

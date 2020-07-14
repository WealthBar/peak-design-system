<template>
  <article class="post">
    <section class="post-status">
      <div class="status-icon" :class="iconVariant">
        <svg v-if="action === 'create'" viewBox="0 0 32 32">
          <polygon points="28,15 17,15 17,4 15,4 15,15 4,15 4,17 15,17 15,28 17,28 17,17 28,17" />
        </svg>
        <svg v-else-if="action.includes('assign')" viewBox="0 0 32 32">
          <path d="M16,16c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S19.9,16,16,16z M16,4c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S18.8,4,16,4z" />
          <path d="M29,30H3v-5.1c0-2.2,1.2-4.1,3.2-5.1c6.1-3,13.6-3,19.7,0c2,1,3.2,2.9,3.2,5.1V30z M5,28h22v-3.1c0-1.4-0.8-2.7-2.1-3.3 c-5.5-2.8-12.4-2.8-17.9,0C5.8,22.2,5,23.5,5,24.9V28z" />
        </svg>
        <svg v-else-if="action === 'approve'" viewBox="0 0 32 32">
          <polygon points="11,27.4 1.3,17.7 2.7,16.3 11,24.6 29.3,6.3 30.7,7.7" />
        </svg>
        <svg v-else-if="['reject', 'cancel'].includes(action)" viewBox="0 0 32 32">
          <polygon points="26.7,6.7 25.3,5.3 16,14.6 6.7,5.3 5.3,6.7 14.6,16 5.3,25.3 6.7,26.7 16,17.4 25.3,26.7 26.7,25.3 17.4,16 " />
        </svg>
        <span v-else>{{ actor[0] }}</span>
      </div>
      <div class="status-details">
        <span><strong>{{ actor }}</strong> {{ status }}</span>
        <time class="subtle">{{ timeString }}</time>
      </div>
    </section>
    <p v-if="comment" class="post-comment small no-margin">{{ comment }}</p>
  </article>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: '',
    },
    actor: {
      type: String,
      default: '',
    },
    timeString: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconVariant() {
      let variant = 'subtle';
      if (['reject', 'cancel', 'approve'].includes(this.action)) {
        variant = 'dark';
      } else if (this.action === 'comment') {
        variant = '';
      }
      return variant;
    },
  },
};
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1rem;

    .post-status {
      display: flex;
      flex-direction: row;
      align-items: center;

      .status-icon {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $bg-50;
        color: $primary-500;

        &.dark {
          background-color: $black;
          svg { fill: $white; }
        }

        &.subtle {
          background-color: $secondary-50;
          svg { fill: $secondary-500; }
        }

        svg {
          height: 1rem;
          width: 1rem;
        }
      }

      .status-details {
        font-size: 0.875rem;
        display: flex;
        flex-direction: column;
        margin-left: 0.75rem;
      }
    }

    .post-comment {
      margin: 1rem 0 0 2.75rem;
      border-left: 1px solid $neutral-100;
      padding-left: 1rem;
      white-space: pre-line;
      word-break: break-word;
    }
  }
</style>

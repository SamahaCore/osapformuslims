<template>
  <a class="grid-link-box" :href="link">
    <div class="badge-area">
      <slot name="badge"></slot>
    </div>
    <div class="text-content">
      <slot></slot>
    </div>
  </a>
</template>

<script setup>
defineProps({
  link: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.grid-link-box {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  color: var(--vp-c-brand);
  font-size: 1rem;
  font-weight: 500;
  transition: border-color 0.25s, color 0.25s;
  height: 114px; /* Fixed height for all boxes */
  text-decoration: none;
  box-sizing: border-box;
}

.badge-area {
  height: 24px; /* Fixed height for badge area */
  min-height: 24px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  position: absolute;
}

.text-content {
  text-decoration: underline;
  display: flex;
  align-items: center;
  flex-grow: 1;
}

.grid-link-box:hover {
  border-color: var(--vp-c-brand);
}
</style>
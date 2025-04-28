<template>
  <div class="custom-links-grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.custom-links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;
  width: 100%;
}

/* Responsive styling */
@media (max-width: 640px) {
  .custom-links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
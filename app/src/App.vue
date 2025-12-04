<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app flex min-h-screen flex-col bg-sky-50">
    <header class="flex items-center justify-between border-b border-sky-200 bg-white px-6 py-3 shadow-sm">
      <div class="text-lg font-semibold text-teal-700">
        Money Manager
      </div>

      <nav class="flex gap-3 text-sm">
        <RouterLink to="/overview" class="rounded-full px-3 py-1 transition hover:bg-sky-100"
          active-class="bg-teal-600 text-white hover:bg-teal-600">
          Overview
        </RouterLink>
        <RouterLink to="/input" class="rounded-full px-3 py-1 transition hover:bg-sky-100"
          active-class="bg-teal-600 text-white hover:bg-teal-600">
          Input Transactions
        </RouterLink>
        <RouterLink to="/analysis" class="rounded-full px-3 py-1 transition hover:bg-sky-100"
          active-class="bg-teal-600 text-white hover:bg-teal-600">
          Money Analysis
        </RouterLink>
        <RouterLink to="/resources" class="rounded-full px-3 py-1 transition hover:bg-sky-100"
          active-class="bg-teal-600 text-white hover:bg-teal-600">
          Resources
        </RouterLink>
      </nav>
    </header>

    <main class="flex flex-1 justify-center px-4 py-6 sm:px-6">
      <div class="w-full max-w-5xl">
        <RouterView />
      </div>
    </main>
  </div>
</template>

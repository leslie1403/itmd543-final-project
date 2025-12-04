<script setup>
const resources = [
  {
    title: 'FAFSA - Creating Your Budget',
    description: 'A quick guide to creating a budget!',
    url: 'https://https://studentaid.gov/resources/prepare-for-college/students/budgeting/creating-your-budget.com/budgeting-101'
  },
  {
    title: 'Bank of America - 10 Financial Tips',
    description: 'Learn about 10 tips to help improve your finances!',
    url: 'https://bettermoneyhabits.bankofamerica.com/en/college/financial-prep-for-your-kids-college'
  },
  {
    title: 'Office of Financial Readiness Calculators',
    description: 'Multiple Calculators aimed to help with your savings plans!',
    url: 'https://finred.usalearning.gov/ToolsAndAddRes/Calculators/Savings'
  }
]
</script>

<template>
  <section class="rounded-xl bg-sky-50 p-6 shadow-sm ring-1 ring-sky-200">
    <h1 class="text-2xl font-semibold text-slate-900">
      Money Management Resources
    </h1>
    <p class="mt-1 text-sm text-slate-600">
      Helpful links and tools to learn more about managing your money.
    </p>

    <div class="mt-6 grid gap-4 md:grid-cols-3">
      <a v-for="resource in resources" :key="resource.title" :href="resource.url" target="_blank"
        rel="noopener noreferrer"
        class="flex flex-col rounded-lg bg-white p-4 text-left shadow-sm ring-1 ring-sky-200 transition hover:-translate-y-0.5 hover:shadow-md">
        <span class="inline-flex w-fit rounded-full bg-teal-50 px-2 py-0.5 text-xs font-semibold text-teal-700">
          {{ resource.tag }}
        </span>
        <h2 class="mt-2 text-base font-semibold text-slate-900">
          {{ resource.title }}
        </h2>
        <p class="mt-1 text-sm text-slate-600">
          {{ resource.description }}
        </p>
        <span class="mt-3 text-xs font-semibold text-teal-700">
          Open resource →
        </span>
      </a>
    </div>
  </section>
</template>

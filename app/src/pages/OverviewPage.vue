<script setup>
import { RouterLink } from 'vue-router'
import { useBudgetData } from '../composables/useBudgetData'

const { netIncome, totalIncome, totalExpenses } = useBudgetData()
</script>

<template>
  <section class="rounded-xl bg-sky-50 p-6 shadow-sm ring-1 ring-sky-200">
    <h1 class="text-2xl font-semibold text-slate-900">
      Dashboard
    </h1>
    <p class="mt-1 text-sm text-slate-600">
      Let's see your income, expenses and net income!
    </p>

    <div class="mt-6 grid gap-4 md:grid-cols-3">
      <div class="rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
        <h2 class="text-sm font-medium text-slate-500">Total Income</h2>
        <p class="mt-2 text-2xl font-semibold text-teal-700">
          ${{ totalIncome.toFixed(2) }}
        </p>
      </div>

      <div class="rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
        <h2 class="text-sm font-medium text-slate-500">Total Expenses</h2>
        <p class="mt-2 text-2xl font-semibold text-sky-700">
          ${{ totalExpenses.toFixed(2) }}
        </p>
      </div>

      <div class="rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
        <h2 class="text-sm font-medium text-slate-500">Net Income</h2>
        <p class="mt-2 text-2xl font-semibold" :class="netIncome >= 0 ? 'text-teal-700' : 'text-sky-700'">
          ${{ netIncome.toFixed(2) }}
        </p>
      </div>
    </div>

    <section class="mt-8">
      <h2 class="text-lg font-semibold text-slate-900">
        What would you like to do?
      </h2>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <RouterLink to="/input"
          class="flex flex-col rounded-lg bg-white p-4 text-left shadow-sm ring-1 ring-sky-200 transition hover:-translate-y-0.5 hover:shadow-md">
          <h3 class="text-base font-semibold text-slate-900">
            Input Transactions
          </h3>
          <p class="mt-1 text-sm text-slate-600">
            Track new income or expenses to keep your numbers accurate.
          </p>
        </RouterLink>

        <RouterLink to="/analysis"
          class="flex flex-col rounded-lg bg-white p-4 text-left shadow-sm ring-1 ring-sky-200 transition hover:-translate-y-0.5 hover:shadow-md">
          <h3 class="text-base font-semibold text-slate-900">
            Analysis 
          </h3>
          <p class="mt-1 text-sm text-slate-600">
            See where your money is going across different categories.
          </p>
        </RouterLink>

        <RouterLink to="/resources"
          class="flex flex-col rounded-lg bg-white p-4 text-left shadow-sm ring-1 ring-sky-200 transition hover:-translate-y-0.5 hover:shadow-md">
          <h3 class="text-base font-semibold text-slate-900">
            Resources
          </h3>
          <p class="mt-1 text-sm text-slate-600">
            Learn more about budgeting strategies and money tips.
          </p>
        </RouterLink>
      </div>
    </section>
  </section>
</template>

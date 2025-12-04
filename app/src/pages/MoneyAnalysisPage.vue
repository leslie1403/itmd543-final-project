<script setup>
import { computed } from 'vue'
import { useBudgetData } from '../composables/useBudgetData'
import SpendingPieChart from '../components/SpendingPieChart.vue'

const {
  totalsByCategory,
  totalIncome,
  totalExpenses,
  netIncome,
  weeklyIncome,
  weeklyExpenses,
  weeklyNet
} = useBudgetData()

const categoryLabels = computed(() => Object.keys(totalsByCategory.value))
const categoryValues = computed(() => Object.values(totalsByCategory.value))
</script>

<template>
  <section class="rounded-xl bg-sky-50 p-6 shadow-sm ring-1 ring-sky-200">
    <h1 class="text-2xl font-semibold text-slate-900">
      Money Analysis
    </h1>
    <p class="mt-1 text-sm text-slate-600">
      A quick snapshot of how your money looks overall and this week.
    </p>

    <div class="mt-6 grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
      <div class="flex h-64 items-center justify-center rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
        <SpendingPieChart v-if="categoryLabels.length" :labels="categoryLabels" :values="categoryValues" />
        <p v-else class="text-sm text-slate-500">
          Add some expense transactions to see a spending chart.
        </p>
      </div>

      <div class="rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
        <h2 class="text-sm font-medium text-slate-500">
          Overall Summary
        </h2>
        <p class="mt-2 text-sm text-slate-700">
          Income:
          <span class="font-semibold text-teal-800">
            ${{ totalIncome.toFixed(2) }}
          </span>
        </p>
        <p class="mt-1 text-sm text-slate-700">
          Expenses:
          <span class="font-semibold text-sky-800">
            ${{ totalExpenses.toFixed(2) }}
          </span>
        </p>
        <p class="mt-1 text-sm text-slate-700">
          Net:
          <span class="font-semibold" :class="netIncome >= 0 ? 'text-teal-700' : 'text-sky-700'">
            ${{ netIncome.toFixed(2) }}
          </span>
        </p>
        <p class="mt-2 text-xs text-slate-500">
          These values include all transactions you have entered.
        </p>
      </div>
    </div>

    <section class="mt-8">
      <h2 class="text-lg font-semibold text-slate-900">
        This Week
      </h2>
      
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <div class="rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
          <h3 class="text-sm font-medium text-slate-500">Earned</h3>
          <p class="mt-2 text-2xl font-semibold text-teal-700">
            ${{ weeklyIncome.toFixed(2) }}
          </p>
        </div>

        <div class="rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
          <h3 class="text-sm font-medium text-slate-500">Spent</h3>
          <p class="mt-2 text-2xl font-semibold text-sky-700">
            ${{ weeklyExpenses.toFixed(2) }}
          </p>
        </div>

        <div class="rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
          <h3 class="text-sm font-medium text-slate-500">Net This Week</h3>
          <p class="mt-2 text-2xl font-semibold" :class="weeklyNet >= 0 ? 'text-teal-700' : 'text-sky-700'">
            ${{ weeklyNet.toFixed(2) }}
          </p>
        </div>
      </div>
    </section>

    <section class="mt-8">
      <h2 class="text-lg font-semibold text-slate-900">
        Spending by Category (All Time)
      </h2>

      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <div v-for="(amount, cat) in totalsByCategory" :key="cat"
          class="rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200">
          <h3 class="text-sm font-semibold text-slate-900">
            {{ cat }}
          </h3>
          <p class="mt-2 text-lg font-semibold text-slate-800">
            ${{ amount.toFixed(2) }}
          </p>
        </div>
      </div>

    </section>
  </section>
</template>

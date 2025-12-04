<script setup>
import { ref, computed } from 'vue'
import { useBudgetData } from '../composables/useBudgetData'

const { transactions, addTransaction } = useBudgetData()

const mode = ref('expense')
const amount = ref('')
const date = ref('')
const category = ref('')
const note = ref('')

const categories = ['Food', 'Rent', 'Transport', 'Entertainment', 'Other']

function onSubmit() {
  if (!amount.value || !date.value || !category.value) {
    alert('Please fill in amount, date, and category.')
    return
  }

  addTransaction({
    date: date.value,
    description: note.value || 'No note',
    category: category.value,
    type: mode.value,
    amount: Number(amount.value)
  })

  amount.value = ''
  date.value = ''
  category.value = ''
  note.value = ''
}

const sortedTransactions = computed(() => {
  return [...transactions.value].sort((a, b) => {
    const da = new Date(a.date)
    const db = new Date(b.date)
    if (db.getTime() === da.getTime()) {
      return b.id - a.id
    }
    return db - da
  })
})
</script>

<template>
  <section class="rounded-xl bg-sky-50 p-6 shadow-sm ring-1 ring-sky-200">
    <h1 class="text-2xl font-semibold text-slate-900">
      Input Transactions
    </h1>
    <p class="mt-1 text-sm text-slate-600">
      Add your income and expenses to track your money over time.
    </p>

    <div class="mt-4 inline-flex rounded-full border border-sky-200 bg-white p-1 text-sm font-medium">
      <button type="button" class="rounded-full px-3 py-1 transition"
        :class="mode === 'expense' ? 'bg-sky-100 text-sky-700' : 'text-slate-700'" @click="mode = 'expense'">
        Expense
      </button>
      <button type="button" class="rounded-full px-3 py-1 transition"
        :class="mode === 'income' ? 'bg-teal-100 text-teal-700' : 'text-slate-700'" @click="mode = 'income'">
        Income
      </button>
    </div>

    <form class="mt-4 grid gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-sky-200 md:grid-cols-2"
      @submit.prevent="onSubmit">
      <div class="md:col-span-1">
        <label class="block text-sm font-medium text-slate-700">
          Amount
          <input v-model="amount" type="number" step="0.01" placeholder="0.00"
            class="mt-1 w-full rounded-md border border-sky-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </label>
      </div>

      <div class="md:col-span-1">
        <label class="block text-sm font-medium text-slate-700">
          Date
          <input v-model="date" type="date"
            class="mt-1 w-full rounded-md border border-sky-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </label>
      </div>

      <div class="md:col-span-1">
        <label class="block text-sm font-medium text-slate-700">
          Category
          <select v-model="category"
            class="mt-1 w-full rounded-md border border-sky-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
            <option disabled value="">Select one</option>
            <option v-for="cat in categories" :key="cat" :value="cat">
              {{ cat }}
            </option>
          </select>
        </label>
      </div>

      <div class="md:col-span-2">
        <label class="block text-sm font-medium text-slate-700">
          Note
          <textarea v-model="note" rows="3" placeholder="Optional description"
            class="mt-1 w-full rounded-md border border-sky-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"></textarea>
        </label>
      </div>

      <div class="md:col-span-2 flex justify-end">
        <button type="submit"
          class="inline-flex items-center rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700">
          Submit
        </button>
      </div>
    </form>

    <section v-if="sortedTransactions.length" class="mt-8 border-t border-sky-200 pt-4">
      <h2 class="text-lg font-semibold text-slate-900">
        Transaction History
      </h2>
      <p class="mt-1 text-sm text-slate-600">
        Transaction history is listed from latest transaction to earliest.
      </p>

      <div class="mt-4 grid gap-3">
        <article v-for="tx in sortedTransactions" :key="tx.id"
          class="rounded-lg bg-white p-3 shadow-sm ring-1 ring-sky-200">
          <div class="flex items-center justify-between">
            <span class="rounded-full px-2 py-0.5 text-xs font-semibold"
              :class="tx.type === 'income' ? 'bg-teal-100 text-teal-700' : 'bg-sky-100 text-sky-700'">
              {{ tx.type === 'income' ? 'Income' : 'Expense' }}
            </span>
            <span class="text-sm font-semibold text-slate-900">
              ${{ tx.amount.toFixed(2) }}
            </span>
          </div>

          <p class="mt-1 text-sm text-slate-800">
            {{ tx.description }}
          </p>

          <div class="mt-1 flex items-center gap-2 text-xs text-slate-500">
            <span>{{ tx.date }}</span>
            <span>•</span>
            <span>{{ tx.category }}</span>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>

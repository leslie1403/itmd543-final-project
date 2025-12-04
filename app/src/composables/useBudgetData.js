import { ref, computed } from 'vue'

const transactions = ref([
    {
        id: 1,
        date: '2025-11-10',
        description: 'Rent',
        category: 'Rent',
        type: 'expense',
        amount: 650
    },
    {
        id: 2,
        date: '2025-11-12',
        description: 'Groceries',
        category: 'Food',
        type: 'expense',
        amount: 45.5
    },
    {
        id: 3,
        date: '2025-11-15',
        description: 'Campus Job Paycheck',
        category: 'Income',
        type: 'income',
        amount: 800
    },
    {
        id: 4,
        date: '2025-11-18',
        description: 'Monthly Bus Pass',
        category: 'Transport',
        type: 'expense',
        amount: 30
    }
])

const totalIncome = computed(() =>
    transactions.value
        .filter(tx => tx.type === 'income')
        .reduce((sum, tx) => sum + tx.amount, 0)
)

const totalExpenses = computed(() =>
    transactions.value
        .filter(tx => tx.type === 'expense')
        .reduce((sum, tx) => sum + tx.amount, 0)
)

const netIncome = computed(() => totalIncome.value - totalExpenses.value)

const totalsByCategory = computed(() => {
    const result = {}
    for (const tx of transactions.value) {
        if (tx.type !== 'expense') continue
        result[tx.category] = (result[tx.category] || 0) + tx.amount
    }
    return result
})

function isWithinLastNDays(dateStr, days) {
    const now = new Date()
    const txDate = new Date(dateStr + 'T00:00:00')
    const msPerDay = 1000 * 60 * 60 * 24
    const diffDays = (now.getTime() - txDate.getTime()) / msPerDay
    return diffDays >= 0 && diffDays < days
}

const weeklyIncome = computed(() => {
    return transactions.value
        .filter(tx => tx.type === 'income' && isWithinLastNDays(tx.date, 7))
        .reduce((sum, tx) => sum + tx.amount, 0)
})

const weeklyExpenses = computed(() => {
    return transactions.value
        .filter(tx => tx.type === 'expense' && isWithinLastNDays(tx.date, 7))
        .reduce((sum, tx) => sum + tx.amount, 0)
})

const weeklyNet = computed(() => weeklyIncome.value - weeklyExpenses.value)

function addTransaction({ date, description, category, type, amount }) {
    transactions.value.push({
        id: Date.now(),
        date,
        description,
        category,
        type,
        amount
    })
}

export function useBudgetData() {
    return {
        transactions,
        totalIncome,
        totalExpenses,
        netIncome,
        totalsByCategory,
        weeklyIncome,
        weeklyExpenses,
        weeklyNet,
        addTransaction
    }
}

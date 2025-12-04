<script setup>
import { computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  labels: {
    type: Array,
    required: true
  },
  values: {
    type: Array,
    required: true
  }
})

const data = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      data: props.values,
      backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#e91e63', '#9c27b0'],
      borderWidth: 1
    }
  ]
}))

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <div class="h-56">
    <Doughnut :data="data" :options="options" />
  </div>
</template>

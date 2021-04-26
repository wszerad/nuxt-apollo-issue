<template>
  <div>
    <template v-if="weather">
      {{ weather.name }}
      {{ weather.weather.summary.description }}
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useQuery, useResult } from '@vue/apollo-composable'
import query from '../apollo/query.graphql'

export default defineComponent({
  setup () {
    const { result } = useQuery(query)
    const weather = useResult(result, null, data => data?.data.getCityByName)

    return { weather }
  }
})
</script>

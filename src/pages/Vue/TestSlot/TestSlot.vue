<template>
  <div>
    <FancyButton>
      <div>this is the content for slot</div>
    </FancyButton>
    <BaseLayout class="border-2 border-slate-800 mt-4">
      <template v-slot:header>
        <div class="border-2 border-blue-500 mt-8 w-fit">
          this is the html code for named slot header
        </div>
      </template>
      <template v-slot:footer>
        <div class="border-2 border-red-500 mt-8 w-fit">
          this is the html code for named slot footer
        </div>
      </template>
    </BaseLayout>
    <ScopedSlotTest class="border-2 border-slate-800 mt-4">
      <template v-slot:default="slotProps">
        <div class="border-2 border-green-500 mt-8 w-fit">
          {{ slotProps.text }} <br />
          {{ slotProps.count }}
        </div>
      </template>
    </ScopedSlotTest>
    <SlotListCase
      :api-url="`demo url`"
      :per-page="10"
    >
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p>by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </SlotListCase>
  </div>
</template>

<script setup lang="ts">
import FancyButton from './FancyButton.vue';
import BaseLayout from './NamedSlot/BaseLayout.vue';
import ScopedSlotTest from './ScopedSlot/ScopedSlotTest.vue';
import SlotListCase from './ListCase/SlotListCase.vue';
</script>

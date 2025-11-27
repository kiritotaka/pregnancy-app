<template>
  <div class="p-4 bg-pink-50">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="bg-white pa-3 rounded-lg shadow-md border-l-4 border-[#2196F3]"
      >
        <p class="text-gray-500">TUỔI THAI (HÔM NAY)</p>
        <p class="text-2xl font-bold text-[#2196F3]">
          {{ gestationalAge.weeks }} <span class="text-lg text-gray-500">tuần</span>
        </p>
        <p class="text-lg font-bold text-[#2196F3]">{{gestationalAge.days}} <span class="text-lg text-gray-500">ngày</span></p>
      </div>
      <div
        class="bg-white pa-3 rounded-lg shadow-md border-l-4 border-[#9C27B0]"
      >
        <p class="text-gray-500">BMI TRƯỚC THAI</p>
        <p class="text-2xl font-bold text-[#9C27B0]">{{prePregnancyBmi.toFixed(0)}}</p>
      </div>
      <div
        class="bg-white pa-3 rounded-lg shadow-md border-l-4 border-[#E91E63]"
      >
        <p class="text-gray-500">TỔNG TĂNG CÂN</p>
        <p class="text-2xl font-bold text-[#E91E63]">
          +5 <span class="text-lg text-gray-500">kg</span>
        </p>
      </div>
      <div
        class="bg-white pa-3 rounded-lg shadow-md border-l-4 border-[#4CAF50]"
      >
        <p class="text-gray-500">MỤC TIÊU CẢ THAI KỲ</p>
        <p class="text-2xl font-bold text-[#4CAF50]">
          11.5-16 <span class="text-lg text-gray-500">kg</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useBaseStore } from "../../../stores/baseStore";
import { calculateBMI, calculateGestationalAge } from "../../../utils/calculation";
import moment from 'moment'
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useBaseStore, ["userData"]),
    gestationalAge() {
      const dueDate = moment.unix(this.userData.estimatedDueDate.seconds);
      const today = moment();

      // Giả sử thai kỳ kéo dài 40 tuần (280 ngày).
      const remainingDays = dueDate.diff(today, "days");
      return calculateGestationalAge(remainingDays);
    },
    prePregnancyBmi(){
        return calculateBMI(this.userData.prePregnancyWeight, this.userData.height)
    }
  },
};
</script>

<style>
</style>
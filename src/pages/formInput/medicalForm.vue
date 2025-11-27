<template>
  <v-container class="bg-pink-50 p-4">
    <div class="text-center mb-4">
      <p class="text-lg">
        Vui lòng nhập thông tin chính xác để tính toán lộ trình tăng cân
      </p>
    </div>
    <v-form>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Tài khoản (User)"
            v-model="formData.user"
            readonly
            variant="outlined"
            density="compact"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Họ và tên"
            v-model="formData.name"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Ngày sinh"
            v-model="formData.dob"
            type="date"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Chiều cao (cm)"
            v-model="formData.height"
            type="number"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Cân nặng trước thai (kg)"
            v-model="formData.prePregnancyWeight"
            type="number"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Ngày dự sinh"
            v-model="formData.dueDate"
            type="date"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Tuổi thai (Tuần)"
            v-model="formData.gestationalAgeWeeks"
            type="number"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            label="Ngày lẻ"
            v-model="formData.gestationalAgeDays"
            type="number"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="PARA (Tiền sử thai sản)"
            v-model="formData.para"
            placeholder="VD: 1001"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Tiền sử Dị ứng (Nếu có)"
            v-model="formData.allergies"
            placeholder="VD: Dị ứng hải sản, Penicillin..."
            variant="filled"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Tiền sử bệnh lý khác / Thuốc đang dùng"
            v-model="formData.medicalHistory"
            variant="outlined"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <h3 class="text-lg font-semibold">Cập nhật hiện tại</h3>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Cân nặng hiện tại (kg)"
            v-model="formData.currentWeight"
            placeholder="VD: 55"
            type="number"
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            label="Ghi chú hôm nay / Triệu chứng"
            v-model="formData.notes"
            variant="outlined"
          ></v-textarea>
        </v-col>
        <v-col cols="12">
          <p>Chọn nhanh triệu chứng:</p>
          <v-chip-group v-model="formData.symptoms" multiple>
            <v-chip>Mệt mỏi</v-chip>
            <v-chip>Đau lưng</v-chip>
            <v-chip>Phù chân</v-chip>
            <v-chip>Chuột rút</v-chip>
            <v-chip>Đau đầu</v-chip>
            <v-chip>Ra máu</v-chip>
            <v-chip>Cơn gò</v-chip>
          </v-chip-group>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="formData.abnormal"
            label="Đánh dấu bất thường (Lưu ý)"
          ></v-checkbox>
        </v-col>
        <v-col cols="12">
          <v-file-input
            label="Hình ảnh (nếu có)"
            prepend-icon="mdi-camera"
            variant="outlined"
          ></v-file-input>
        </v-col>
        <v-col cols="12">
          <v-btn color="pink" block size="large" @click="submitForm"
            >Lưu Hồ Sơ & Bắt Đầu</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        user: "123",
        name: "",
        dob: "",
        height: 160,
        prePregnancyWeight: 50,
        dueDate: "",
        gestationalAgeWeeks: "",
        gestationalAgeDays: "",
        para: "",
        allergies: "",
        medicalHistory: "",
        currentWeight: 55,
        notes: "",
        symptoms: [],
        abnormal: false,
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.formData);
      // Handle form submission
    },
  },
};
</script>

<style>
</style>
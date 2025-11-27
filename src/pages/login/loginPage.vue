<template>
  <v-container class="bg-pink-50 fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 rounded-lg">
          <v-card-text class="pa-8">
            <h2 class="text-center text-h5 mb-6" style="color: #e91e63">
              Đăng Nhập
            </h2>
            <v-form
              ref="form"
              v-model="valid"
              class="mx-auto max-w-xl"
              @submit.prevent="submit"
            >
              <v-text-field
                label="Tên đăng nhập (Email)"
                v-model="useName"
                variant="outlined"
                prepend-inner-icon="mdi:mdi-account"
                required
                density="compact"
                :rules="rulesUserName"
                class="rounded-lg"
              ></v-text-field>

              <v-text-field
                label="Mật khẩu"
                v-model="passWord"
                :rules="rulesPassWord"
                variant="outlined"
                density="compact"
                class="rounded-lg"
                prepend-inner-icon="mdi:mdi-lock"
                :type="visible ? 'text' : 'password'"
              >
                <template v-slot:append-inner>
                  <button type="button" @click="visible = !visible">
                    <i v-if="visible" class="far fa-eye eyes-button-custom"></i>
                    <i
                      v-if="!visible"
                      class="far fa-eye-slash eyes-button-custom"
                    ></i>
                  </button> </template
              ></v-text-field>

              <v-btn
                type="submit"
                color="pink"
                block
                size="large"
                class="text-white"
                @click="submit"
              >
                Đăng Nhập
              </v-btn>

              <div class="text-center mt-6">
                Chưa có tài khoản?
                <router-link
                  :to="'/register'"
                  class="text-pink-darken-1 font-bold"
                  >Đăng ký</router-link
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "pinia";
import { useBaseStore } from "../../stores/baseStore";
import { auth } from "../../firebase";
export default {
  name: "LoginPage",
  data() {
    return {
      visible: false,
      valid: false,
      useName: null,
      rulesUserName: [
        (value) => {
          if (value) return true;
          return "Vui lòng nhập tên đăng nhập";
        },
      ],
      passWord: null,
      rulesPassWord: [
        (value) => {
          if (value) return true;
          return "Vui lòng nhập mật khẩu";
        },
      ],
    };
  },
  methods: {
    ...mapActions(useBaseStore, ["loginAction", "getUserData"]),
    async submit(e) {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.loginAction(
          auth,
          this.useName + "@mamanote.app",
          this.passWord
        ).then((resp) => {
          if (resp) {
            localStorage.setItem("isLogined", "true");
            this.getUserData(resp?.user?.uid).then((resp) => {
              if (resp?.hasCompletedInitialSetup) {
                this.$router.push({ path: "/dashboard" });
              } else {
                this.$router.push({ path: "/form-input" });
              }
            });
          }
        });
      }
    },
  },
};
</script>

<style>
</style>
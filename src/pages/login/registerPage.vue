<template>
  <v-container class="bg-pink-50 fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 rounded-lg">
          <v-card-text class="pa-8">
            <h2 class="text-center text-h5 mb-6 text-[#e91e63]">
              Đăng Ký Tài Khoản
            </h2>
            <v-form
              ref="form"
              v-model="valid"
              class="mx-auto max-w-xl"
              @submit.prevent="register"
            >
              <v-text-field
                label="Tên đăng nhập"
                v-model="email"
                variant="outlined"
                prepend-inner-icon="mdi:mdi-account"
                :rules="rulesUserName"
                density="compact"
              ></v-text-field>

              <v-text-field
                label="Mật khẩu"
                v-model="password"
                variant="outlined"
                density="compact"
                prepend-inner-icon="mdi:mdi-lock"
                :type="visible ? 'text' : 'password'"
                @click:append-inner="showPassword = !showPassword"
                :rules="rulesPassWord"
                ><template v-slot:append-inner>
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
                @click="register"
              >
                Đăng Ký Ngay
              </v-btn>

              <div class="text-center mt-6">
                Đã có tài khoản? 
                <router-link :to="'/login'" class="text-pink-darken-1 font-bold"
                  >Đăng nhập</router-link
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
import { defineComponent } from "vue";
import { auth } from "../../firebase";
import { useBaseStore } from "../../stores/baseStore";
export default defineComponent({
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      visible: false,
      rememberMe: false,
      showPassword: false,
      loading: false,
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
    ...mapActions(useBaseStore, ["registerAction", "getUserData"]),
    async register() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.registerAction(
          auth,
          this.email + "@mamanote.app",
          this.password
        ).then((resp) => {
          if (resp) {
            localStorage.setItem("isLogined", "true");
            this.getUserData(resp?.user?.uid).then((resp) => {
              this.$router.push({ path: "/form-input" });
            });
          }
        });
      }
    },
  },
});
</script>
  
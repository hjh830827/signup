<template>
  <div class="join_content">
    <h1>회원가입 - 부가정보</h1>
    <!-- 아이디, 비밀번호 입력 -->
    <div class="row_group">
      <div class="join_row">
        <h3 class="join_title">아이디</h3>
        <span class="ps_box">
          <input class="int" v-model="signup.id" type="text" maxlength="20" />
        </span>
        <span class="error_next_box" v-if="!idValid">필수 정보입니다.</span>
      </div>

      <div class="join_row">
        <h3 class="join_title">비밀번호</h3>
        <span class="ps_box">
          <input
            class="int"
            v-model="signup.password"
            type="password"
            maxlength="16"
            @blur="passwordValid"
          />
        </span>
        <span class="error_next_box" v-if="!passwordValidFlag"
          >유효하지 않은 비밀번호 입니다.</span
        >

        <h3 class="join_title">비밀번호 재확인</h3>
        <span class="ps_box">
          <input
            class="int"
            v-model="passwordCheck"
            type="password"
            maxlength="16"
            @blur="passwordCheckValid"
          />
        </span>
        <span class="error_next_box" v-if="!passwordCheckFlag"
          >비밀번호가 동일하지 않습니다.</span
        >

        <h3 class="join_title">비밀번호 힌트</h3>
        <select class="sel" v-model="signup.pwhint" size="1">
          <option value="">
            선택하세요
          </option>
          <option
            v-for="(item, index) in pwhintList"
            :key="index"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>

        <h3 class="join_title">답변</h3>
        <span class="ps_box">
          <input class="int" v-model="signup.pwhintans" />
        </span>
      </div>
    </div>
    <!-- // 아이디, 비밀번호 입력 -->
    <div class="btn_area">
      <button
        type="button"
        class="btn_type btn_primary"
        :disabled="nextPageDisabledFlag"
        @click="goNextPage"
      >
        <span>다음 페이지</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signup: {
        id: null,
        password: null,
        pwhint: "",
        pwhintans: null,
      },
      passwordCheck: null,
      pwhintList: [
        {
          value: 1,
          text: "졸업한 초등학교 이름은?",
        },
        {
          value: 2,
          text: "아버지 성함은?",
        },
        {
          value: 3,
          text: "어머니 성함은?",
        },
        {
          value: 4,
          text: "어릴 적 내 별명은?",
        },
        {
          value: 5,
          text: "좋좋아하는 색깔은?",
        },
      ],
      passwordValidFlag: true,
      passwordCheckFlag: true,
    };
  },
  computed: {
    idValid() {
      return /^[A-Za-z0-9]+$/.test(this.signup.id);
    },
    nextPageDisabledFlag() {
      if (
        this.isEmpty(this.signup.id) ||
        this.isEmpty(this.signup.password) ||
        this.isEmpty(this.signup.pwhint) ||
        this.isEmpty(this.signup.pwhintans) ||
        this.isEmpty(this.passwordCheck)
      ) {
        return true;
      }
      if (!this.idValid || !this.passwordValidFlag || !this.passwordCheckFlag) {
        return true;
      }
      return false;
    },
  },
  created() {},
  methods: {
    // 데이터 empty 체크
    isEmpty(data) {
      if (data === "" || data === null || data === undefined) {
        return true;
      } else {
        return false;
      }
    },
    // 비밀번호 유효성 체크
    passwordValid() {
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.password)
      ) {
        this.passwordValidFlag = true;
      } else {
        this.passwordValidFlag = false;
      }
    },
    // 비밀번호 동일 여부 체크
    passwordCheckValid() {
      if (this.signup.password === this.passwordCheck) {
        this.passwordCheckFlag = true;
      } else {
        this.passwordCheckFlag = false;
      }
    },
    // step2 이동
    goNextPage() {
      this.$router.push({ name: "signup2", params: { signup: this.signup } });
    },
  },
};
</script>

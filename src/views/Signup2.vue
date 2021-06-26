<template>
  <div class="join_content">
    <h1>회원가입 - STEP 2</h1>
    <!-- 아이디, 비밀번호 입력 -->
    <div class="row_group">
      <div class="join_row">
        <h3 class="join_title">이메일</h3>
        <span class="ps_box">
          <input class="int" v-model="email" type="text" maxlength="20" />
        </span>
        <select name="emailaddr">
          <option value="">
            직접입력
          </option>
          <option value="daum.net">
            daum.net
          </option>
          <option value="empal.com">
            empal.com
          </option>
          <option value="gmail.com">
            gmail.com
          </option>
          <option value="hanmail.net">
            hanmail.net
          </option>
          <option value="msn.com">
            msn.com
          </option>
          <option value="naver.com">
            naver.com
          </option>
          <option value="nate.com">
            nate.com
          </option>
        </select>
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
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  props: {
    signup: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      test: "",
      onlyNum: "",
      signupTest: {},
      email: "",
    };
  },
  computed: {
    computeOnlyNum() {
      if (this.person.age > 18) {
        return "Adult";
      } else {
        return "Minor";
      }
      // this.onlyNum = this.onlyNum.replace(/[^0-9]/g, '')
    },
    nextPageDisabledFlag() {
      let flag = true;
      if (this.email !== "") {
        flag = false;
      }
      return flag;
    },
  },
  watch: {
    onlyNum() {
      this.onlyNum = this.onlyNum.replace(/[^0-9]/g, "");
    },
  },
  created() {
    console.log(this.$store.state.todos.list[0]);
  },
  mounted() {
    // this.test = this.$store.state.todos.list[0].text
  },
  methods: {
    goNextPage() {
      console.log("=====================");
      console.log(this.items);
      // this.$router.push({ name: 'signup2', params: { signup: this.signup } })
    },
  },
};
</script>

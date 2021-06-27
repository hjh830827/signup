<template>
  <div class="join_content">
    <h1>회원가입 - 개인정보</h1>
    <div class="row_group">
      <div class="join_row">
        <h3 class="join_title">이름</h3>
        <span class="ps_box box_right_space">
          <input
            class="int"
            v-model="signup.name"
            type="text"
            placeholder="이름을 입력해주세요"
            maxlength="20"
          />
        </span>
        <span class="error_next_box" v-if="checkFlag && !signup.name"
          >이름을 입력하세요</span
        >
      </div>

      <div class="join_row join_birthday">
        <h3 class="join_title">생년월일</h3>
        <div class="bir_wrap">
          <div class="bir_yy">
            <span class="ps_box">
              <input
                v-model="signup.yyyy"
                type="text"
                placeholder="년(4자)"
                class="int"
                maxlength="4"
                oninput="javascript: this.value = this.value.replace(/[^0-9]/g, '');"
              />
            </span>
          </div>
          <div class="bir_mm">
            <span class="ps_box">
              <select id="mm" class="sel" v-model="signup.mm">
                <option value="">월</option>
                <option
                  v-for="(item, index) in mmlist"
                  :key="index"
                  :value="item.value"
                >
                  {{ item.text }}
                </option>
              </select>
            </span>
          </div>
          <div class=" bir_dd">
            <span class="ps_box">
              <input
                v-model="signup.dd"
                placeholder="일"
                type="text"
                class="int"
                maxlength="2"
              />
            </span>
          </div>
        </div>
        <span
          class="error_next_box"
          v-if="checkFlag && (!signup.yyyy || !signup.mm || !signup.dd)"
          >생년월일을 입력하세요</span
        >
      </div>

      <div class="join_row join_sex">
        <h3 class="join_title">성별</h3>
        <span class="ps_box gender_code">
          <select class="sel" v-model="signup.gender">
            <option value="">성별</option>
            <option
              v-for="(item, index) in genderList"
              :key="index"
              :value="item.value"
            >
              {{ item.text }}
            </option>
          </select>
        </span>
        <span class="error_next_box" v-if="checkFlag && !signup.gender"
          >성별을 선택하세요</span
        >
      </div>

      <span
        class="error_next_box"
        id="genderMsg"
        style="display:none"
        aria-live="assertive"
      ></span>

      <div class="join_row join_email">
        <h3 class="join_title">
          <label for="email">이메일<span class="terms_choice"></span></label>
        </h3>
        <span class="ps_box int_email box_right_space">
          <input
            type="text"
            v-model="signup.email"
            placeholder="이메일을 입력해주세요"
            class="int"
            maxlength="100"
          />
        </span>
        <span class="error_next_box" v-if="checkFlag && !signup.email"
          >이메일을 입력해주세요</span
        >
      </div>

      <div class="join_row">
        <h3 class="join_title">주소</h3>
        <span class="ps_box box_right_space">
          <input
            type="text"
            class="int"
            v-model="signup.address"
            placeholder="주소를 입력해주세요"
          />
        </span>
        <span class="error_next_box" v-if="checkFlag && !signup.address"
          >주소를 입력해주세요</span
        >
      </div>
      <div class="join_row">
        <h3 class="join_title">휴대폰번호</h3>
        <span class="ps_box box_right_space">
          <input
            class="int"
            v-model="signup.phoneNum"
            type="text"
            placeholder="휴대폰 번호를 입력해주세요"
          />
        </span>
        <span class="error_next_box" v-if="checkFlag && !signup.phoneNum"
          >휴대폰 번호를 입력해주세요</span
        >
      </div>
    </div>
    <div class="btn_area">
      <button type="button" class="btn_type btn_primary" @click="goNextPage">
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
    propSignup: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      checkFlag: false,
      signup: {
        // id: this.propSignup.id,
        // password: this.propSignup.password,
        // pwhint: this.propSignup.pwhint,
        // pwhintans: this.propSignup.pwhintans,

        name: null,
        yyyy: null,
        mm: "",
        dd: null,
        gender: "",
      },
      genderList: [
        {
          value: "M",
          text: "남성",
        },
        {
          value: "F",
          text: "여성",
        },
      ],
      mmlist: [],
    };
  },
  computed: {
    idValid() {
      return /^[A-Za-z0-9]+$/.test(this.email);
    },
    computeOnlyNum() {
      if (this.person.age > 18) {
        return "Adult";
      } else {
        return "Minor";
      }
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
    // console.log(this.$store.state.todos.list[0]);
    for (let i = 1; i < 13; i++) {
      this.mmlist.push({
        value: i,
        text: i,
      });
    }
  },
  mounted() {
    // this.test = this.$store.state.todos.list[0].text
  },
  methods: {
    goNextPage() {
      console.log("=====================");
      console.log(this.signup);
      this.checkFlag = true;
      // this.$router.push({ name: 'signup2', params: { signup: this.signup } })
    },
  },
};
</script>

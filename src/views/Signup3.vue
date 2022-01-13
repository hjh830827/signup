<template>
  <div class="join_content">
    <h1>회원가입 - 부가정보</h1>
    <!-- 아이디, 비밀번호 입력 -->
    <div class="row_group">
      <div class="join_row">
        <h3 class="join_title">직업</h3>
        <select class="sel" v-model="job" size="1">
          <option value="">
            선택하세요
          </option>
          <option
            v-for="(item, index) in jobList"
            :key="index"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
      <div class="join_row">
        <h3 class="join_title">가입경로</h3>
        <select class="sel" v-model="location" size="1">
          <option value="">
            선택하세요
          </option>
          <option
            v-for="(item, index) in locationList"
            :key="index"
            :value="item.value"
          >
            {{ item.text }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: "",
      location: "",
      jobList: [
        {
          value: 1,
          text: "학생",
        },
      ],
      locationList: [
        {
          value: 1,
          text: "인터넷",
        },
      ],
    };
  },
  computed: {},
  created() {},
  methods: {},
};
</script>

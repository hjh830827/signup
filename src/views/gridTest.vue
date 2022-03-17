<template>
  <div class="join_content">
    <h1>여러가지 테스트</h1>
    <!-- 아이디, 비밀번호 입력 -->
    <div class="row_group">
      <div class="join_row">
        <table id="list">
          <tbody id="contacts">
            <tr v-for="index in 3" :key="index">
              <td v-if="index === 1">구분</td>
              <td v-if="index === 2">미분양</td>
              <td v-if="index === 3">변동률(%)</td>
              <td v-for="(item, index2) in testList.data" :key="index2">
                {{
                  index === 1
                    ? item.날짜
                    : index === 2
                    ? item.미분양
                    : item.변동률
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- // 아이디, 비밀번호 입력 -->
    <div class="btn_area">
      <button type="button" class="btn_type btn_primary" @click="goNextPage">
        <span>다음 페이지</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testList: {
        data: [
          {
            날짜: 201101,
            미분양: 1111,
            증감: null,
            변동률: 0.02,
          },
          {
            날짜: 201102,
            미분양: 2222,
            증감: 1111,
            변동률: 0.5,
          },
          {
            날짜: 201103,
            미분양: 1111,
            증감: -1111,
            변동률: -0.5,
          },
        ],
      },
      dataList: [
        { 지역명: "전국", list: [11, 22] },
        { 지역명: "서울", list: [33, 44] },
        { 지역명: "부산", list: [55, 66] },
      ],
    };
  },
  created() {
    console.log("created==============");
    console.log(this.dataList);
    let test = this.dataList;

    let aaa = test.map((obj) => [...[obj.지역명], ...obj.list]);
    console.log(aaa);
    // test.reduce((acc, obj) => console.log(acc + " : " + obj));
    // test.reduce(function(acc, obj) {
    //   console.log("============");
    //   console.log("acc", acc);
    //   console.log("obj", obj);
    //   acc.push(obj.list);
    //   return acc;
    // });
  },
  methods: {
    goNextPage() {
      let test = ["20220101", "20220201"];
      const test2 = [
        ...["지역명"],
        ...test.map((item) => this.$moment(item).format("YYYY.MM")),
      ];
      console.log("test2 :", test2);
      let array = [];
      for (let i = 0; i < 5; i++) {
        console.log("i :", i);
        array.push(i);
      }
      console.log("array :", array);
    },
  },
};
</script>

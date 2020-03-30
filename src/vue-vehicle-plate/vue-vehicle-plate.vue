<template>
  <div class="pop-container">
    <div class="pop-wrap">
      <div class="ipt-wrap">
        <div class="ipt-title">请输入车牌号</div>
        <div class="ipt-list">
          <div
            v-for="item in inputAreaList"
            :key="item.index"
            :class="[
              item.index === -1 ? 'ipt-split' : 'ipt-num',
              activeIndex === item.index ? ' active' : '',
              item.index === 7 ? ' addition-num' : ''
            ]"
            @click="handleChooseIpt(item.index)"
          >
            <div v-if="plateNum[item.index]">{{ plateNum[item.index] }}</div>
            <div
              v-if="item.index === 7 && (plateNum[7] === ' ' || !plateNum[7])"
              class="addition-preview"
            >
              <span>新能源</span>
            </div>
          </div>
        </div>
      </div>
      <div class="confirm-wrap">
        <button
          type="button"
          class="confirm-btn"
          :disabled="!canSubmit"
          @click="confirm"
        >
          确定
        </button>
      </div>
      <div class="keyboard-container" v-if="showKeyboard">
        <div class="keyborad-wrap">
          <div
            v-for="item in iptKeyList"
            :key="item.key"
            :class="[item.disabled ? 'disabled' : '']"
            @click="handleInput(item.key, item.disabled)"
          >
            <span>{{ item.key }}</span>
            <div
              v-if="showAdditionList && item.key === '字'"
              class="addtion-list"
            >
              <div
                v-for="item in additionKeyList"
                :key="item"
                @click="handleInput(item)"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="gray-key del" data-key="del" @click="handleRemove">
            <div class="del-img">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAqBAMAAAAUtoW9AAAAMFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlTPQ5AAAAD3RSTlMA6y8RB7yol87aIURf9oCspPo+AAABKElEQVQ4y42UsU4CQRCGL2AwgcSCWJocV9jTYWJDQ2KrsT8KShIo6C14AAoeAC1tfAWoeQMqnsECkETzy+wwewsHf5hiZ7Pf/bO3szMbRWZfzwhs0W1GmTWWOLS7jJUnOLaBhx85hk0g3M7DXR57wGw//wyjOKvEuNVZcZIFMZviVycPQP8YlrBW4SgvjCrYOv8EtHOwiD9xV6lFeNH1+7qMgIwtoKNbf9fEFeKhhzvhSo+YoiouwcrDEvCq4RKItBDrNw72TLhf1k8UXnuhrpvQwTf81A0KMKHAG2CYHW5HTChwGgid1IQCU4zDvCQwocAl3i+FNCz7IXoUlgSaPpp4emX0smmZHJpCX2CnoNT02dLkRU3bgTcSbUHevLTt+YNBn5qTj9Q/+cdgxoiYpkoAAAAASUVORK5CYII="
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ProvinceList = "京津沪渝晋蒙吉黑苏浙皖闽赣鲁豫鄂湘粤桂琼川云藏青宁新港澳台甘辽冀贵陕".split(
  ""
);
const NumberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const LetterList = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const AdditionKeyList = "学挂警".split(""); // 可选中文字符（倒数第二位）
/** 标识输入框的位数
 * @param type {number} 键盘类型
 * 1：省份输入。键盘：省份简称。
 * 2：区号输入。键盘：数字+字母。数字和I不可选
 * 3：序号选择。键盘：数字+字母。I、O不可选
 * 4：特殊位数。键盘：数字+字母+特殊字符（'字'切换显示'学挂警'按钮）。I、O不可选
 * 5：新能源标识位。键盘：数字+字母。I、O不可选
 */
const InputAreaList = [
  { index: 0, type: 1 },
  { index: 1, type: 2 },
  { index: -1 }, // 分割点，例如：川A·12345
  { index: 2, type: 3 },
  { index: 3, type: 3 },
  { index: 4, type: 3 },
  { index: 5, type: 3 },
  { index: 6, type: 4 },
  { index: 7, type: 5 }
];

export default {
  name: "vue-car-plate",
  props: {
    initValue: {
      type: String,
      default: ""
    },
    limitProvince: {
      type: String,
      default: ""
    }, // 限制省份列表, 不用间隔
    limitCity: {
      type: String,
      default: ""
    }, // 限制城市列表， 不用间隔
    checkKeyBoardMap: Function // 更新键盘时，验证按键列表的数据，return iptKeyList
  },
  data() {
    return {
      plateNum: "",
      canSubmit: false,
      showKeyboard: false,
      iptKeyList: [],
      activeIndex: -1, // 输入进程,不同的进程显示不同的键盘布局和功能.输入第一位字符为0，第二位字符为1
      inputAreaList: InputAreaList,
      additionKeyList: AdditionKeyList,
      showAdditionList: false
    };
  },
  mounted() {
    let plateNum = this.initValue;
    // 目前只做前两位校验，如果不合法，置为空
    if (plateNum[0] && this.checkProvinceDisabled(plateNum[0])) {
      plateNum = "";
    }
    if (plateNum[1] && this.checkCityDisabled(plateNum[1])) {
      plateNum = plateNum[0];
    }
    plateNum = plateNum.replace(/(·|\s*)/g, "").toUpperCase();
    this.plateNum = plateNum;
    this.activeIndex = !plateNum.length
      ? 0
      : plateNum.length > 7
      ? 7
      : plateNum.length === 7
      ? 6
      : plateNum.length;
  },
  methods: {
    confirm() {
      const plateNum = this.plateNum.replace(/\s*/g, "");
      this.$emit("confirm", {
        plateNum,
        plateNumFor: plateNum.slice(0, 2) + "·" + plateNum.slice(2),
        isNewEnergy: plateNum.length === 8,
        isProvincialCity: plateNum[1] === "A",
        province: plateNum[0]
      });
    },
    /**
     * 替换字符串中某个下标上字符的的内容
     * @param {string} str 被替换的字符串
     * @param {number} index 替换的下标
     * @param {string} key 替换的字符
     */
    replaceIndexChar(str, index, key) {
      return (
        str.slice(0, index) +
        (key !== undefined ? key : " ") +
        str.slice(index + 1)
      );
    },
    /** 删除按钮 */
    handleRemove() {
      const process = this.activeIndex;
      let plateNum = this.plateNum;
      // 如果位置上有值先删除
      if (plateNum[process] && plateNum[process] !== " ") {
        plateNum = this.replaceIndexChar(plateNum, process);
        this.plateNum = plateNum;
        return;
      }
      if (process === 7) {
        return;
      }
      //位置上没有值，光标回到上一个输入框，并删除上一个输入框的值
      const index = process - 1 > -1 ? process - 1 : 0;
      plateNum = this.replaceIndexChar(plateNum, index);
      this.plateNum = plateNum;
      this.activeIndex = index;
    },
    /** 用户输入 */
    handleInput(key, disabled) {
      if (disabled) {
        return;
      }

      // 输入第7位字符时（倒数第二位）,点击‘字’切换显示‘学挂警’字符按钮
      if (key === "字") {
        this.showAdditionList = !this.showAdditionList;
        return;
      }

      const process = this.activeIndex;
      let plateNum = this.plateNum;
      plateNum = this.replaceIndexChar(plateNum, process, key);
      let activeIndex =
        process === 7
          ? 7
          : process + 1 > 6
          ? 6
          : plateNum[process + 1] && plateNum[process + 1] !== " "
          ? process
          : process + 1;

      this.plateNum = plateNum;
      this.activeIndex = activeIndex;
    },
    /** 选择输入框 */
    handleChooseIpt(_index) {
      const index = _index;
      if (!this.plateNum[index - 1 > -1 ? index - 1 : 0]) {
        return;
      }
      this.showKeyboard = true;
      this.activeIndex = Number(index);
    },
    // 验证省份是否合法
    checkProvinceDisabled(str) {
      const keyboardList = ProvinceList;
      let limitProvince = this.limitProvince.split("");
      limitProvince = limitProvince.length > 0 ? limitProvince : keyboardList;
      return limitProvince.findIndex(i => i === str) === -1;
    },
    checkCityDisabled(str) {
      const keyboardList = NumberList.concat(LetterList);
      let limitCity = this.limitCity.split("");
      limitCity = limitCity.length > 0 ? limitCity : keyboardList;
      return (
        typeof str === "number" ||
        str === "I" ||
        limitCity.findIndex(i => i === str) === -1
      );
    },
    // 根据activeIndex的值（输入进程）来判断键盘的布局和按键禁用
    getKeyBoardList() {
      const process = this.activeIndex;
      if (process < 0) {
        return;
      }
      const keyboardType = InputAreaList.find(e => e.index === process).type;

      this.showKeyboard = !!keyboardType;

      /** 第1位 省份选择 只有省份简称列表可选 */
      if (keyboardType === 1) {
        return {
          iptKeyList: ProvinceList.map(e => ({
            key: e,
            disabled: this.checkProvinceDisabled(e)
          }))
        };
      }

      /** 第2位 区号选择 英文字母+数字 数字和I不可选 */
      if (keyboardType === 2) {
        return {
          iptKeyList: NumberList.concat(LetterList).map(e => ({
            key: e,
            disabled: this.checkCityDisabled(e)
          }))
        };
      }

      /** 第3-6位 序号选择 英文字母+数字 I、O不可选 */
      if (keyboardType === 3) {
        return {
          iptKeyList: NumberList.concat(LetterList).map(e => ({
            key: e,
            disabled: e === "I" || e === "O"
          }))
        };
      }

      /** 第7位 序号选择 英文字母+数字+特殊字符切换（'学挂警'） I、O不可选 */
      if (keyboardType === 4) {
        let iptKeyList = NumberList.concat(LetterList);
        // 第三排最后一个字符插入'字',点击之后弹出'学挂警'三个可选字符按钮
        iptKeyList.splice(29, 0, "字");

        return {
          iptKeyList: iptKeyList.map(e => ({
            key: e,
            disabled: e === "I" || e === "O"
          })),
          showAdditionList: false
        };
      }

      /** 第8位 新能源车最后一位选择 英文字母+数字 I、O不可选 */
      if (keyboardType === 5) {
        return {
          iptKeyList: NumberList.concat(LetterList).map(e => ({
            key: e,
            disabled: e === "I" || e === "O"
          }))
        };
      }
    }
  },
  watch: {
    activeIndex: function() {
      let { iptKeyList, showAdditionList } = this.getKeyBoardList();
      if (this.checkKeyBoardMap) {
        iptKeyList = this.checkKeyBoardMap(iptKeyList, this.plateNum, this.activeIndex);
      }
      this.iptKeyList = iptKeyList;
      this.showAdditionList = !!showAdditionList;
    },
    plateNum: function() {
      const plateNum = this.plateNum;
      this.canSubmit =
        !/\S+\s+\S+/.test(plateNum) && plateNum.replace(/\s*/g, "").length >= 7;
    }
  }
};
</script>

<style lang="less" scoped>
@input-color: #9b9b9b;
@input-active-color: #4c88ff;
@input-addition-active-color: #30cd30;
@disabled-color: #e1e0e0;
@padding-rows: 2vw;
@btn-color: #007fff;

.pop-container {
  width: 100%;
  max-height: 80vh;
  min-height: 60vh;
  overflow-x: hidden;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.15), 0 -4px 12px rgba(0, 0, 0, 0.1);
}
.pop-wrap {
  position: relative;
  width: 100%;
  background-color: #f6f6f6;
  box-sizing: border-box;
  .ipt-wrap {
    padding: 4vw @padding-rows;
    background-color: #fff;

    .ipt-title {
      color: #444444;
      font-size: 4vw;
      line-height: 6vw;
    }

    .ipt-list {
      margin-top: 4vw;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        flex: none;
      }

      .ipt-num {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 9.2vw;
        height: 13vw;
        border-radius: 1.2vw;
        font-size: 6.5vw;
        color: rgba(0, 0, 0, 1);
        line-height: 12vw;
        box-sizing: border-box;
        border: 1px solid @input-color;

        .preview(@color) {
          border-color: @color;

          .addition-preview {
            position: relative;
            display: flex;
            align-items: center;
            flex-direction: column;
            color: @color;
            white-space: nowrap;
            span {
              transform: scale(0.5);
              margin-bottom: 1.5vw;
              font-size: 5vw;
              line-height: 5vw;
            }

            &::before {
              content: "+";
              font-size: 8vw;
              line-height: 7vw;
            }
          }
        }

        &.active {
          border-color: @input-active-color;
        }

        &.addition-num {
          border-style: dashed;

          .preview(@input-color);

          &.active {
            .preview(@input-addition-active-color);
          }
        }
      }

      .ipt-split {
        width: 2vw;
        height: 2vw;
        background: #b3b3b3;
        border-radius: 100%;
      }
    }
  }

  .confirm-wrap {
    margin: 10vw @padding-rows;
    .confirm-btn {
      display: block;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: @padding-rows;
      font-size: 5vw;
      background-color: @btn-color;
      color: #fff;
      box-sizing: border-box;
      border-width: 0;
      box-shadow: none;
      user-select: none;
      border-radius: 0;
      outline: none;
      -webkit-appearance: none;
      &:disabled {
        background-color: rgba(@btn-color, 0.5);
      }
    }
  }

  .keyboard-container {
    min-height: 28.41vh;
  }
  .keyborad-wrap {
    padding: 1.2vw 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #e8e8e8;

    @key-width: 8vw;
    @key-height: 10vw;
    @key-space: 1vw;

    .key-style () {
      position: relative;
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1vw @key-space;
      color: #111;
      width: @key-width;
      height: @key-height;
      font-size: 5vw;
      background-color: #ffffff;
      box-shadow: 0px 0.2vw 0px 0px rgba(0, 0, 0, 0.25);
      border-radius: 0.8vw;
      user-select: none;

      &.disabled {
        color: @disabled-color;
      }
    }

    > div {
      .key-style;

      &.del {
        width: 14vw;
        height: 10vw;
        background: #d5d5d5;

        .del-img {
          width: 7vw;
          height: 5vw;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }

      .addtion-list {
        position: absolute;
        top: 0;
        right: 100%;
        transform: translateX(-@key-space);
        display: flex;
        align-items: center;

        > div {
          .key-style;
          margin-top: 0;
        }
      }
    }
  }
}
</style>

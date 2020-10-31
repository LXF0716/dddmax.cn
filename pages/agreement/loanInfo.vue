<template>
  <div class="wrap">
    <view class="title">贷款对象</view>
    <p>1. 小微企业的划分标准，按《统计上大中小微企业划分办法（2017）》（国统字〔2017〕213号）规定执行。</p>
    <p>2.年内新招用符合创业担保贷款申请条件的人员数量达到企业现有在职职工人数15%（超过100人的企业达到8%）、并与其签订1年以上劳动合同；或1年内企业稳定就业岗位达到95%以上的小微企业。</p>
    <view class="title">贷款额度</view>
    <p>最高不超过600万</p>
    <view class="title">贷款额期限</view>
    <p>最高不超过2年</p>
    <view class="title">贷款贴息</view>
    <p>2020年12月31日前，新签订借款合同的小微企业创业担保贷款，额度在300万元以内的，按照贷款合同签订日LPR的50%进行贴息；自2021年1月1日起，新签订借款合同的小微企业创业担保贷款，额度300万元以内的贴息利率上限参照个人创业担保贷款贴息利率执行，一年期LPR-150BP至贴息利率上限范围内的由财政给予贴息，剩余部分由借款企业承担。</p>
    <view class="title">申请材料（经办机构留存复印件）</view>
    <ul class="menus-ul">
      <li>法定代表人身份证或社保卡（高层次人才、高技能人才创业项目需提供法人或占股30%以上股东的相关证书或表彰）。</li>
      <li>企业营业执照、相关部门颁发有法律效力的经营许可证等。</li>
      <li>市场监督管理部门备案的企业章程。</li>
      <li>与1年内新吸纳安置人员签订的劳动合同，申请当月或上月银行发放工资流水记录和企业上年同期工资发放凭证（按照“1年内企业稳定就业岗位达到95%以上”条件申请的小微企业同等执行）。</li>
      <li>上年度及申请当月或上月的资产负债表、利润表（新成立的企业提供当月的资产负债表）。</li>
      <li>化解过剩产能企业职工和失业人员</li>
    </ul>
    <view class="agreement">
      <u-checkbox v-model="model.check" @change="checkboxChange"></u-checkbox>
      <text class="agreement-text" @click="applicationGuideNav">
        《
        <span>贷款申请须知</span> 》
      </text>
      <text class="agreement-text" @click="personalCreditNav">
        《
        <span>个人征信业务授权书</span> 》
      </text>
    </view>
    <u-button class="wrap-btn" type="primary" @click="nextStepClick">同意协议并继续</u-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        agreement: false,
        check: false,
      },
    };
  },
  methods: {
    nextStepClick() {
      uni.navigateTo({
        url: "./marketLoan",
      });
    },
    // 勾选版权协议
    checkboxChange(e) {
      this.model.agreement = e.value;
    },
    applicationGuideNav() {
      uni.navigateTo({
        url: "../agreement/applicationGuide",
      });
    },
    personalCreditNav() {
      uni.navigateTo({
        url: "../agreement/personalCredit",
      });
    },
  },

};
</script>

<style scoped lang="scss">
.wrap {
  // padding: 0 40rpx 40rpx;
  .title {
    font-size: 30rpx;
    font-weight: 700;
    margin: 30rpx 0 10rpx;
    color: #007aff;
    padding-left: 10rpx;
    border-left: 2px solid #007aff;
  }
  .menus-ul {
    margin-bottom: 20rpx;
    padding-left: 30rpx;
    li {
      color: #8f8f94;
      line-height: 50rpx;
    }
  }
  p {
    color: #8f8f94;
    line-height: 50rpx;
    text-indent: 2em;
  }
}
.agreement {
  align-items: center;
  margin: 40rpx 0;
  span {
    border-bottom: 1px solid #007aff;
  }
  .agreement-text {
    padding-left: 8rpx;
    color: $u-tips-color;
  }
}
</style>

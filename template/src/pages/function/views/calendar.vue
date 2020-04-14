<template>
  <div class="calendar-wrapper">
      <slot />
      <div class="calendar">
          <div class="header">
              <div v-for="item in weekTitle" :key="item">周{{item}}</div>
          </div>
          <div class="days">
            <template v-for="i in 42" >
                <div v-if="i - beginDay <= 0" class="day prevDays" :key="i">{{i - beginDay + prevDays}}</div>
                <div v-else-if="i > beginDay && i - beginDay <= getCurDays"
                class="day curDays"
                :class="`${curDate.year}-${curDate.month}-${i - beginDay}` === todayStr ? 'today':''"
                :key="i">{{ i - beginDay}}</div>
                <div v-else class="day prevDays" :key="i">{{i - beginDay - getCurDays}}</div>
            </template>
          </div>
      </div>
  </div>
</template>

<script>
import detail from '../components/calendar/detail'
export default {
  components: {
    detail
  },
  data: function () {
    return {
      curDate: {
        year: null,
        month: null,
        day: null
      },
      todayStr: '',
      weekTitle: ['日', '一', '二', '三', '四', '五', '六'],
      data: [{
        'date': '2020-04-03',
        'list': [{
          'chargeTypeId': 14896,
          'chargeTypeName': '行政类',
          'amount': 100.03
        },
        {
          'chargeTypeId': 14897,
          'chargeTypeName': '销售类',
          'amount': 10032.06
        }
        ],
        'total': {
          'totalName': '合计',
          'totalAmount': 10132.06
        }
      }]
    }
  },
  mounted () {
    this.getCurDate()
  },
  computed: {
    prevDays () { // 上个月有多少天
      return new Date(this.curDate.year, this.curDate.month - 1, 0).getDate()
    },
    beginDay () { // 当前月第一天从周几开始
      return new Date(this.curDate.year, this.curDate.month - 1, 1).getDay()
    },
    getCurDays () { // 当前月有多少天
      return new Date(this.curDate.year, this.curDate.month, 0).getDate()
    }
  },
  methods: {
    // => 当前年月日
    // => 这个月有几天
    // => 这个月第一天是星期几
    getCurDate () {
      let _date = new Date()
      let year = _date.getFullYear()
      let month = _date.getMonth() + 1
      let day = _date.getDate()
      this.curDate = {
        year,
        month,
        day
      }
      this.todayStr = `${year}-${month}-${day}`
      console.log(this.beginDay, this.getCurDays)
    }
  }
}
</script>

<style scoped>
.calendar-wrapper{
    /* display: inline-block; */
    padding:20px;
    margin-bottom: 50px;
}
.calendar .header{
    display: flex;
    border:1px solid rgba(204, 204, 204, 1);
    border-bottom:none;
    border-left:none;
    border-top:none
}
.calendar .header div{
    padding:5px 3px 5px 0px;
    flex:1;
    border:1px solid rgba(204, 204, 204, 1);
    text-align: right;
    /* padding-right:px; */
    box-sizing: border-box;
    font-weight: 700;
    font-size:12px;
    border-bottom:none;
    border-right:none;
}
.calendar .days{
    /* display: inline-block; */
    line-height: 0;
     border:1px solid rgba(204, 204, 204, 1);
     border-top:none;
    border-left:none;
}
.calendar .days > div{
     /* display: inline-block; */

}
.calendar .days .day{
     display: inline-block;
     width:14.285%;
     min-height:100px;
     border:1px solid rgba(204, 204, 204, 1);
     box-sizing: border-box;
     text-align: right;
     color:#333;
     font-size:12px;
     color: #999999;
     line-height: 14px;
      border-bottom:none;
    border-right:none;
    background:#fff;
}
.calendar .days .day.today{
    color:#f60;
    font-weight: 500;
}
.calendar .days .day.prevDays{
    color:#999;
    background:#F8F8F8;
}
</style>

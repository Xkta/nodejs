// const getTableMeta = () => {
//   return {
//     tableName: "测试连接器插件",
//     fields: [
//       {
//         fieldId: "fid_1",
//         fieldName: "id1",
//         fieldType: 1,
//         isPrimary: true,
//         description: "",
//       },
//       {
//         fieldId: "fid_2",
//         fieldName: "数字",
//         fieldType: 2,
//         isPrimary: false,
//         property: {
//           formatter: "#,##0.00",
//         },
//       },
//       {
//         fieldId: "fid_3",
//         fieldName: "单选",
//         fieldType: 3,
//         isPrimary: false,
//         description: "xxx",
//         property: {},
//       },
//       {
//         fieldId: "fid_4",
//         fieldName: "多选",
//         fieldType: 4,
//         isPrimary: false,
//         description: "xxx",
//         property: {},
//       },
//       {
//         fieldId: "fid_5",
//         fieldName: "日期",
//         fieldType: 5,
//         isPrimary: false,
//         description: "xxx",
//         property: {
//           formatter: "dd/MM/yyyy",
//         },
//       },
//       {
//         fieldId: "fid_6",
//         fieldName: "条形码",
//         fieldType: 6,
//         isPrimary: false,
//         description: "xxx",
//         property: {},
//       },
//       {
//         fieldId: "fid_7",
//         fieldName: "复选框",
//         fieldType: 7,
//         isPrimary: false,
//         description: "xxx",
//         property: {},
//       },
//       {
//         fieldId: "fid_8",
//         fieldName: "货币",
//         fieldType: 8,
//         isPrimary: false,
//         description: "xxx",
//         property: {
//           formatter: "#,##0.000",
//           currencyCode: "USD",
//         },
//       },
//       {
//         fieldId: "fid_11",
//         fieldName: "电话",
//         fieldType: 9,
//         isPrimary: false,
//         description: "xxx",
//         property: {},
//       },
//       {
//         fieldId: "fid_12",
//         fieldName: "url",
//         fieldType: 10,
//         isPrimary: false,
//         description: "xxx",
//         property: {},
//       },
//       {
//         fieldId: "fid_9",
//         fieldName: "进度",
//         fieldType: 11,
//         isPrimary: false,
//         description: "xxx",
//         property: {
//           formatter: "0.0%",
//           min: 10,
//           max: 1000,
//           color: 4,
//         },
//       },
//       {
//         fieldId: "fid_10",
//         fieldName: "评分",
//         fieldType: 12,
//         isPrimary: false,
//         description: "xxx",
//         property: {
//           min: 1,
//           max: 10,
//           symbol: "smile",
//         },
//       },
//     ],
//   };
// };
const getTableMeta = () => {
  return {
    tableName: "测试连接器插件",
    fields: [
      {
                "fieldId": "fid_1",
                "fieldName": "openid",
                "fieldType": 1,
                "isPrimary": true,
                "description": "用户openid",
                "property": {}
            },
            {
                "fieldId": "fid_2",
                "fieldName": "微信昵称",
                "fieldType": 1,
                "isPrimary": false,
                "description": "用户微信昵称",
                "property": {}
            },
            {
                "fieldId": "fid_3",
                "fieldName": "收货人",
                "fieldType": 1,
                "isPrimary": false,
                "description": "收货人姓名",
                "property": {}
            },
            {
                "fieldId": "fid_4",
                "fieldName": "省份/城市/区域",
                "fieldType": 1,
                "isPrimary": false,
                "description": "收货地址省市区域",
                "property": {}
            },
            {
                "fieldId": "fid_5",
                "fieldName": "详细地址",
                "fieldType": 1,
                "isPrimary": false,
                "description": "收货详细地址",
                "property": {}
            },
            {
                "fieldId": "fid_6",
                "fieldName": "电话",
                "fieldType": 9,
                "isPrimary": false,
                "description": "收货人电话",
                "property": {}
            },
            {
                "fieldId": "fid_7",
                "fieldName": "兑换商品",
                "fieldType": 1,
                "isPrimary": false,
                "description": "兑换的商品名称",
                "property": {}
            },
            {
                "fieldId": "fid_8",
                "fieldName": "兑换时间",
                "fieldType": 5,
                "isPrimary": false,
                "description": "兑换时间",
                "property": {
                    "formatter": "yyyy-MM-dd HH:mm"
                }
            },
            {
                "fieldId": "fid_9",
                "fieldName": "兑换数量",
                "fieldType": 2,
                "isPrimary": false,
                "description": "兑换数量",
                "property": {}
            },
    ],
  };
};

module.exports = { getTableMeta };

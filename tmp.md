### <a name="oddlots"></a> 查询用户所有有碎股的持仓
GET /oddlots

返回参数
参数 | 类型 | 必需 | 说明
--- | --- | --- | ---
symbol | string | true | 股票代码
account_id | int | false | 对于机构账户，需要提供子账户ID
currency | string | true | 货币
market|String  |true | [市场](data.md#market)
nameCN | string | true | 中文名
quantity | string | true |仅返回碎股部分持仓
isApplied | string | true | 当日是否已申请碎股处理
返回值示例:

    {
        "status": "ok",
        "msg": "ok",
        "data": [
            {
                "symbol": "00700",
                "currency": "HKD",
                "market": "HK",
                "nameCN": "腾讯控股",
                "quantity": 12,           # 仅返回碎股部分持仓
                "isApplied": false      # 当日是否已申请碎股处理
            },
            {
                "symbol": "02318",
                "currency": "HKD",
                "market": "HK",
                "nameCN": "中国平安",
                "quantity": 69, 
                "isApplied": true
            }
        ],
        "timestamp": 1526361280980
    }
    
### <a name="place"></a> 申请碎股处理
POST /orders/odd

参数 | 类型 | 必需 | 说明
--- | --- | --- | ---
symbol | string | true | 股票代码
account_id | int | false | 对于机构账户，需要提供子账户ID
external_id | string | true | 外部id,用于去重,需要针对当前用户唯一

返回订单 [Order](data.md#dataOrder) 对象

返回示例：

    {
      "status": "ok",
      "msg": "ok",
      "data": {
          "id": 48010312548708352,
          "idstr": "48010312548708352",
          "symbol": "00700",
          "nameCN": "腾讯",
          "action": "SELL",
          "orderType": "MKT",
          "totalQuantity": 10,
          "filledQuantity": 0,
          "avgFillPrice": 0,
          "onlyRth": true,
          "discount": 0,
          "status": "New",
          "statusDesc": "已提交",
          "message": null
          "filledAt": 1448102363682, 
          "updatedAt": 1448512656601,
          "createdAt": 1448102363682
      }
    }
    

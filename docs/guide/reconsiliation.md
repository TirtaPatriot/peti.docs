# Reconsiliation

Data pembayaran bisa didapatkan di route `GET /audit`, data pembayaran default yang dikeluarkan adalah data pembayaran H-1 saat request dilakukan dengan result limit 10.

Untuk mendapatkan data pembayaran pada tanggal tertentu, bisa dilakukan dengan menambahkan _querystring_ **tgl** dengan _pattern_:

```js
/^([0-9]{4})-?([0-9]{2})-?([0-9]{2})$/;

// 1945-08-17 atau 19450817
```

## Parameters

|field | type    | default      |
|------|---------|--------------|
|tgl   | string  | kemarin      |
|page  | number  | 1            |
|limit | number  | 10 (0 = all) |


Berikut contoh dari response `/audit`

```json
{
  "status": "success",
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "tanggal": "2020-08-27"
  },
  "data": [
    {
      "no": 1,
      "id": "10120202007",
      "nob": "962008270001",
      "nopel": "010104010080",
      "periode": "202007",
      "rid": 1492178,
      "pid": "5428a641-0e18-4d14-bd6f-dcb32ab29956",
      "mer": "1234",
      "air": 176000,
      "administrasi": 8000,
      "administrasi_angsuran": 0,
      "ppn_administrasi": 800,
      "denda": 10000,
      "angsuran": 0,
      "materai": 0,
      "registrasi": 0,
      "biaya_pemasangan": 0,
      "ppn_pemasangan": 0,
      "biaya_jarak": 0
    }
  //...
  ]
}
```

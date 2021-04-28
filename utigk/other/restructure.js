let newData = [
    {
      "id": 0001,
      "platform": "GAMEZY",
      "teamCode": "FE9D1CB1",
      "teamName": "creators team",
      "isApproved": true,
      "whyTeam": "because its",
      "sprt" : "cricket"
    },
    {
      "id": 0001,
      "platform": "GAMEZY",
      "teamCode": "FE9D1CB1",
      "teamName": "creators team",
      "isApproved": true,
      "whyTeam": "because its",
      "sprt" : "football"
    },
    {
      "id": 0002,
      "platform": "GAMEZY",
      "teamCode": "FE9D1CB1",
      "teamName": "creators team",
      "isApproved": true,
      "whyTeam": "because its",
      "sprt" : "running"
    },
    {
      "id": 0003,
      "platform": "GAMEZY",
      "teamCode": "FE9D1CB1",
      "teamName": "creators team",
      "isApproved": true,
      "whyTeam": "because its",
      "sprt" : "tt"
    },
    {
      "id": 0004,
      "platform": "GAMEZY",
      "teamCode": "FE9D1CB1",
      "teamName": "creators team",
      "isApproved": true,
      "whyTeam": "because its",
      "sprt" : "badminton"
    },
    {
      "id": 0005,
      "platform": "GAMEZY",
      "teamCode": "FE9D1CB1",
      "teamName": "creators team",
      "isApproved": true,
      "whyTeam": "because its",
      "sprt" : "khokho"
    },
    {
        "id": 0006,
        "platform": "GAMEZY",
        "teamCode": "FE9D1CB1",
        "teamName": "creators team",
        "isApproved": true,
        "whyTeam": "because its",
        "sprt" : "cricket"
    },

    {
        "id": 0007,
        "platform": "GAMEZY",
        "teamCode": "FE9D1CB1",
        "teamName": "creators team",
        "isApproved": true,
        "whyTeam": "because its",
        "sprt" : "tt"
    },
  ] 
  
  
  console.log(newData, 'newData')

  let restructedData = {}
  let sportsArray = []

  let array = []

  newData.map((singleData, index) => {
      if(!restructedData[singleData.sprt]) {
        restructedData[singleData.sprt] = []
        sportsArray.push(singleData.sprt)
      }
    restructedData[singleData.sprt].push(singleData)
    array.push(singleData.sprt)

  })

  console.log(array, 'jojo')

  
  let newuniqueArr = []

  let start = false;


  for(let i = 0 ; i < array.length; i++) {
      console.log('arr child')
    for(let j = 0 ; j <= newuniqueArr.length; j++) {
        if(array[i] == newuniqueArr[j]) {
            console.log('new arr child')
           start =true
        }    
    }
    if(start) {
        newuniqueArr.push(array[i])
    }
    start = false
  }

  console.log(newuniqueArr, 'newArray')

var arr = []

// for (i =0 ; i < 10 ; i ++) {
//   arr.push(i)
// }

for (i =0 ; i < 10 ; i ++) {
    arr.push(function() {console.log(i)})
}

arr[5]()


var people = [
  {                                              // Each person is an object
    name: 'Casey',                               // It holds name and rate
    rate: 60
  },
  {
    name: 'Camille',
    rate: 80
  },
  {
    name: 'Gordon',
    rate: 75
  },
  {
    name: 'Nigel',
    rate: 120
  }
];

let resultArr = [];

let filterFunc = (singleObj) => {
  return singleObj.rate > 60 && singleObj.rate < 90
}

console.log(filterFunc(80))



let data = {
    "teams": [
      {
        "id": 1610446066363,
        "platform": "GAMEZY",
        "teamCode": "FE9D1CB1",
        "teamName": "creators team",
        "predictionTeam": {
          "teamA": [
            {
              "btAvg": 54,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 51,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 51,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10849737
                }
              ],
              "bowl": false,
              "btOrdr": 6,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Farhaan Behardien",
              "cname": "Farhaan Behardien",
              "eco": 6.04,
              "sts": 0,
              "bat": true,
              "sRt": 103,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849737,
              "bwAvg": 142,
              "avgPts": 51,
              "key": "33963"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Grant Mokoena",
              "cname": "Grant Mokoena",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765767,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "11733"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Jonathan Vandiar",
              "cname": "Jonathan Vandiar",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765533,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "4346"
            },
            {
              "btAvg": 29,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 35,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 35,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 9614290
                }
              ],
              "bowl": false,
              "btOrdr": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Pite van Biljon",
              "cname": "Pite van Biljon",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "sRt": 74,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 9,
              "id": 9614290,
              "bwAvg": 0,
              "avgPts": 35,
              "key": "34798"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Raynard van Tonder",
              "cname": "Raynard van Tonder",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10764197,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "66360"
            },
            {
              "btAvg": 12,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 65,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 16,
                  "bwPnts": 49,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10763552
                }
              ],
              "bowl": false,
              "btOrdr": 8,
              "isSelected": 0,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Ferisco Adams",
              "cname": "Ferisco Adams",
              "eco": 6.91,
              "sts": 0,
              "bat": false,
              "sRt": 89,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10763552,
              "bwAvg": 48,
              "avgPts": 65,
              "key": "57499"
            },
            {
              "btAvg": 29,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 64,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 6,
                  "bwPnts": 50,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 9209388
                }
              ],
              "bowl": false,
              "btOrdr": 3,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Jacques Snyman",
              "cname": "Jacques Snyman",
              "eco": 4.43,
              "sts": 0,
              "bat": false,
              "sRt": 138,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 9209388,
              "bwAvg": 37,
              "avgPts": 64,
              "key": "66538"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Matthew Kleinveldt",
              "cname": "Matthew Kleinveldt",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10766161,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "34536"
            },
            {
              "btAvg": 18,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 7,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 8,
                  "bwPnts": -1,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10764208
                }
              ],
              "bowl": false,
              "btOrdr": 7,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Patrick Botha",
              "cname": "Patrick Botha",
              "eco": 6.83,
              "sts": 0,
              "bat": false,
              "sRt": 98,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10764208,
              "bwAvg": 0,
              "avgPts": 7,
              "key": "37521"
            },
            {
              "btAvg": 31,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 16,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 58,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 42,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10765804
                }
              ],
              "bowl": false,
              "btOrdr": 4,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Patrick Kruger",
              "cname": "Patrick Kruger",
              "eco": 6.28,
              "sts": 0,
              "bat": false,
              "sRt": 89,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10765804,
              "bwAvg": 82,
              "avgPts": 58,
              "key": "50466"
            },
            {
              "btAvg": 45,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 73,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 65,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10764229
                }
              ],
              "bowl": false,
              "btOrdr": 5,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Andries Gous",
              "cname": "Andries Gous",
              "eco": 3,
              "sts": 1,
              "bat": false,
              "sRt": 86,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "LeaderShipStatus": "cap",
              "credit": 9,
              "id": 10764229,
              "bwAvg": 5,
              "avgPts": 73,
              "key": "57274"
            },
            {
              "btAvg": 30,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 22,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 14,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10764243
                }
              ],
              "bowl": false,
              "btOrdr": 2,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Wandile Makwetu",
              "cname": "Wandile Makwetu",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "sRt": 70,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 9,
              "id": 10764243,
              "bwAvg": 0,
              "avgPts": 22,
              "key": "65965"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Alfred Mothoa",
              "cname": "Alfred Mothoa",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10765595,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "64430"
            },
            {
              "btAvg": 5,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Duan Jansen",
              "cname": "Duan Jansen",
              "eco": 4.03,
              "sts": 0,
              "bat": false,
              "sRt": 47,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10764250,
              "bwAvg": 15,
              "avgPts": 0,
              "key": "70815"
            },
            {
              "btAvg": 15,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Gerald Coetzee",
              "cname": "Gerald Coetzee",
              "eco": 4.36,
              "sts": 0,
              "bat": false,
              "sRt": 88,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 8284137,
              "bwAvg": 27,
              "avgPts": 0,
              "key": "67443"
            },
            {
              "btAvg": 2,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 29,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 4,
                  "bwPnts": 25,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10765797
                }
              ],
              "bowl": true,
              "btOrdr": 10,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Kagiso Mohale",
              "cname": "Kagiso Mohale",
              "eco": 8.11,
              "sts": 0,
              "bat": false,
              "sRt": 36,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10765797,
              "bwAvg": 73,
              "avgPts": 29,
              "key": "64229"
            },
            {
              "btAvg": 6,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 26,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 1,
                  "bwPnts": 25,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10765851
                }
              ],
              "bowl": true,
              "btOrdr": 11,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Mbulelo Budaza",
              "cname": "Mbulelo Budaza",
              "eco": 5.43,
              "sts": 0,
              "bat": false,
              "sRt": 60,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10765851,
              "bwAvg": 28,
              "avgPts": 26,
              "key": "64862"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Migael Pretorius",
              "cname": "Migael Pretorius",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10765369,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "65916"
            },
            {
              "btAvg": 7,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Nealan van Heerden",
              "cname": "Nealan van Heerden",
              "eco": 5.51,
              "sts": 0,
              "bat": false,
              "sRt": 55,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10764264,
              "bwAvg": 28,
              "avgPts": 0,
              "key": "67134"
            },
            {
              "btAvg": 4,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Pheko Moletsane",
              "cname": "Pheko Moletsane",
              "eco": 4.21,
              "sts": 0,
              "bat": false,
              "sRt": 62,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 8284145,
              "bwAvg": 30,
              "avgPts": 0,
              "key": "71361"
            },
            {
              "btAvg": 45,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Sean Whitehead",
              "cname": "Sean Whitehead",
              "eco": 4.19,
              "sts": 0,
              "bat": false,
              "sRt": 64,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10764278,
              "bwAvg": 22,
              "avgPts": 0,
              "key": "65526"
            },
            {
              "btAvg": 11,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 12,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 51,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 13,
                  "bwPnts": 26,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10849704
                }
              ],
              "bowl": true,
              "btOrdr": 9,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Shaun von Berg",
              "cname": "Shaun von Berg",
              "eco": 4.86,
              "sts": 0,
              "bat": false,
              "sRt": 62,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10849704,
              "bwAvg": 25,
              "avgPts": 51,
              "key": "35313"
            }
          ],
          "teamB": [
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Dean Elgar",
              "cname": "Dean Elgar",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 8065080,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "9793"
            },
            {
              "btAvg": 23,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 8,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 8,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10765521
                }
              ],
              "bowl": false,
              "btOrdr": 4,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Diego Rosier",
              "cname": "Diego Rosier",
              "eco": 6.2,
              "sts": 0,
              "bat": true,
              "sRt": 85,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765521,
              "bwAvg": 37,
              "avgPts": 8,
              "key": "19139"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Henry Davids",
              "cname": "Henry Davids",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849738,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "9786"
            },
            {
              "btAvg": 28,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Kabelo Sekhukhune",
              "cname": "Kabelo Sekhukhune",
              "eco": 24,
              "sts": 0,
              "bat": true,
              "sRt": 77,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 9209391,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "64962"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Rivaldo Moonsamy",
              "cname": "Rivaldo Moonsamy",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765540,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "65403"
            },
            {
              "btAvg": 50,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 39,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 39,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10849743
                }
              ],
              "bowl": false,
              "btOrdr": 2,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Theunis de Bruyn",
              "cname": "Theunis de Bruyn",
              "eco": 6,
              "sts": 0,
              "bat": true,
              "sRt": 92,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849743,
              "bwAvg": 0,
              "avgPts": 39,
              "key": "58317"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Aiden Markram",
              "cname": "Aiden Markram",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849733,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "64219"
            },
            {
              "btAvg": 22,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 61,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 9,
                  "bwPnts": 52,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10765601
                }
              ],
              "bowl": false,
              "btOrdr": 7,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Dayyaan Galiem",
              "cname": "Dayyaan Galiem",
              "eco": 5.1,
              "sts": 0,
              "bat": false,
              "sRt": 84,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10765601,
              "bwAvg": 26,
              "avgPts": 61,
              "key": "64217"
            },
            {
              "btAvg": 37,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 16,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 45,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 29,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10849748
                }
              ],
              "bowl": false,
              "btOrdr": 1,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Grant Thomson",
              "cname": "Grant Thomson",
              "eco": 6.98,
              "sts": 0,
              "bat": false,
              "sRt": 88,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "LeaderShipStatus": "vc",
              "credit": 9,
              "id": 10849748,
              "bwAvg": 36,
              "avgPts": 45,
              "key": "43472"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Matthew Arnold",
              "cname": "Matthew Arnold",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10763746,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "4354"
            },
            {
              "btAvg": 6,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 3,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 3,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10765539
                }
              ],
              "bowl": false,
              "btOrdr": 3,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Neil Brand",
              "cname": "Neil Brand",
              "eco": 6.85,
              "sts": 0,
              "bat": false,
              "sRt": 30,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765539,
              "bwAvg": 0,
              "avgPts": 3,
              "key": "65506"
            },
            {
              "btAvg": 20,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 18,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 18,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10849537
                }
              ],
              "bowl": false,
              "btOrdr": 5,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Sibonelo Makhanya",
              "cname": "Sibonelo Makhanya",
              "eco": 5.19,
              "sts": 0,
              "bat": false,
              "sRt": 89,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849537,
              "bwAvg": 39,
              "avgPts": 18,
              "key": "64617"
            },
            {
              "btAvg": 18,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 24,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 16,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10765588
                }
              ],
              "bowl": false,
              "btOrdr": 6,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Rubin Hermann",
              "cname": "Rubin Hermann",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "sRt": 45,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 9,
              "id": 10765588,
              "bwAvg": 0,
              "avgPts": 24,
              "key": "67189"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Dale Steyn",
              "cname": "Dale Steyn",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 9614319,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "3674"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Gregory Mahlokwana",
              "cname": "Gregory Mahlokwana",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10765567,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "67113"
            },
            {
              "btAvg": 11,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 16,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 44,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 1,
                  "bwPnts": 27,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10849759
                }
              ],
              "bowl": true,
              "btOrdr": 8,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Junior Dala",
              "cname": "Junior Dala",
              "eco": 5.91,
              "sts": 0,
              "bat": false,
              "sRt": 81,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10849759,
              "bwAvg": 24,
              "avgPts": 44,
              "key": "57746"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Khwezi Gumede",
              "cname": "Khwezi Gumede",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10763694,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "71626"
            },
            {
              "btAvg": 65,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 47,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 22,
                  "bwPnts": 25,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 15055859
                }
              ],
              "bowl": true,
              "btOrdr": 10,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Kyle Abbott",
              "cname": "Kyle Abbott",
              "eco": 6.1,
              "sts": 0,
              "bat": false,
              "sRt": 78,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 15055859,
              "bwAvg": 87,
              "avgPts": 47,
              "key": "24144"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Lizaad Williams",
              "cname": "Lizaad Williams",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10763559,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "57823"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Lungi Ngidi",
              "cname": "Lungi Ngidi",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 8801236,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "64225"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Okuhle Cele",
              "cname": "Okuhle Cele",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10764500,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "66543"
            },
            {
              "btAvg": 16,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Ryan Cartwright",
              "cname": "Ryan Cartwright",
              "eco": 5.44,
              "sts": 0,
              "bat": false,
              "sRt": 77,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10763699,
              "bwAvg": 36,
              "avgPts": 0,
              "key": "64243"
            },
            {
              "btAvg": 12,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 26,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 0,
                  "bwPnts": 26,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 8801239
                }
              ],
              "bowl": true,
              "btOrdr": 11,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Tabraiz Shamsi",
              "cname": "Tabraiz Shamsi",
              "eco": 5.03,
              "sts": 0,
              "bat": false,
              "sRt": 73,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 8801239,
              "bwAvg": 25,
              "avgPts": 26,
              "key": "48191"
            },
            {
              "btAvg": 25,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 94,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 36,
                  "bwPnts": 50,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10766175
                }
              ],
              "bowl": true,
              "btOrdr": 9,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Thando Ntini",
              "cname": "Thando Ntini",
              "eco": 5.61,
              "sts": 0,
              "bat": false,
              "sRt": 75,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10766175,
              "bwAvg": 29,
              "avgPts": 94,
              "key": "67444"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Faf du Plessis",
              "cname": "Faf du Plessis",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 8.5,
              "id": 8065094,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "28891"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Quinton de Kock",
              "cname": "Quinton de Kock",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 8,
              "id": 8065097,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "28035"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Heinrich Klaasen",
              "cname": "Heinrich Klaasen",
              "eco": 0,
              "sts": 1,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 7.5,
              "id": 9614285,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "59736"
            }
          ]
        },
        "isApproved": true,
        "whyTeam": "because its"
      },
      {
        "id": 1610446266713,
        "platform": "GAMEZY",
        "teamCode": "1371B8E5",
        "teamName": " creator 1111",
        "predictionTeam": {
          "teamA": [
            {
              "btAvg": 54,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 51,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 51,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10849737
                }
              ],
              "bowl": false,
              "btOrdr": 6,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Farhaan Behardien",
              "cname": "Farhaan Behardien",
              "eco": 6.04,
              "sts": 0,
              "bat": true,
              "sRt": 103,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849737,
              "bwAvg": 142,
              "avgPts": 51,
              "key": "33963"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Grant Mokoena",
              "cname": "Grant Mokoena",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765767,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "11733"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Jonathan Vandiar",
              "cname": "Jonathan Vandiar",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765533,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "4346"
            },
            {
              "btAvg": 29,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 35,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 35,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 9614290
                }
              ],
              "bowl": false,
              "btOrdr": 1,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Pite van Biljon",
              "cname": "Pite van Biljon",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "sRt": 74,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "LeaderShipStatus": "vc",
              "credit": 9,
              "id": 9614290,
              "bwAvg": 0,
              "avgPts": 35,
              "key": "34798"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Raynard van Tonder",
              "cname": "Raynard van Tonder",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10764197,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "66360"
            },
            {
              "btAvg": 12,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 65,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 16,
                  "bwPnts": 49,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10763552
                }
              ],
              "bowl": false,
              "btOrdr": 8,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Ferisco Adams",
              "cname": "Ferisco Adams",
              "eco": 6.91,
              "sts": 0,
              "bat": false,
              "sRt": 89,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10763552,
              "bwAvg": 48,
              "avgPts": 65,
              "key": "57499"
            },
            {
              "btAvg": 29,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 64,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 6,
                  "bwPnts": 50,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 9209388
                }
              ],
              "bowl": false,
              "btOrdr": 3,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Jacques Snyman",
              "cname": "Jacques Snyman",
              "eco": 4.43,
              "sts": 0,
              "bat": false,
              "sRt": 138,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 9209388,
              "bwAvg": 37,
              "avgPts": 64,
              "key": "66538"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Matthew Kleinveldt",
              "cname": "Matthew Kleinveldt",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10766161,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "34536"
            },
            {
              "btAvg": 18,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 7,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 8,
                  "bwPnts": -1,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10764208
                }
              ],
              "bowl": false,
              "btOrdr": 7,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Patrick Botha",
              "cname": "Patrick Botha",
              "eco": 6.83,
              "sts": 0,
              "bat": false,
              "sRt": 98,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10764208,
              "bwAvg": 0,
              "avgPts": 7,
              "key": "37521"
            },
            {
              "btAvg": 31,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 16,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 58,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 42,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10765804
                }
              ],
              "bowl": false,
              "btOrdr": 4,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Patrick Kruger",
              "cname": "Patrick Kruger",
              "eco": 6.28,
              "sts": 0,
              "bat": false,
              "sRt": 89,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10765804,
              "bwAvg": 82,
              "avgPts": 58,
              "key": "50466"
            },
            {
              "btAvg": 45,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 73,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 65,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10764229
                }
              ],
              "bowl": false,
              "btOrdr": 5,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Andries Gous",
              "cname": "Andries Gous",
              "eco": 3,
              "sts": 0,
              "bat": false,
              "sRt": 86,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 9,
              "id": 10764229,
              "bwAvg": 5,
              "avgPts": 73,
              "key": "57274"
            },
            {
              "btAvg": 30,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 22,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 14,
                  "bwPnts": 0,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10764243
                }
              ],
              "bowl": false,
              "btOrdr": 2,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Wandile Makwetu",
              "cname": "Wandile Makwetu",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "sRt": 70,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 9,
              "id": 10764243,
              "bwAvg": 0,
              "avgPts": 22,
              "key": "65965"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Alfred Mothoa",
              "cname": "Alfred Mothoa",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10765595,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "64430"
            },
            {
              "btAvg": 5,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Duan Jansen",
              "cname": "Duan Jansen",
              "eco": 4.03,
              "sts": 0,
              "bat": false,
              "sRt": 47,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10764250,
              "bwAvg": 15,
              "avgPts": 0,
              "extraInfo": "new one ",
              "key": "70815"
            },
            {
              "btAvg": 15,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Gerald Coetzee",
              "cname": "Gerald Coetzee",
              "eco": 4.36,
              "sts": 0,
              "bat": false,
              "sRt": 88,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 8284137,
              "bwAvg": 27,
              "avgPts": 0,
              "key": "67443"
            },
            {
              "btAvg": 2,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 29,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 4,
                  "bwPnts": 25,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10765797
                }
              ],
              "bowl": true,
              "btOrdr": 10,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Kagiso Mohale",
              "cname": "Kagiso Mohale",
              "eco": 8.11,
              "sts": 0,
              "bat": false,
              "sRt": 36,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10765797,
              "bwAvg": 73,
              "avgPts": 29,
              "key": "64229"
            },
            {
              "btAvg": 6,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 26,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 1,
                  "bwPnts": 25,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10765851
                }
              ],
              "bowl": true,
              "btOrdr": 11,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Mbulelo Budaza",
              "cname": "Mbulelo Budaza",
              "eco": 5.43,
              "sts": 0,
              "bat": false,
              "sRt": 60,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10765851,
              "bwAvg": 28,
              "avgPts": 26,
              "key": "64862"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Migael Pretorius",
              "cname": "Migael Pretorius",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10765369,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "65916"
            },
            {
              "btAvg": 7,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Nealan van Heerden",
              "cname": "Nealan van Heerden",
              "eco": 5.51,
              "sts": 0,
              "bat": false,
              "sRt": 55,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10764264,
              "bwAvg": 28,
              "avgPts": 0,
              "key": "67134"
            },
            {
              "btAvg": 4,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Pheko Moletsane",
              "cname": "Pheko Moletsane",
              "eco": 4.21,
              "sts": 0,
              "bat": false,
              "sRt": 62,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 8284145,
              "bwAvg": 30,
              "avgPts": 0,
              "key": "71361"
            },
            {
              "btAvg": 45,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Sean Whitehead",
              "cname": "Sean Whitehead",
              "eco": 4.19,
              "sts": 0,
              "bat": false,
              "sRt": 64,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "LeaderShipStatus": "cap",
              "credit": 9,
              "id": 10764278,
              "bwAvg": 22,
              "avgPts": 0,
              "extraInfo": " extra info",
              "key": "65526"
            },
            {
              "btAvg": 11,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 12,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712484",
                  "ttlPnts": 51,
                  "aTKey": "KTS",
                  "date": 1610265600000,
                  "btPnts": 13,
                  "bwPnts": 26,
                  "hTKey": "DOL",
                  "frmt": "list a",
                  "id": 10849704
                }
              ],
              "bowl": true,
              "btOrdr": 9,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Shaun von Berg",
              "cname": "Shaun von Berg",
              "eco": 4.86,
              "sts": 0,
              "bat": false,
              "sRt": 62,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10849704,
              "bwAvg": 25,
              "avgPts": 51,
              "key": "35313"
            }
          ],
          "teamB": [
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Dean Elgar",
              "cname": "Dean Elgar",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 8065080,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "9793"
            },
            {
              "btAvg": 23,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 8,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 8,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10765521
                }
              ],
              "bowl": false,
              "btOrdr": 4,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Diego Rosier",
              "cname": "Diego Rosier",
              "eco": 6.2,
              "sts": 0,
              "bat": true,
              "sRt": 85,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765521,
              "bwAvg": 37,
              "avgPts": 8,
              "key": "19139"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Henry Davids",
              "cname": "Henry Davids",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849738,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "9786"
            },
            {
              "btAvg": 28,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Kabelo Sekhukhune",
              "cname": "Kabelo Sekhukhune",
              "eco": 24,
              "sts": 0,
              "bat": true,
              "sRt": 77,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 9209391,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "64962"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Rivaldo Moonsamy",
              "cname": "Rivaldo Moonsamy",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765540,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "65403"
            },
            {
              "btAvg": 50,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 39,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 39,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10849743
                }
              ],
              "bowl": false,
              "btOrdr": 2,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Theunis de Bruyn",
              "cname": "Theunis de Bruyn",
              "eco": 6,
              "sts": 0,
              "bat": true,
              "sRt": 92,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849743,
              "bwAvg": 0,
              "avgPts": 39,
              "key": "58317"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Aiden Markram",
              "cname": "Aiden Markram",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849733,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "64219"
            },
            {
              "btAvg": 22,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 61,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 9,
                  "bwPnts": 52,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10765601
                }
              ],
              "bowl": false,
              "btOrdr": 7,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Dayyaan Galiem",
              "cname": "Dayyaan Galiem",
              "eco": 5.1,
              "sts": 0,
              "bat": false,
              "sRt": 84,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10765601,
              "bwAvg": 26,
              "avgPts": 61,
              "key": "64217"
            },
            {
              "btAvg": 37,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 16,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 45,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 29,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10849748
                }
              ],
              "bowl": false,
              "btOrdr": 1,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Grant Thomson",
              "cname": "Grant Thomson",
              "eco": 6.98,
              "sts": 0,
              "bat": false,
              "sRt": 88,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10849748,
              "bwAvg": 36,
              "avgPts": 45,
              "key": "43472"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Matthew Arnold",
              "cname": "Matthew Arnold",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10763746,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "4354"
            },
            {
              "btAvg": 6,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 3,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 3,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10765539
                }
              ],
              "bowl": false,
              "btOrdr": 3,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Neil Brand",
              "cname": "Neil Brand",
              "eco": 6.85,
              "sts": 0,
              "bat": false,
              "sRt": 30,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10765539,
              "bwAvg": 0,
              "avgPts": 3,
              "key": "65506"
            },
            {
              "btAvg": 20,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 18,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 18,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10849537
                }
              ],
              "bowl": false,
              "btOrdr": 5,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Sibonelo Makhanya",
              "cname": "Sibonelo Makhanya",
              "eco": 5.19,
              "sts": 0,
              "bat": false,
              "sRt": 89,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 9,
              "id": 10849537,
              "bwAvg": 39,
              "avgPts": 18,
              "key": "64617"
            },
            {
              "btAvg": 18,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 24,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 16,
                  "bwPnts": 0,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10765588
                }
              ],
              "bowl": false,
              "btOrdr": 6,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Rubin Hermann",
              "cname": "Rubin Hermann",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "sRt": 45,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 9,
              "id": 10765588,
              "bwAvg": 0,
              "avgPts": 24,
              "key": "67189"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Dale Steyn",
              "cname": "Dale Steyn",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 9614319,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "3674"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Gregory Mahlokwana",
              "cname": "Gregory Mahlokwana",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10765567,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "67113"
            },
            {
              "btAvg": 11,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 16,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 44,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 1,
                  "bwPnts": 27,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10849759
                }
              ],
              "bowl": true,
              "btOrdr": 8,
              "isSelected": 1,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Junior Dala",
              "cname": "Junior Dala",
              "eco": 5.91,
              "sts": 0,
              "bat": false,
              "sRt": 81,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10849759,
              "bwAvg": 24,
              "avgPts": 44,
              "key": "57746"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Khwezi Gumede",
              "cname": "Khwezi Gumede",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10763694,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "71626"
            },
            {
              "btAvg": 65,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 47,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 22,
                  "bwPnts": 25,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 15055859
                }
              ],
              "bowl": true,
              "btOrdr": 10,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Kyle Abbott",
              "cname": "Kyle Abbott",
              "eco": 6.1,
              "sts": 0,
              "bat": false,
              "sRt": 78,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 15055859,
              "bwAvg": 87,
              "avgPts": 47,
              "key": "24144"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Lizaad Williams",
              "cname": "Lizaad Williams",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10763559,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "57823"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Lungi Ngidi",
              "cname": "Lungi Ngidi",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 8801236,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "64225"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Okuhle Cele",
              "cname": "Okuhle Cele",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10764500,
              "bwAvg": 0,
              "avgPts": 0,
              "extraInfo": " ",
              "key": "66543"
            },
            {
              "btAvg": 16,
              "sub": 0,
              "playerAnalyses": [],
              "bowl": true,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Ryan Cartwright",
              "cname": "Ryan Cartwright",
              "eco": 5.44,
              "sts": 0,
              "bat": false,
              "sRt": 77,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "ar",
              "credit": 9,
              "id": 10763699,
              "bwAvg": 36,
              "avgPts": 0,
              "key": "64243"
            },
            {
              "btAvg": 12,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 0,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 26,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 0,
                  "bwPnts": 26,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 8801239
                }
              ],
              "bowl": true,
              "btOrdr": 11,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Tabraiz Shamsi",
              "cname": "Tabraiz Shamsi",
              "eco": 5.03,
              "sts": 0,
              "bat": false,
              "sRt": 73,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 8801239,
              "bwAvg": 25,
              "avgPts": 26,
              "key": "48191"
            },
            {
              "btAvg": 25,
              "sub": 0,
              "playerAnalyses": [
                {
                  "flPnts": 8,
                  "snName": "Momentum One Day Cup, 2021",
                  "mid": "48712483",
                  "ttlPnts": 94,
                  "aTKey": "DOL",
                  "date": 1610179200000,
                  "btPnts": 36,
                  "bwPnts": 50,
                  "hTKey": "TIT",
                  "frmt": "list a",
                  "id": 10766175
                }
              ],
              "bowl": true,
              "btOrdr": 9,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Thando Ntini",
              "cname": "Thando Ntini",
              "eco": 5.61,
              "sts": 0,
              "bat": false,
              "sRt": 75,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bl",
              "credit": 9,
              "id": 10766175,
              "bwAvg": 29,
              "avgPts": 94,
              "key": "67444"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Faf du Plessis",
              "cname": "Faf du Plessis",
              "eco": 0,
              "sts": 0,
              "bat": true,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "bt",
              "credit": 8.5,
              "id": 8065094,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "28891"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Quinton de Kock",
              "cname": "Quinton de Kock",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 8,
              "id": 8065097,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "28035"
            },
            {
              "sub": 0,
              "playerAnalyses": [],
              "bowl": false,
              "keep": false,
              "mslByC": {
                "1_2_C": 0,
                "1_0_C": 0
              },
              "mslByVC": {
                "1_0_VC": 0,
                "1_2_VC": 0
              },
              "name": "Heinrich Klaasen",
              "cname": "Heinrich Klaasen",
              "eco": 0,
              "sts": 0,
              "bat": false,
              "msldBy": {
                "1_0": 0,
                "1_2": 0
              },
              "role": "kp",
              "credit": 7.5,
              "id": 9614285,
              "bwAvg": 0,
              "avgPts": 0,
              "key": "59736"
            }
          ]
        },
        "isApproved": true,
        "whyTeam": "second"
      }
    ]
  }


  console.log(data, 'original data')

  function filterPlayer(data) {

    let getPredictionTeam = (predictionTeamData) => {
      let teapredictionTeamObj = {}
      for(let specificTeam in predictionTeamData) {
        teapredictionTeamObj[specificTeam] = predictionTeamData[specificTeam].filter((playerObj) =>{
           return playerObj.isSelected === 1
        })

        console.log(teapredictionTeamObj, 'hello')

      }
      return teapredictionTeamObj;
    }

    let filteredData = data.teams.map((toplevelArray) => {
      let toparrayinside = {
        ...toplevelArray,
        predictionTeam: getPredictionTeam(toplevelArray.predictionTeam) // (data = toplevelArray.predictionTeam)
      }

      return toparrayinside;
    })

    return filteredData;
  }

  let filteredData = filterPlayer(data);

  console.log(filteredData, 'welcome all done')

  var c = {
    a : 'hello',
     b: 'there',
     d: {
     a : 'hello inner',
     b: 'there inner'
 } 
 }

 function deepcOpy(obj) {
  // let keys = Object.keys(obj)
  let newObj = {}

  for(let key in obj) {
    if(typeof obj[key] !== 'object') {
      newObj[key] = obj[key]
    } else {
      newObj[key] = deepcOpy(obj)
    }
  }

  return newObj;
}

var newr2 = deepcOpy(c)




  

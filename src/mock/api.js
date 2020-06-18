import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  status: 0,
  data: {
    'id|10001-11000': 0,
    username: '@cname',
    email: '@email',
    phone: '123456789',
    role: 0,
    createTime: '@date',
    updateTime: 1479048325000
  }
})

<template>
  <div>
    <div @click="handleConnect">连接socket</div>
    <div @click="handleDisconnect">断开连接</div>
    <div @click="handleEmitBc">发送广播</div>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'HomeView',
  data: () => {
    return {
      socket: null
    }
  },
  methods: {
    // 点击连接
    handleConnect() {
      console.log('1111 点击连接')
      const userId = 'cadd70b3cee917597128db4d79a87e5f'
      const roomId = '5c288fe493518da4'
      const tumaxToken =
        'Dnv_NrkGU9rYtv9dalqp52UBP591D580R2fnGZccaF-MnHxMvi_kWqeOaFDcsJTckGuigzu1AT60648_y6hxRpce0ibsd7B7T3lxYN-78SW6g7zsjpGH5i8bSjkbmqj_1yAqfgaTjvAZwlSsz6U6lxC-jqDjW9isKL7D6jiHUEstGgp16P_uGd2oD9Mb43LR3BFSg7zjCkmYLffvojeIkoQogKXKLoh_-uVzkB16M6OxbampYc4pmHfij-0GFJl4wtN4dv1h623dl34qwOQRSAQbCqHLDSAcb-xGB9eaAZRpeXWidQ3Kt7im0w-SwNyT0mAtoRp_Ahn7a7KJXQATtgAp1NWOL0lhP5jzmWpaXJtK6V4k0PV2uZNDTP0noMxXEa7gEUYL6PrUbFQaQpeORBU-_rc6dwPllX3GMVi1Jkpye_sO-jHWHMZNqEFFERgwopPokanMNkISGxyFd6Dq1dIwCyGVwPKQqJ8QfybZhL1FJmiF1nooc3y63UCPlYCjjSHG2AkPxxHixf4I8RWLeMyEjcPW0lTS'
      const ip1 = '10.50.2.23:8081'
      const ip2 = '192.168.1.33:8081'
      const url = 'nt-panortc.to8to.com'
      this.socketIO = io('ws://10.50.2.23:8081', {
        reconnectionDelayMax: 5000,

        query: {
          user_uuid: userId,
          room_uuid: roomId,
          token: tumaxToken
        }
      })
      //   io.connect(
      //     `https://${url}?user_uuid=${userId}&room_uuid=${roomId}&token=${tumaxToken}`,
      //     {
      //       reconnectionDelayMax: 5000,
      //       transports: ['websocket', 'polling']
      //     }
      //   )

      // 连接之后的监听事件
      this.socketIO.on('connect', (data) => {
        console.log('1111 连接成功', data, this.socketIO.connected)
      })
      this.socketIO.on('connect_error', (data) => {
        console.error('1111 连接失败', data, this.socketIO.connected)
      })
      this.socketIO &&
        this.socketIO.on('BROADCAST', (data) => {
          console.log('1111 监听到广播信息', data)
        })
    },
    // 点击断开连接
    handleDisconnect() {
      console.log('1111 点击断开连接')
      this.socket && this.socketIO.disconnect()
    },
    // 发送广播
    handleEmitBc() {
      console.log('1111 点击发送广播')
      const message = 'message'
      this.socketIO && this.socketIO.emit('BROADCAST', {message})
    }
  }
}
</script>
<style lang="less"></style>

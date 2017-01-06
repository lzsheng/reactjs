// 摇一摇事件
// let shakEve = new shakeEvent( ()=>{this.userShake()} );
// shakEve._init();//初始化摇一摇事件

class shakeEvent{
  constructor(callback) {

    this.cb = callback.bind(this);
    this._init = this._init.bind(this);
    this._destroy = this._destroy.bind(this);

    this.SHAKE_THRESHOLD = 1200;
    let last_update = 0;
    let x =0;
    let y =0;
    let z =0;
    let last_x =0;
    let last_y =0;
    let last_z =0;
    
    this._deviceMotionHandler=(eventData)=>{
        var acceleration = eventData.accelerationIncludingGravity;  
        var curTime = new Date().getTime();  
        if ((curTime - last_update) > 80) {
            var diffTime = curTime - last_update;  
            last_update = curTime;  
            x = acceleration.x;  
            y = acceleration.y;  
            z = acceleration.z;  
            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000; 
            if (speed > this.SHAKE_THRESHOLD) {
                this.cb();//摇动之后的回调
            }  
            last_x = x;  
            last_y = y;  
            last_z = z;  
        } 
    }

  }
  _destroy(){
        if (window.DeviceMotionEvent) {
            window.removeEventListener('devicemotion', this._deviceMotionHandler, false);
            return true;
        } else {
            alert('您的设备不支持摇一摇功能哦!');
            return false;
        }
    }
  _init(){
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', this._deviceMotionHandler, false);
        } else {
            alert('您的设备不支持摇一摇功能哦!');  
        }
    }
}

export default shakeEvent;
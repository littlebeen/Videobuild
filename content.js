const host=window.location.host.split(".")[1];function query(e,t){return(t=t||document).querySelector(e)}const videoWeb=["qq","iqiyi","aoxtv","bilibili"],videoPlay={iqiyi:{prepare(){this._player=query(".iqp-player video")},play(){this._player.play()},pause(){this._player.pause()},getCurrentTime(){return this._player.currentTime},setCurrentTime(e){this._player.currentTime=e}},qq:{prepare(){this._player=query(".txp_video_container video")},play(){this._player.play()},pause(){this._player.pause()},getCurrentTime(){return this._player.currentTime},setCurrentTime(e){this._player.currentTime=e}},aoxtv:{prepare(){this._player=document.getElementsByTagName("video")[0]},play(){this._player.play()},pause(){this._player.pause()},getCurrentTime(){return this._player.currentTime},setCurrentTime(e){this._player.currentTime=e}},bilibili:{prepare(){this._player=window.player||document.getElementsByTagName("video")[0]},play(){this._player.play()},pause(){this._player.pause()},getCurrentTime(){return"currentTime"in this._player?this._player.currentTime:(this._player.seek(this._player.getCurrentTime()),this._player.getCurrentTime()+1)},setCurrentTime(e){"currentTime"in this._player?this._player.currentTime=e:this._player.seek(e)}}};let player,i=5;function init(){videoWeb.includes(host)&&(player=videoPlay[host],getPlayer())}function getPlayer(){player.prepare(),i--,player._player||0===i?i?(console.log("success"),window.postMessage({type:"Page",getVideo:!0})):console.log("unsuccess",i):setTimeout(getPlayer,1e3)}init(),window.addEventListener("message",(e=>{if(player._player&&"Content"===e.data.type){if(console.log(e.data),"play"in e.data)return void(e.data.play?player.play():player.pause());"time"in e.data&&(e.data.time?player.setCurrentTime(e.data.time):window.postMessage({type:"Page",time:player.getCurrentTime()}))}}),!1);
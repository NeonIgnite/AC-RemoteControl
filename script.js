let acStatus= false;

let acTemplow=16;
let acTempHigh=29;
let fanStatus=false;
let fanSpeed=1;
let powerSwicth= document.getElementById('powerSwitch');
let screenSwitchOn= document.getElementById('powerOn');
let screenSwitchOff= document.getElementById('powerOff');
let tempretureDeg =document.getElementById('tempDegree');
let temp = Number(tempretureDeg.innerText);
let lowSpeed = document.getElementById('lowSpeed');
let midSpeed = document.getElementById('midSpeed');
let highSpeed = document.getElementById('highSpeed');
let freezeImg = document.getElementById('freezeImg');
let coolImg = document.getElementById('coolImg');
let hotImg = document.getElementById('hotImg');
function toggleStatus(){
    if(acStatus==false){
        acStatus=true;
        powerSwicth.style.color='green';
        powerSwicth.innerHTML='ON';
        screenSwitchOn.style.color='black';
        screenSwitchOff.style.color='#3e3e42';
        tempretureDeg.style.color='black';
        lowSpeed.style.display='flex'
        midSpeed.style.display='none';
        highSpeed.style.display='none';
        freezeImg.style.display='none';
        coolImg.style.display='flex';
        hotImg.style.display='none';
        fanStatus=true;
        console.log('acStatus is ON');
        console.log('current tempreture: '+ temp);
        console.log('current Fan Speed: '+ fanSpeed)
    }
    else{
        acStatus=false;
        console.log('acStatus is OFF')
        powerSwicth.style.color='red';
        powerSwicth.innerHTML='OFF'
        screenSwitchOn.style.color='#3e3e42';
        screenSwitchOff.style.color='black';
        tempretureDeg.style.color='#3e3e42';
        lowSpeed.style.display='none';
        midSpeed.style.display='none';
        highSpeed.style.display='none';
        freezeImg.style.display='none';
        coolImg.style.display='none';
        hotImg.style.display='none';
    }

}
function decreaseSpeed(){
    if(temp>16 && acStatus==true){
        temp-=1;
        console.log('ac Tempreture is' + temp);
        tempretureDeg.textContent =temp;
        if(temp<=18){
            freezeImg.style.display='flex';
            coolImg.style.display='none'
            hotImg.style.display='none';
        }
        else if(temp>18 && temp<=22){
            freezeImg.style.display='none';
            coolImg.style.display='flex';
            hotImg.style.display='none';
        }
        else{
            freezeImg.style.display='none';
            coolImg.style.display='none';
            hotImg.style.display='flex';
        }
    }
    
}
function increaseSpeed(){
    if(temp<29 && acStatus==true){
        temp+=1;
        console.log('ac Speed is' + temp);
        tempretureDeg.textContent =temp;
        if(temp<=18){
            freezeImg.style.display='flex';
            coolImg.style.display='none'
            hotImg.style.display='none';
        }
        else if(temp>18 && temp<=22){
            freezeImg.style.display='none';
            coolImg.style.display='flex';
            hotImg.style.display='none';
        }
        else{
            freezeImg.style.display='none';
            coolImg.style.display='none';
            hotImg.style.display='flex';
        }
    }
    
}
function fanToggle(){
    if(acStatus==true ){
        if(fanSpeed<=2 && fanStatus==true){
            fanSpeed+=1;
            console.log("fan speed is : " + fanSpeed);
            if(fanSpeed==2){
                lowSpeed.style.display='none';
                midSpeed.style.display='flex';
                highSpeed.style.display='none';
            }
            else if(fanSpeed==3){
                lowSpeed.style.display='none';
                midSpeed.style.display='none';
                highSpeed.style.display='flex';
            }
        }
        else{
            fanSpeed=1;
            console.log('fan speed is: '+ fanSpeed);
            lowSpeed.style.display='flex';
            midSpeed.style.display='none';
            highSpeed.style.display='none';
        }
    }
}


// let fanRobeStatus=false;
// let fanSpeed=0;

// function togglefanStatus(){
//     if(fanRobeStatus==false){
//         fanRobeStatus=true;
//         console.log('fan is on ' + fanRobeStatus);
//         fanSpeed=1;
//     }
//     else if(fanRobeStatus==true){
//         if(fanSpeed<=2){
//             fanSpeed+=1;
//             console.log("fan speed is" + fanSpeed)
//         }
//         else{
//             fanRobeStatus=false;
//             console.log('fan status is Off');
//         }
        
//     }
//     // fanRobeStatus==false?fanRobeStatus=true:fanRobeStatus=false
//     // fanRobeStatus==true?fanSpeed=1:
// }
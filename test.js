// ===== 黑客帝国代码雨背景 =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let columns, drops;
const fontSize = 16;
// 混合字符：英文字母 + 数字
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function initMatrix(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * -100));
}

function drawMatrix(){
    // 半透明黑色覆盖，形成拖尾效果
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px monospace";

    for(let i = 0; i < drops.length; i++){
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // 雨滴头部亮白色，其余绿色
        if(Math.random() > 0.975){
            ctx.fillStyle = "#cfffcc";
        }else{
            ctx.fillStyle = "#0f0";
        }
        ctx.fillText(char, x, y);

        // 落出屏幕后随机重置到顶部
        if(y > canvas.height && Math.random() > 0.975){
            drops[i] = 0;
        }
        drops[i]++;
    }
}

initMatrix();
setInterval(drawMatrix, 50);
window.addEventListener("resize", initMatrix);
// ===== 代码雨结束 =====

// ===== 打字机个人介绍 =====
const sentences = ["你好侯老师", "我是一名mc爱好者", "很高兴认识你"];
const typeText = document.getElementById("type-text");
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop(){
    const sentence = sentences[sentenceIndex];

    if(isDeleting){
        // 逐字删除
        charIndex--;
        typeText.innerText = sentence.substring(0, charIndex);
    }else{
        // 逐字显示
        charIndex++;
        typeText.innerText = sentence.substring(0, charIndex);
    }

    let delay = isDeleting ? 60 : 150;

    if(!isDeleting && charIndex === sentence.length){
        // 显示完整句话后停顿1秒
        delay = 1000;
        isDeleting = true;
    }else if(isDeleting && charIndex === 0){
        // 删除完毕后切换到下一句
        isDeleting = false;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
        delay = 300;
    }

    setTimeout(typeLoop, delay);
}

typeLoop();
// ===== 打字机结束 =====

function createBox(){
    let box = document.createElement("div");
    box.innerText = "😊 你好 😊";
    document.body.appendChild(box);
    box.className = "fake-alert";

    box.offsetHeight;

    box.style.left = (Math.random() * 100) + "%";
    box.style.top = (Math.random() * 100) + "%";
    box.style.opacity = "1";
    box.style.transform = `scale(${Math.random() + 0.5}) rotate(${Math.random() * 60 - 30}deg)`;
}

function test(){
    var n = 50;
    alert("彩蛋");
    for(var i=0;i<=n;i++){
        setTimeout(() => {createBox()}, i*100)

        
    }

    
}
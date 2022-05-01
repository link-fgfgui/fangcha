function isNum(arg) {
    let args = arg;
    let fad = true;
    if (args == "" || args == null || args.length == 0) {
        return false
    }
    args = args.toString();
    for (let i = 0; i < args.length; i++) {
        if (args.substring(i, i + 1) < "0" || args.substring(i, i + 1) > "9") {
            if (args.substring(i, i + 1) == ".") {
                if (fad == true) fad = false;
                else return false
            } else {
                return false
            }
        }
    }
    return true
}
function show() {
    document.getElementById('draggable').style.display = 'flex'
    document.getElementById('broadbut').value = '隐藏键盘'
    document.getElementById('broadbut').onclick = function () {
        hide2()
    }
}
function hide2() {
    document.getElementById('draggable').style.display = 'none'
    document.getElementById('broadbut').value = '显示键盘'
    document.getElementById('broadbut').onclick = function () {
        show()
    }
}
function fangcha() {
    let vva = document.getElementById('textarea').innerText;
    vva = vva.replace(' ', '');
    let resul1;
    let bb = true;
    if (vva.indexOf(',') != -1) {
        resul1 = vva.split(",")
    } else if (vva.indexOf('，') != -1) {
        resul1 = vva.split("，")
    }
    console.log(resul1)
    let resul = []
    for (let c = 0; c < resul1.length; c++) {
        let d = resul1[c]
        resul.push(Number(d))
    }
    console.log(resul);
    for (let v = 0; v < resul.length; v++) {
        let d = resul[v];
        if (isNaN(d) || d == "") {
            alert(`这个数字${d}不是有效的数字`)
            // alert("这个数字 \"" + d + "\" 不是有效的数字");
            bb = false;
            break
        }
    }
    if (bb == true) {
        let tot = resul.length;
        let mean = 0;
        document.getElementById('r1').value = tot;
        for (let c = 0; c < tot; c++) {
            mean = mean + parseFloat(resul[c])
        }
        mean = mean / tot;
        let mean1 = Math.round(mean * 100000) / 100000;
        document.getElementById('r2').value = mean1;
        let letiance = 0;
        let b;
        let letian;
        // let letian1;
        for (let a = 0; a < tot; a++) {
            letiance = letiance + Math.pow((parseFloat(resul[a]) - mean), 2);
            b = tot - 1;
            letian = letiance / b;
            letian1 = Math.round(letian * 100000) / 100000
        }
        // document.getElementById('r3').value = letian1;
        // let sd1
        // let sd = 0; {
        //     sd = Math.sqrt(letian);
        //     sd1 = Math.round(sd * 100000) / 100000
        // }
        // document.getElementById("r4").value = sd1;
        let pop2;
        let pop = 0; {
            pop = letiance / tot;
            let pop1 = Math.sqrt(pop);
            pop2 = pop1
            // pop2 = Math.round(pop1 * 100000) / 100000
        }
        let SortList = resul;
        SortList.sort(function (a, b) { return a - b });
        const LENG = SortList.length;
        let zhongweishu;
        if (SortList.length % 2 === 0) {
            zhongweishu = (SortList[LENG / 2 - 1] + SortList[LENG / 2]) / 2;
        } else {
            zhongweishu = SortList[(LENG + 1) / 2 - 1];
        }
        document.getElementById('r3').value = zhongweishu
        document.getElementById('r5').value = pop2;
        let letpop1;
        let letpop = 0; {
            letpop = letiance / tot;
            letpop1 = letpop;
            document.getElementById('tip').innerHTML = `${letiance}/${tot}`;
            // letpop1 = Math.round(letpop * 100000) / 100000
        }
        document.getElementById('r6').value = letpop1
    }
}
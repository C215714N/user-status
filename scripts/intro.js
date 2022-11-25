function statusColor(cn, obj) {
    cn.style.color = obj.color;
    cn.style.backgroundColor = obj.bg
}

function verify(element, callback) {
    let states = document.querySelectorAll(element), a, b;
    states.forEach(status => {
        status.innerHTML == 'Conectado' ? (a='#0c2', b='#232') : (a='#c33', b='#322')
        callback(status, {color:a, bg:b})
} ) }

verify('.state-connection', statusColor);
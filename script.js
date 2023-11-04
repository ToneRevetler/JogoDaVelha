const celulas = document.querySelectorAll('.cell');
let checarTurno =true;
const jogador_X = 'X';
const jogador_O = "O";

const Combinacoes =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

document.addEventListener("click", (event) =>{
    if(event.target.matches('.cell')){
        jogar(event.target.id)
    }
});

function jogar(id){
    const cell = document.getElementById(id)
    turno = checarTurno ? jogador_X : jogador_O;
    cell.textContent = turno;
    cell.classList.add(turno)
    checarVencedor(turno);
}

function checarVencedor(turno){
    const vencedor = Combinacoes.some((comb) =>{
        return comb.every((index) =>{
            return celulas[index].classList.contains(turno)
        })
    })

    if(vencedor){
        encerrarJogo(turno);
    }else if (checarEmpate()){
        encerrarJogo();
    }else {
        checarTurno =!checarTurno
    }
}

function checarEmpate(){
    let X =0;
    let O =0;

    for(index in celulas){
        if(!isNaN(index)){
            if(celulas[index].classList.contains(jogador_X)){
                X++;
            }
            if(celulas[index].classList.contains(jogador_O)){
                O++;
            }
        }
    }

    return X + O === 9 ? true : false;
}

function encerrarJogo(vencedor = null){
    if(vencedor){
        alert("O Vencedor é" +vencedor)
        setTimeout(() => location.reload(), 0)
    } else{
        alert("EMPATOU")
        setTimeout(() => location.reload(), 0)
    }

  
}